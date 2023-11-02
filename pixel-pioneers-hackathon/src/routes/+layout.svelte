<script lang="ts">
  import "../app.postcss";
  import type { PopupSettings } from "@skeletonlabs/skeleton";
  // Dependency: Floating UI
  import { AppBar, AppShell, Avatar, LightSwitch, popup, storePopup } from "@skeletonlabs/skeleton";
  import type { SubmitFunction } from "@sveltejs/kit";
  import { storeTheme } from "$lib/stores/stores";
  import { enhance } from "$app/forms";
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";

  import Fa from "svelte-fa/src/fa.svelte";
  import { faBars, faBuildingColumns, faGraduationCap, faPen, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
  import type { PageData } from "./$types";

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
  export let data: PageData;

  const popupTheme: PopupSettings = {
    event: "click",
    target: "popupTheme",
    placement: "bottom"
  };

  const themes = [
    { type: "wintry", name: "Wintry", icon: "🌨️" },
    { type: "rocket", name: "Rocket", icon: "🚀" },
    { type: "seafoam", name: "Seafoam", icon: "🧜‍♀️" },
    { type: "crimson", name: "Crimson", icon: "⭕" },
    { type: "modern", name: "Modern", icon: "🤖" }
  ];

  const setTheme: SubmitFunction = ({ formData }) => {
    const theme = formData.get("theme")?.toString();

    if (theme) {
      document.body.setAttribute("data-theme", theme);
      $storeTheme = theme;
    }
  };

  let value = "hidden";

  function toggleMenu() {
    if (value === "hidden") value = "flex";
    else value = "hidden";
  }


</script>

<!-- App Shell -->
<AppShell shadow="shadow-2xl" slotTrail="!space-x-2">
  <svelte:fragment slot="sidebarLeft">

    <!-- TODO: doesnt render ontop of everything... -->

    <div class="card variant-gradient-primary-secondary p-1 {value} lg:hidden flex-col h-full absolute">
      <a href="/degrees" class="flex flex-row group" on:click={toggleMenu}>
        <div
          class="relative items-center justify-left flex flex-row h-12 w-full py-5 pe-5 ps-3 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear"
        >
          <Fa icon={faGraduationCap} size="lg" class="h-10 w-10" />
          <p class="font-bold mb-1">Degree</p>
        </div>
      </a>

      <a href="/" class="flex flex-row group" on:click={toggleMenu}>
        <div
          class="relative items-center justify-left flex flex-row h-12 w-full py-5 pe-5 ps-3 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear"
        >
          <Fa icon={faBuildingColumns} size="lg" class="h-10 w-10" />
          <p class="font-bold mb-1">Universities</p>
        </div>
      </a>

      <a href="/Account/Details" class="flex flex-row group" on:click={toggleMenu}>
        <div
          class="relative items-center justify-left flex flex-row h-12 w-full py-5 pe-5 ps-3 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear"
        >
          <Fa icon={faUser} size="lg" class="h-10 w-10" />
          <p class="font-bold mb-1">Account</p>
        </div>
      </a>

      <a href="/" class="flex flex-row group" on:click={toggleMenu}>
        <div
          class="relative items-center justify-left flex flex-row h-12 w-full py-5 pe-5 ps-3 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear"
        >
          <Fa icon={faStar} size="lg" class="h-10 w-10" />
          <p class="font-bold mb-1">Favourites</p>
        </div>
      </a>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar
      padding="p-2"
      gridColumns="grid-cols-3"
      slotDefault="place-self-center"
      slotTrail="place-content-end"
    >
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase mx-4"><a href="/home">Pixel Pioneers</a></strong>
      </svelte:fragment>

      <div class="relative">
        <!-- Heading knoppies -->
        <div class="relative">
          <div class="flex items-center">
            <!-- TODO: maybe make it its own css tag -->
            <a
              href="/degrees"
              class="relative hidden lg:flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group"
            >
              <Fa icon={faGraduationCap} size="lg" class="h-10 w-10" />
              <span
                class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100"
              >
								Degrees
							</span>
            </a>

            <a
              href="/"
              class="relative hidden lg:flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group"
            >
              <Fa icon={faBuildingColumns} size="lg" class="h-10 w-10" />
              <span
                class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100"
              >
								Universities
							</span>
            </a>

            <a
              href="/"
              class="relative hidden lg:flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group"
            >
              <Fa icon={faUser} size="lg" class="h-10 w-10" />
              <span
                class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100"
              >
								Account
							</span>
            </a>

            <a
              href="/protected/favourites"
              class="relative hidden lg:flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group"
            >
              <Fa icon={faStar} size="lg" class="h-10 w-10" />
              <span
                class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100"
              >
								Favourites
							</span>
            </a>

            <button
              on:click={toggleMenu}
              class="relative flex items-center lg:hidden justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group"
            >
              <Fa icon={faBars} size="lg" class="h-10 w-10" />
            </button>

            <button
              use:popup={popupTheme}
              class="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group"
            >
              <Fa icon={faPen} size="lg" class="h-10 w-10" />
              <span
                class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100"
              >
								Theme
							</span>
            </button>
          </div>
        </div>
      </div>

      <div class="card p-4 w-60 shadow-xl text-primary-500" data-popup="popupTheme">
        <div class="arrow bg-surface-100-800-token" />
        <div class="space-y-4">
          <section class="flex justify-between items-center">
            <h6 class="h6">Mode</h6>
            <LightSwitch />
          </section>
          <hr />
          <nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
            <form action="/?/setTheme" method="POST" use:enhance={setTheme}>
              <ul>
                {#each themes as { icon, name, type }}
                  <li>
                    <button
                      class="option w-full h-full"
                      type="submit"
                      name="theme"
                      value={type}
                      class:bg-primary-active-token={$storeTheme === type}
                    >
                      <span>{icon}</span>
                      <span class="flex-auto text-left">{name}</span>
                    </button>
                  </li>
                {/each}
              </ul>
            </form>
          </nav>
        </div>
      </div>

      <svelte:fragment slot="trail">
        <div class="flex title-font font-medium items-center mx-4">
          <!-- Use if statement for logged in check -->

          <!-- basically the button-avatar div displays when the screen is too small, to display better on mobile -->
          <!-- The text on mobile drew over elements. From here, button can nnavigate to /account/details when logged in -->
          <!-- when not logged in, should navigate to login/register. Should also show some symbol to better portray purpose when logged out -->


          {#if data.user}
            <div class="flex items-center overflow-hidden">
              <a href="/account/details">
                <Avatar
                  border="border-4 border-surface-300-600-token hover:!border-primary-500"
                  cursor="cursor-pointer"
                  initials={data.user.name.slice(0, 1)}

                />
                <!--                  src="{data.user.photo}"-->

              </a>
            </div>
          {:else}
            <div class="hidden sm:hidden lg:flex overflow-hidden items-center">
              <p class="mr-3">
                <a href="/auth/login" class="text-primary-600 hover:underline dark:text-primary-500"
                >Login</a
                >
                or
                <a
                  href="/auth/register/"
                  class="text-primary-600 hover:underline dark:text-primary-500">Register</a
                > to get started!
              </p>
            </div>

          {/if}


          <!--      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>-->
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
  <svelte:fragment slot="pageFooter">
    <footer class="body-font">
      <div class="container px-5 py-5 pt-20 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          class="flex title-font font-medium items-center md:justify-start justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
            style="--darkreader-inline-stroke: currentColor;"
            data-darkreader-inline-stroke=""
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span class="ml-3 text-xl">Pixel Pioneers</span>
        </a>
        <p class="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Pixel Pioneers —
          <a
            href="https://twitter.com/knyttneve"
            class="ml-1"
            rel="noopener noreferrer"
            target="_blank">@---</a
          >
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<a href="/" class="">
						<svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              style="--darkreader-inline-fill: currentColor;"
              data-darkreader-inline-fill=""
            >
							<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
						</svg>
					</a>
					<a href="/" class="ml-3">
						<svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              style="--darkreader-inline-fill: currentColor;"
              data-darkreader-inline-fill=""
            >
							<path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              />
						</svg>
					</a>
					<a href="/" class="ml-3">
						<svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              style="--darkreader-inline-stroke: currentColor;"
              data-darkreader-inline-stroke=""
            >
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
						</svg>
					</a>
					<a href="/" class="ml-3">
						<svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              style="--darkreader-inline-fill: currentColor; --darkreader-inline-stroke: currentColor;"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
            >
							<path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                style="--darkreader-inline-stroke: none;"
                data-darkreader-inline-stroke=""
              />
							<circle
                cx="4"
                cy="4"
                r="2"
                stroke="none"
                style="--darkreader-inline-stroke: none;"
                data-darkreader-inline-stroke=""
              />
						</svg>
					</a>
				</span>
      </div>
    </footer>
  </svelte:fragment>
</AppShell>
