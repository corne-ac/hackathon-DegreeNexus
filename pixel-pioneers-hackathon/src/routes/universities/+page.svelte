<script lang="ts">
    import Layout from "../+layout.svelte";
    import type { PageData } from "./$types";
    import Fa from "svelte-fa/src/fa.svelte";
    import { faScroll } from "@fortawesome/free-solid-svg-icons";
    import { CldImage, CldUploadWidget } from "svelte-cloudinary";
    
    export let data: PageData;
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
    <div
      class="container justify-center items-center md:mx-auto grid grid-flow-row gap-8 sm:p-20  md:p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
  
      {#each data.universities as item }
        <a href="/universities/{item.id}" class="card variant-soft-secondary card-hover overflow-hidden ">
          <!-- top image -->
          <header>
            <!-- <img src="/degree_hat.jpg" class="bg-black/50 w-full aspect-[18/10] " alt="University Img" /> -->
            <CldImage
            width="w-full"
            height="h-full"
            src={item?.photo??"cctdutckxknfz8j9xbue"}
            alt="Degree Image"
            class="bg-black/50 aspect-[18/10]"
          />
            <!-- TODO: Fix aspect ratio of images, currently warps to fit aspect -->
          </header>
          <!-- content of card -->
          <div class="p-3 space-y-2">
            <h2 class="uppercase text-lg">{item.name}</h2>
          </div>
          <!-- bottom part, details -->
          <hr class="opacity-50" />
          <footer class="p-4 flex justify-center items-center space-x-4">
            <div class="flex-auto font-semibold italic flex items-center leading-none">
                <Fa icon={faScroll} size="lg" class="h-10 w-10 pe-2"/>
              <h6 class=" me-1" data-toc-ignore>Total Degrees: </h6>
                <p>{item._count.Degree}</p>
            </div>
          </footer>
        </a>
  
      {/each}
  
    </div>
  </div>