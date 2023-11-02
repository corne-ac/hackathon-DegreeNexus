<script lang="ts">
  import type { PageData } from "./$types";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
  import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";

  export let data: PageData;
  let valueMultiple: string[] = ['books', 'movies'];
</script>

<div class="space-y-10">
  <div></div>
  <div class="flex items-center justify-center mx-auto max-w-7xl space-y-10">
    <div class=" input-group input-group-divider grid-cols-[auto_1fr_auto]">
      <div class="input-group-shim">(icon)</div>
      <input type="search" placeholder="Search..." />
      <button class="variant-ghost-primary">Submit</button>
    </div>
  </div>

  <div class="container justify-center items-center md:mx-auto grid grid-flow-row gap-8 sm:p-20  md:p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">


    {#each data.degrees as item }
      <a href="/degrees/{item.id}" class="card variant-soft-secondary card-hover overflow-hidden ">
        <!-- top image -->
        <header>
          <img src="/degree_hat.jpg" class="bg-black/50 w-full aspect-[18/10] " alt="Degree Img" />
          <!-- TODO: Fix aspect ratio of images, currently warps to fit aspect -->
        </header>
        <!-- content of card -->
        <div class="p-3 space-y-2">
          <h2 class="uppercase text-lg">{item.title}</h2>
          <article>
            <p class="leading-tight tracking-tight">
              {item.description}
            </p>
          </article>
        </div>
        <!-- bottom part, details -->
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
          <div class="flex-auto flex justify-between items-center leading-none">
            <h6 class="font-bold" data-toc-ignore>Uni Name</h6>

          </div>

          <span
            class="text-gray-400 font-bold inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
            <Fa icon={faGraduationCap} size="lg" class="h-10 w-10" />
                    <small>{item.level}</small>
                </span>
        </footer>
      </a>

    {/each}

  </div>
</div>