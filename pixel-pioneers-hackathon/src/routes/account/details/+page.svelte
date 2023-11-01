<script lang="ts">
    import Fa from "svelte-fa/src/fa.svelte";
    import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
</script>


<!-- Die page moet locked wees as die user nie in gelog is nie. weti hoe nie tho so moet uit figure -->
<!-- Raai in die cookies is daar iets om te check mee? hell knows, maybe die JWS token of some shit -->

<div class="container flex flex-col items-center rounded-xl md:mx-auto md:w-1/3 w-full variant-soft-primary my-5 p-5">
    <div class="relative group flex items-center justify-center">
        <img class="w-64 h-64 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile">
        <button class="absolute w-auto  p-2 m-2 min-w-max left-64 rounded-md shadow-md variant-filled-primary text-sm font-bold transition-all duration-100 scale-100 origin-top group-hover:scale-100">
            <Fa  icon={faPen} size="lg"/>
        </button>
    </div>
    
    
    <form action="?/login" method="POST">
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
      </form>
      <!-- TODO: Edit should toggle entire purpose of page -->
      <button type="submit" class="mt-6 mx-auto btn variant-filled-secondary justify-center hover:variant-filled-primary uppercase">Edit</button>

</div>