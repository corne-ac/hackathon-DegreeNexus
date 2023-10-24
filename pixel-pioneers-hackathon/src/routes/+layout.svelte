<script lang="ts">
  import "../app.postcss";
  import type { PopupSettings } from "@skeletonlabs/skeleton";
  import { AppBar, AppShell, LightSwitch, popup } from "@skeletonlabs/skeleton";
  import type { SubmitFunction } from "@sveltejs/kit";
  import { storeTheme } from "$lib/stores/stores";
  import { enhance } from "$app/forms";
  // Dependency: Floating UI
  import { storePopup } from "@skeletonlabs/skeleton";
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });


  const popupTheme: PopupSettings = {
    // Represents the type of event that opens/closed the popup
    event: "click",
    // Matches the data-popup value on your popup element
    target: "popupTheme",
    // Defines which side of your trigger the popup will appear
    placement: "bottom"
  };

  const themes = [
    { type: "wintry", name: "Wintry", icon: "🌨️" },
    { type: "rocket", name: "Rocket", icon: "🚀" },
    { type: "seafoam", name: "Seafoam", icon: "🧜‍♀️" },
    { type: "crimson", name: "Crimson", icon: "⭕" }
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
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://twitter.com/SkeletonUI"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://github.com/skeletonlabs/skeleton"
          target="_blank"
          rel="noreferrer"
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

          <!--<div class="card p-4 w-60 shadow-xl" data-popup="theme">
            <div class="space-y-4">
              <section class="flex justify-between items-center">
                <h6 class="h6">Mode</h6>
                <LightSwitch />
              </section>
              <hr />
              <nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
                &lt;!&ndash;<form action="/?/setTheme" method="POST" use:enhance={setTheme}>
                  <ul>
                    &lt;!&ndash; , badge &ndash;&gt;
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
                          &lt;!&ndash; {#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if} &ndash;&gt;
                        </button>
                      </li>
                    {/each}
                  </ul>
                </form>&ndash;&gt;
              </nav>
              <hr />
              <div>
                <a class="btn variant-filled w-full" href="/docs/generator">
                  <i class="fa-solid fa-palette" />
                  <span>Create a Theme</span>
                </a>
              </div>
            </div>
            &lt;!&ndash; <div class="arrow bg-surface-100-800-token" /> &ndash;&gt;
          </div>-->
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
