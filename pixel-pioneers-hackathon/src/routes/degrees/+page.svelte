<script lang="ts">
  import type { PageData } from "./$types";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faGraduationCap, faSearch } from "@fortawesome/free-solid-svg-icons";
  import { CldImage } from "svelte-cloudinary";
  import { Autocomplete, Avatar, InputChip } from "@skeletonlabs/skeleton";

  export let data: PageData;
  let valueMultiple: string[] = ["books", "movies"];

  //Tags
  let inputChip = "";
  let inputChipList: string[] = [];
  let tagOptions = data.tags?.map((tag) => {
    return { label: tag.name, value: tag.name };
  }) ?? [];

  function onInputChipSelect(event: CustomEvent): void {
    if (inputChipList.includes(event.detail) === false) {
      inputChipList = [...inputChipList, event.detail.value];
      inputChip = "";
    }
  }

</script>

<div class="space-y-10">
  
  <!--Search bar-->

  <div class="space-y-10 w-full justify-center items-center flex flex-col">
    <div></div>
    <div class="flex items-center w-full justify-center mx-auto max-w-7xl space-y-10">
      <div class=" input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <div class="input-group-shim hover:variant-filled-primary variant-soft-primary">
          <Fa icon={faSearch} />
        </div>
        <input type="search" placeholder="Search..." />
        <button class="hover:variant-filled-primary variant-soft-primary">Submit</button>
      </div>
    </div>
    
    <!-- tags -->
    <div class="card p-4 text-token w-1/2 max-w-sm space-y-2">
      <InputChip bind:input={inputChip} bind:value={inputChipList} name="chips" chips="variant-filled-primary" max={3} />
      <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto variant-ghost" tabindex="-1">
        <Autocomplete bind:input={inputChip} options={tagOptions} denylist={inputChipList}
                      on:selection={onInputChipSelect} />
      </div>
  </div>
  
</div>
<!-- Tag end -->


  <div
    class="container justify-center items-center md:mx-auto grid grid-flow-row gap-8 sm:p-20  md:p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    {#each data.degrees as item }


      <a href="/degrees/{item.id}" class="card variant-soft-secondary card-hover overflow-hidden ">
        <!-- top image -->
        <header>
          <!-- <img src="/degree_hat.jpg" class="bg-black/50 w-full aspect-[18/10] " alt="Degree Img" /> -->
          <CldImage
            width="w-full"
            height="h-full"
            src={item?.photo??"cctdutckxknfz8j9xbue"}
            alt="Degree Image"
            class="bg-black/50 w-full aspect-[18/10]"
          />
          <!-- TODO: Fix aspect ratio of images, currently warps to fit aspect -->
        </header>
        <!-- content of card -->
        <div class="p-3 space-y-2">
          <h2 class="uppercase text-lg">{item.title}</h2>
          <article>
            <p class="leading-tight tracking-tight line-clamp-3">
              {item.description?.replaceAll('\\n', ' ')}
            </p>
          </article>
        </div>
        <!-- bottom part, details -->
        <hr class="opacity-50" />
        <div class="px-4 py-2 flex justify-start items-center">
          <div class="flex flex-row flex-wrap gap-2">
            {#if item?.tags?.length > 0}
              {#each item?.tags ?? [] as tag}
                <span class="chip variant-soft">
                  {tag.name}
                </span>
              {/each}
            {:else}
              <span class="chip variant-soft">
                  No Tags
              </span>
            {/if}
          </div>
        </div>
        <footer class="p-4 flex justify-start items-center space-x-4">


          <div class="flex-auto flex justify-between items-center leading-none">
            <h6 class="font-bold" data-toc-ignore>{item.University?.name}</h6>
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