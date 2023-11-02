<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
  import { CldImage, CldUploadWidget } from "svelte-cloudinary";
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";

  let imageId: string | null = null;
  export let data: PageData;

  function uploadedFile(result: any, widget: any) {
    imageId = result.info.public_id;
    console.log(result);
    console.log(widget);
  }
</script>

<div class="card flex flex-col items-center w-full max-w-md p-6 m-6 mx-auto">

  <p class="uppercase font-semibold h2 pb-5">Account details</p>

  <CldImage
    width="256"
    height="256"
    src={data.user?.photo??"cctdutckxknfz8j9xbue"}
    alt="Description of my image"
    class="rounded-full mx-auto"
  />
  
    <CldUploadWidget uploadPreset="xtglb5ig" let:open let:isLoading onUpload={uploadedFile}>
      <button type="button" class="btn variant-soft-primary hover:variant-filled-primary m-3" on:click={open} disabled={isLoading}>
      <Fa class="pe-3" icon={faPen} size="lg" />
      Upload an Image
    </button>
  </CldUploadWidget>

  <div class="container w-full max-w-md mx-auto">
    <form action="?/updateInfo" method="POST" use:enhance>
    <input hidden name="imageId" value={imageId}>
    <section class="p-4 space-y-4">
      <label class="label">
        <span class="text-2xl">Username</span>
        <input class="input" readonly type="text" placeholder="Username" value="current-username" />
      </label>
      <label class="label">
        <span class="text-2xl">Email</span>
        <input class="input" readonly type="text" name="userEmail" value="account@email" />
      </label>
      <label class="label">
        <span class="text-2xl">Password</span>
        <input class="input" readonly type="password" name="userPassword" value="my-placeholder" />
      </label>
    </section>
    <!-- TODO: Edit should toggle entire purpose of page -->
    <button type="submit"
            class="mt-6 mx-auto btn variant-filled-secondary justify-center hover:variant-filled-primary uppercase">Edit
    </button>
  </form>
  </div>
  

</div>