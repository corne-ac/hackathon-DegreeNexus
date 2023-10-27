<script lang="ts">
  import "../app.postcss";
  import type { PopupSettings } from "@skeletonlabs/skeleton";
  // Dependency: Floating UI
  import { AppBar, AppShell, LightSwitch, popup, storePopup } from "@skeletonlabs/skeleton";
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
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">Skeleton</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://discord.gg/EXqV7W8MtY"
          rel="noreferrer"
          target="_blank"
        >
          Discord
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://twitter.com/SkeletonUI"
          rel="noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://github.com/skeletonlabs/skeleton"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <div>
          <button class="btn variant-filled" use:popup={popupTheme}>Themes</button>
          <div class="card p-4 w-60 shadow-xl" data-popup="popupTheme">
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
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
  
  <footer class="body-font">
    <div class="container px-5 py-5 pt-20 mx-auto flex items-center sm:flex-row flex-col">
      <a href="" class="flex title-font font-medium items-center md:justify-start justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Pixel Pioneers</span>
      </a>
      <p class="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" class="ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a href=""  class="">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24" style="--darkreader-inline-fill: currentColor;" data-darkreader-inline-fill="">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href="" class="ml-3">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24" style="--darkreader-inline-fill: currentColor;" data-darkreader-inline-fill="">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href="" class="ml-3">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="" class="ml-3">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24" style="--darkreader-inline-fill: currentColor; --darkreader-inline-stroke: currentColor;" data-darkreader-inline-fill="" data-darkreader-inline-stroke="">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" style="--darkreader-inline-stroke: none;" data-darkreader-inline-stroke=""></path>
            <circle cx="4" cy="4" r="2" stroke="none" style="--darkreader-inline-stroke: none;" data-darkreader-inline-stroke=""></circle>
          </svg>
        </a>
      </span>
    </div>
  </footer>
</AppShell>
