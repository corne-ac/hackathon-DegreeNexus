import type { Handle } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { verifyJWT } from "$lib/server/token";
import { db } from "$lib/server/prisma";

const themeHook = (async ({ event, resolve }) => {
  let theme = "";
  const cookieTheme = event.cookies.get("theme");
  if (cookieTheme) {
    theme = cookieTheme;
  } else {
    event.cookies.set("theme", "wintry");
    theme = "wintry";
  }

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("data-theme=\"wintry\"", `data-theme="${theme}"`)
  });
}) satisfies Handle;

const authHook = (async ({ event, resolve }) => {
  let authToken: string | undefined;
  if (event.cookies.get("token")) {
    authToken = event.cookies.get("token");
  } else if (event.request.headers.get("Authorization")?.startsWith("Bearer ")) {
    authToken = event.request.headers.get("Authorization")?.substring(7);
  }
  if (!authToken && event.url.pathname.startsWith("/protected")) {
    throw error(401, "You are not logged in. Please provide a token to gain access.");
  }

  try {
    if (authToken) {
      const { sub } = await verifyJWT<{ sub: string }>(authToken);
      const user = await db.user.findUnique({ where: { id: sub } });
      if (!user) {
        throw error(401, "User belonging to this token no longer exists");
      }
      event.locals.user = user;
    }
  } catch (err: any) {
    if (event.url.pathname.startsWith("/api")) {
      throw error(401, "Token is invalid or user doesn't exists");
    }
  }

  /*	const response = await resolve(event);

    if (event.url.pathname.startsWith('/protected')) {
      if (!event.locals.user) {
        let token = event.cookies.get('token');
        console.log('We have our token from the part ', token);
        if (token) {
          try {
            await verifyJWT(token);
            return resolve(event);
          } catch (error) {
            throw redirect(303, '/auth/login');
          }
        }

        throw redirect(303, '/auth/login');
      }
    }*/
  return resolve(event);
}) satisfies Handle;

// reverted this
export const handle = sequence(authHook, themeHook);
