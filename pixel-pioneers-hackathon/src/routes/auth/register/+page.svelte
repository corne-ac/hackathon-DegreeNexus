<script lang="ts">
  import { enhance } from "$app/forms";

  export let form;
</script>

<div class="flex items-center justify-center h-full">
  <div class="card w-full max-w-md p-6 mx-auto">
    <form action="?/register" method="POST" use:enhance>
      <header class="card-header">
        <div class="flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 mb-2" viewBox="0 0 20 20"
               fill="currentColor">
            <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd" />
          </svg>
        </div>
        <h2 class="text-2xl text-center mb-4">Register an account</h2>
      </header>
      <section class="p-4">
        <label class="label">
          <span>Name</span>
          <input class="input" type="text" name="name" placeholder="Name..." value={form?.data?.name??''} />
          {#if form?.errors?.name}
            <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
             { form?.errors?.name[0]}
            </span>
          {/if}
        </label>
        <label class="label">
          <span>Email</span>
          <input class="input" type="text" name="email" placeholder="Email..." value={form?.data?.email??''} />
          {#if form?.errors?.email}
            <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
             { form?.errors?.email[0]}
            </span>
          {/if}

        </label>
        <label class="label">
          <span>Password</span>
          <input class="input" type="password" name="password" placeholder="Password..." />
          {#if form?.errors?.password}
            <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
             { form?.errors?.password[0]}
            </span>
          {/if}
        </label>
        <label class="label">
          <span>Confirm Password</span>
          <input class="input" type="password" name="passwordConfirm" placeholder="Confirm Password..." />
          {#if form?.errors?.passwordConfirm}
            <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
             { form?.errors?.passwordConfirm[0]}
            </span>
          {/if}
        </label>
      </section>

      <button type="submit" class="p-4 w-full btn variant-filled">
        Create an account
      </button>
      <p class="text-sm font-light mt-6 ">Already have an account?
        <a href="/auth/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
          here</a>
      </p>
    </form>

  </div>
</div>
