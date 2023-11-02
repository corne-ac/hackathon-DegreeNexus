<script lang="ts">
	import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
    import type { PageData } from "../details/$types";
    import { Avatar, CodeBlock, Ratings } from '@skeletonlabs/skeleton';    
    import Fa from "svelte-fa/src/fa.svelte";
    import { faGraduationCap, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
    import { CldImage, CldUploadWidget } from "svelte-cloudinary";

    export let data: PageData;
</script>

<div class="container md:w-2/3 w-full justify-center items-center rounded-xl mx-auto variant-soft-primary my-10 p-3 mb-10">
    <div class="bg-black/50 md:w-1/2 w-full justify-center mx-auto h-full aspect-[18/10] rounded-lg basis-2/5">
        <CldImage
            width="w-full"
            height="h-full"
            src={data.university?.photo ?? "cctdutckxknfz8j9xbue"}
            alt="Description of my image"
            class="bg-black/50 md:w-1/2 w-full justify-center mx-auto h-full aspect-[18/10] rounded-lg basis-2/5"
        />
    </div>
    
    <div class= "mt-10 mx-6">
        <strong class=" uppercase mx-auto text-4xl pt-0 md:pt-20 md:pe-10 pe-0 pb-5 md:pb-0 align-center justify-center" >{data.university.name}</strong>
        <h2 class="text-2xl font-medium mt-4 title-font mb-2">Description</h2>
        <p class="leading-relaxed m-5">{data.university.description}</p>
    </div>

</div>

<div class="container md:w-2/3 w-full justify-center items-center rounded-xl mx-auto p-3 mb-4">
  <p class="uppercase text-4xl text-primary-200">Degrees Offered at Institution</p>
</div>



<div
    class="container justify-center items-center md:w-2/3 w-full md:mx-auto grid grid-flow-row gap-8 sm:p-20  md:p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

    {#if data.degrees != null}
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
            class="bg-black/50 aspect-[18/10]"
          />
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
          <Fa icon={faGraduationCap} size="lg" class="h-10 w-10"/>
                  <small>{item.level}</small>
              </span>
      </footer>
    </a>
  {/each}
    {/if}
    

  </div>