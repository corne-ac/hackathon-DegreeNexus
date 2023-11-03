<script lang="ts">
  import { faBuildingColumns, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
  import type { PageData } from "./$types";
  import { Ratings } from "@skeletonlabs/skeleton";
  import Fa from "svelte-fa/src/fa.svelte";
  import { CldImage } from "svelte-cloudinary";
  import { faPaperPlane, faComment } from "@fortawesome/free-solid-svg-icons";
  import { enhance } from "$app/forms";

  export let form: FormData;
  export let data: PageData;
  let currentMessage = "";

  let desc = data?.degree?.description?.replaceAll("\\n", "\n");
  let value = {
    max: 5,
    current: 1
  };

  function iconClick(event: CustomEvent<{ index: number }>): void {
    value.current = event.detail.index;
  }


</script>

<div class="container justify-center items-center rounded-xl md:mx-auto variant-soft-primary my-10 p-3 mb-10">
  <!-- TODO: Wrap items on smaller screens -->
  <div class="flex md:flex-row flex-col justify-center justify-items-center">
    <strong
      class=" uppercase mx-4 text-4xl pt-0 md:pt-20 md:pe-10 pe-0 basis-3/5 pb-5 md:pb-0">{data.degree?.title}</strong>
    <div class="bg-black/50 md:w-1/2 w-full justify-center mx-auto h-full aspect-[18/10] rounded-lg basis-2/5">
      <CldImage
        width="w-full"
        height="h-full"
        src={data.degree?.photo??"cctdutckxknfz8j9xbue"}
        alt="Degree Image"
        class="bg-black/50 md:w-1/2 w-full justify-center mx-auto h-full aspect-[18/10] rounded-lg basis-2/5"
      />
    </div>
  </div>

  <div class="py-8 flex flex-row flex-wrap">

    <!-- Main Text body -->
    <div class="flex-row basis-5/6 px-3 text-justify md:pe-5 pe-0 pb-5">
      <h2 class="text-2xl font-medium  title-font mb-2">Description</h2>
      <p class="leading-relaxed whitespace-pre-wrap">{desc}</p>
      <h2 class="text-2xl font-medium  title-font mb-2 mt-6">Requirements</h2>
      <p>{data.degree?.requirements}</p>

      <h2 class="text-2xl font-medium  title-font mb-2 mt-6">Tags</h2>
      {#if data.degree?.tags.length === 0}
        <p class="text-gray-400 text-sm ps-2">No tags available</p>
      {:else}
        <div class="flex flex-row flex-wrap gap-2">
          {#each data.degree?.tags ?? [] as item}
            <span class="chip variant-soft">
              {item.name}
            </span>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Right-side Info Panel -->
    <div class="mb-6 flex basis-1/6 flex-col flex-wrap gap-2  border-l-2 border-secondary-50/50 ps-4">

      <div class="flex flex-row items-center">
                <span class="text-gray-400 text-sm pe-2">
                    <Fa icon={faBuildingColumns} size="lg" class="h-10 w-10" />
                </span>
        <span class="text-gray-400 font-bold mr-3 text-sm pr-3 py-1 ">
                    <p>Varsity College</p>
                </span>
      </div>

      <!-- Degree Lvl + Avatar -->
      <div class="flex flex-row items-center">
                <span class="text-gray-400 text-sm pe-2">
                    <Fa icon={faGraduationCap} size="lg" class="h-10 w-10" />
                </span>
        <span class="text-gray-400 font-bold mr-3 text-sm pr-3 py-1 capitalize">
                    {data.degree?.level}
                </span>
      </div>


      <span class="font-bold title-font ps-2">LINKS</span>
      {#if data.degree?.links.length === 0}
        <p class="text-gray-400 text-sm ps-2">No links available</p>
      {:else}
        {#each data.degree?.links ?? [] as item}
          <a href="https://{item.link}"
             class="text-primary-600 hover:underline dark:text-primary-500 ps-2">{item.linktitle}</a>
        {/each}
      {/if}
    </div>
  </div>

</div>
<div class="container justify-center items-center rounded-xl md:mx-auto p-3">
  <section class="border-t border-surface-500/30 p-4">
  </section>
</div>
<!-- Review -->
<div class="container text-center w-full justify-center items-center rounded-xl mx-auto p-3 mb-4">
  <p class="uppercase text-4xl text-primary-200">Degrees Reviews</p>
</div>
<div class="card mx-auto my-10 p-3 md:w-1/2 w-full">
  <div class=" my-3">
    <Ratings class="my-5" bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
      <svelte:fragment slot="empty">
        <svg class="w-6 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
        </svg>
      </svelte:fragment>
      <svelte:fragment slot="half">
        <svg class="w-6 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z" />
        </svg>
      </svelte:fragment>
      <svelte:fragment slot="full">
        <svg class="w-6 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </svelte:fragment>
    </Ratings>
    <form action="?/comment" method="POST" use:enhance>
      <input hidden name="stars" value={value.current}>
      <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
        <div class="input-group-shim justify-center items-center ">
          <Fa icon={faComment} />
        </div>
        <textarea
          bind:value={currentMessage}
          class="bg-transparent border-0 ring-0"
          name="comment"
          placeholder="Write a message..."
          rows="1"></textarea>
        <button class={currentMessage ? 'variant-filled-primary' : 'input-group-shim'} type="submit">
          <Fa icon={faPaperPlane}></Fa>
        </button>
      </div>
    </form>
  </div>

</div>

{#each form?.posts ?? data?.posts as item}


  <div
    class="container justify-center items-center rounded-3xl mx-auto variant-soft-secondary my-10 p-3 md:w-1/2 w-full">
    <div class="flex flex-row flex-wrap justify-items-start">

      <a href="/" class="flex title-font font-medium items-center justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
             stroke-linejoin="round" stroke-width="2" class="w-9 h-9 text-white p-2 bg-indigo-500 rounded-full"
             viewBox="0 0 24 24" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-md">Username</span>
      </a>

      <div class="flex items-center justify-items-start ps-5">
        <Ratings value={3.5} max={5}>
          <svelte:fragment slot="empty">
            <svg class="w-6 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
            </svg>
          </svelte:fragment>
          <svelte:fragment slot="half">
            <svg class="w-6 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z" />
            </svg>
          </svelte:fragment>
          <svelte:fragment slot="full">
            <svg class="w-6 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </svelte:fragment>
        </Ratings>
      </div>

    </div>

    <div class="p-4 pt-6">
      <p>This a review of this dehgree that spands multiple lines if needed. trust meh, dont do this degree. lorekm
        ipsum
        pissum possum words that are fillers neh afrikaans engels.</p>
    </div>


  </div>
{/each}
