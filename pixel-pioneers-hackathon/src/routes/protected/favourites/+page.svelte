<script lang="ts">
  import type { PageData } from "./$types";
  import { Autocomplete, Avatar, InputChip } from "@skeletonlabs/skeleton";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
<div class="space-y-10">
  <div></div>
  <div class="flex items-center justify-center mx-auto max-w-7xl space-y-10">
    <div class=" input-group input-group-divider grid-cols-[auto_1fr_auto]">
      <div class="input-group-shim">
        <Fa icon={faSearch} />
      </div>
      <input type="search" placeholder="Search..." />
      <button class="variant-ghost-primary">Submit</button>
    </div>
  </div>

  <div class="text-token w-full max-w-sm space-y-2">
    <InputChip bind:input={inputChip} bind:value={inputChipList} name="chips" chips="variant-filled-primary" max={3} />
    <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
      <Autocomplete bind:input={inputChip} options={tagOptions} denylist={inputChipList}
                    on:selection={onInputChipSelect} />
    </div>
  </div>
  <!--<InputChip

    bind:input={inputChip} bind:value={inputChipList} on:remove={inputChipRemove}
             chips="variant-filled-primary"
             name="chips" />

  <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
    <Autocomplete
      bind:input={inputChip}
      options={flavorOptions}
      denylist={inputChipList}
      on:selection={onInputChipSelect}
    />
  </div>-->

  <div
    class="container justify-center items-center md:mx-auto grid grid-flow-row gap-8 sm:p-20  md:p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

    {#each data.rows as degree}

      <a href="/degrees" class="card variant-soft-secondary card-hover overflow-hidden ">
        <!-- top image -->
        <header>
          <img src="/degree_hat.jpg" class="bg-black/50 w-full aspect-[18/10] " alt="Degree Img" />
          <!-- TODO: Fix aspect ratio if images, currently warps to fit aspect -->
        </header>
        <!-- content of card -->
        <div class="p-3 space-y-2">
          <h2 class="uppercase text-lg">degree Title</h2>
          <article>
            <p class="leading-tight tracking-tight">
              This will be the entire body of the card. it will be filled with a description, or can contain info on
              requirements. dont know yet.
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
            class="text-gray-400 font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2">
                    <small>Degree lvl</small>
                </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <Avatar src="/favicon.png" width="w-8" />
                </span>
        </footer>
      </a>

    {/each}

  </div>
</div>