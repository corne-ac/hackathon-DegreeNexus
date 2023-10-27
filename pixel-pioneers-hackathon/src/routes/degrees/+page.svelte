<script lang="ts">
    import type { PageData } from "./$types";
    import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';
    export let data: PageData;
  </script>

<div class="flex my-3 mb-8">
    <div class="pt-2 mx-auto relative text-current">
        <input class="border-2 rounded h-10 px-5 pr-16  text-sm focus:outline-none bg-gray-500 bg-opacity-50"
            type="search" name="search" placeholder="Search">
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <svg class=" h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
        </button>
    </div>        
</div>
    
<div class="container justify-center items-center md:mx-auto grid grid-flow-row gap-8 sm:p-20  md:p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

    {#each data.rows as number }
        
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
                        This will be the entire body of the card. it will be filled with a description, or can contain info on requirements. dont know yet.
                    </p>                
                </article>
            </div>
            <!-- bottom part, details -->
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center leading-none">
                    <h6 class="font-bold" data-toc-ignore>Uni Name</h6>
                    
                </div>
                
                <span class="text-gray-400 font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2">
                    <small>Degree lvl</small>
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <Avatar src="/favicon.png" width="w-8" />
                </span>
            </footer>
        </a>

    {/each}
    <div class="card bg-inital card-hover overflow-hidden ">
        <!-- top image -->
        <header>
            <img src="/favicon.png" class="bg-black/50 w-full aspect-[21/9]" alt="Degree Img" />
        </header>
        <!-- content of card -->
        <div class="p-4 space-y-4">
            <h3>degree Title</h3>
            <article>
                <p>
                    This will be the entire body of the card. it will be filled with a description, or can contain info on requirements. dont know yet.
                </p>                
            </article>
        </div>
        <!-- bottom part, details -->
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
            <div class="flex-auto flex justify-between items-center">
                <h6 class="font-bold" data-toc-ignore>Uni Name</h6>
                <small>Degree lvl</small>
            </div>
        </footer>
    </div>
    
</div>