<script lang="ts">
  import type { PageData } from "./$types";
  import { Autocomplete, Avatar, InputChip } from "@skeletonlabs/skeleton";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faSearch, faGraduationCap, faFilter } from "@fortawesome/free-solid-svg-icons";
  import { CldImage } from "svelte-cloudinary";

  let inputChip = "";
  let inputChipList: string[] = [];
  export let data: PageData;
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

<!--Search bar-->
<!--Search bar-->
<form class="w-full justify-center items-center flex flex-col" method="POST" action="?/degrees" use:enhance>
  <div class="card mx-auto mb-2 mt-10 p-3 md:w-1/2 w-full">      
  <!-- search -->
  <div class="container">
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
      <div class="input-group-shim justify-center items-center hover:variant-filled-primary variant-soft-primary" on:click={toggleMenu}>
        <Fa icon={faFilter} />
      </div>
      <input
        value={form?.searchTerm ?? ''}
        class="bg-transparent border-0 ring-0"
        name="search"
        id="search"
        placeholder="Write a message..."
        />
      <button type="submit" class="hover:variant-filled-primary variant-soft-primary">
        <Fa icon={faSearch}></Fa>
      </button>
    </div>
  </div>
</div>

<!-- tags -->
<div class="{value} p-4 text-token w-1/2 max-w-sm space-y-2">
  <InputChip name="chips" bind:input={inputChip} bind:value={inputChipList} chips="variant-filled-primary" max={3} />
  <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto variant-ghost" tabindex="-1">
    <Autocomplete bind:input={inputChip} options={tagOptions} denylist={inputChipList}
                  on:selection={onInputChipSelect} />
  </div>
</div>

<input hidden value={inputChipList} name="selectedChips">
</form>

  <div
    class="container justify-center items-center md:mx-auto grid grid-flow-row gap-8 sm:p-20  md:p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

    {#each data.rows as item }
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
          <h2 class="uppercase text-lg line-clamp-2">{item.title}</h2>
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