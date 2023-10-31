<script lang="ts">
  import "../app.postcss";
  import type { PopupSettings } from "@skeletonlabs/skeleton";
  // Dependency: Floating UI
  import { AppBar, AppShell, Avatar, LightSwitch, popup, storePopup } from "@skeletonlabs/skeleton";
  import type { SubmitFunction } from "@sveltejs/kit";
  import { storeTheme } from "$lib/stores/stores";
  import { enhance } from "$app/forms";
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });


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

</script>

<!-- App Shell -->
<AppShell shadow="shadow-2xl" slotTrail="!space-x-2">
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar padding="p-2" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase mx-4"><a href="/home">Pixel Pioneers</a></strong>
      </svelte:fragment>
      <div class="relative hidden lg:block">
        <div class="flex items-center space-x-4">
          <!-- Navigation elements - Simple Symbols with hover descriptions? -->
          <!-- TODO: maybe make it its own css tag -->
          <a href="/degrees"
             class="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path
                d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path
                d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
              <path
                d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
            </svg>
            <span
              class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100">
            Degrees
          </span>
          </a>

          <a href="/"
             class="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path
                d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
              <path fill-rule="evenodd"
                    d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
                    clip-rule="evenodd" />
              <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
            </svg>
            <span
              class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100">
            Universities
          </span>
          </a>

          <a href="/"
             class="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clip-rule="evenodd" />
            </svg>
            <span
              class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100">
            Account
          </span>
          </a>

          <a href="/protected/favourites"
             class="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
            </svg>
            <span
              class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100">
            Favourites
          </span>
          </a>

          <button use:popup={popupTheme}
                  class="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-2 variant-soft-primary hover:bg-opacity-100 text-primary-500 hover:variant-filled-primary hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd"
                    d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
                    clip-rule="evenodd" />
            </svg>
            <span
              class="absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-0 origin-top group-hover:scale-100">
            Theme
          </span>

          </button>
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
          {#if false}
            <span class="mr-3 text-xl">Current User</span>
          {:else if true}
            <p class="mr-3"><a href="/auth/login"
                               class="text-primary-600 hover:underline dark:text-primary-500">Login</a> or <a
              href="/auth/register/" class="text-primary-600 hover:underline dark:text-primary-500">Register</a> to get
              started!</p>
          {/if}

          <Avatar
            border="border-4 border-surface-300-600-token hover:!border-primary-500"
            cursor="cursor-pointer"
          />

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
        <a href="/" class="flex title-font font-medium items-center md:justify-start justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
               stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
               viewBox="0 0 24 24" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Pixel Pioneers</span>
        </a>
        <p class="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Pixel Pioneers —
          <a href="https://twitter.com/knyttneve" class="ml-1" rel="noopener noreferrer" target="_blank">@---</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a href="/" class="">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
               viewBox="0 0 24 24" style="--darkreader-inline-fill: currentColor;" data-darkreader-inline-fill="">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href="/" class="ml-3">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
               viewBox="0 0 24 24" style="--darkreader-inline-fill: currentColor;" data-darkreader-inline-fill="">
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href="/" class="ml-3">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               class="w-5 h-5" viewBox="0 0 24 24" style="--darkreader-inline-stroke: currentColor;"
               data-darkreader-inline-stroke="">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="/" class="ml-3">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"
               class="w-5 h-5" viewBox="0 0 24 24"
               style="--darkreader-inline-fill: currentColor; --darkreader-inline-stroke: currentColor;"
               data-darkreader-inline-fill="" data-darkreader-inline-stroke="">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  style="--darkreader-inline-stroke: none;" data-darkreader-inline-stroke=""></path>
            <circle cx="4" cy="4" r="2" stroke="none" style="--darkreader-inline-stroke: none;"
                    data-darkreader-inline-stroke=""></circle>
          </svg>
        </a>
      </span>
      </div>
    </footer>
  </svelte:fragment>
</AppShell>
