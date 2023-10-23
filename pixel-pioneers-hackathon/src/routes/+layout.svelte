<script lang="ts">
  import "../app.postcss";
  import { AppShell, AppBar, LightSwitch } from "@skeletonlabs/skeleton";
  import { computePosition, flip, shift, offset, arrow } from "@floating-ui/dom";
  import { storePopup } from "@skeletonlabs/skeleton";

  storePopup.set({ computePosition, flip, shift, offset, arrow });
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
        <LightSwitch />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
