<script lang="ts">
    import type { PageData } from "./$types";
  
    export let data: PageData;
  </script>
<!-- <div class="container h-full mx-auto flex justify-center items-center"> -->
<div class="container justify-center items-center md:mx-auto grid grid-flow-row gap-8 sm:p-20  md:p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 my-10 ">

    {#each data.rows as number }
        
        <div class="card bg-inital card-hover overflow-hidden ">
            <!-- top image -->
            <header>
                <img src="/degree_hat.jpg" class="bg-black/50 w-full aspect-[20/9] " alt="Degree Img" />
                <!-- TODO: Fix aspect ratio if images, currently warps to fit aspect -->
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