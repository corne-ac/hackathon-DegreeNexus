import { db } from '$lib/server/prisma';
import type { Actions, PageServerLoad } from "./$types";

export const actions: h Actions = {
	comment: async ({ request, locals, params }) => {
		let formData = await request.formData();
		console.log(formData);
		await db.post.create({
			data: {
				userId: locals.user?.id,
				comment: formData.get('comment')?.toString() ?? '',
				degreeId: params.degreeId,
				stars: parseInt(formData.get('stars')?.toString() ?? '1')
			}
		});

		return { posts: await db.post.findMany({}) };
	}
};
export const load: PageServerLoad = async ({ params }) => {
	try {
		let degree = await db.degree.findUnique({
			where: {
				id: params.degreeId
			},
			select: {
				title: true,
				description: true,
				links: true,
				requirements: true,
				level: true,
				tags: true,
				photo: true
			}
		});

		return { degree: degree, posts: await db.post.findMany({}) };
	} catch (e: any) {
		return {
			degree: null,
			error: {
				name: e.name,
				message: e.message,
				stack: e.stack
			}
		};
	}

	/*	try {
    const degree = await db.degree.findUnique({
      where: {
        id: params.degreeId
      }
    });

    const links = await db.link.findMany({
      where: {
        degreeId: params.degreeId
      }
    });

    if (degree != null) {
      return { degree: degree, links: links };
    }

    throw error(404, 'not found');
  } catch (e: any) {
    return {
      degree: [],
      error: {
        name: e.name,
        message: e.message,
        stack: e.stack
      }
    };
  } finally {
    await db.$disconnect();
  }*/
};

// export function load({ params }) {
// 	if (params.degreeId != null) {
// 		return {
// 			id: params.degreeId
// 		};
// 	}

// 	throw error(404, 'Not found');
// }
