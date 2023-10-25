<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
</script>

<!--<body class="bg-gray-100 flex items-center justify-center">-->
<div class="flex items-center justify-center h-screen">
  <div class="card w-full max-w-md p-6 mx-auto">
    <form action="?/register" method="POST">
      <header class="card-header">
        <h2 class="text-2xl text-center mb-4">Register an account</h2>
      </header>
      <section class="p-4">
        <label class="label">
          <span>Name</span>
          <input class="input" type="text" placeholder="Name..." />
        </label>
        <label class="label">
          <span>Email</span>
          <input class="input" type="text" placeholder="Email..." />
        </label>
        <label class="label">
          <span>Password</span>
          <input class="input" type="password" placeholder="Password..." />
        </label>
        <label class="label">
          <span>Confirm Password</span>
          <input type="password" class="input" placeholder="Confirm Password..." />
        </label>
      </section>

      <button type="submit" class="p-4 w-full btn variant-filled">
        Create an account
      </button>
      <p class="text-sm font-light ">Already have an account?
        <a href="/auth/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
      </p>
    </form>

  </div>
</div>
<!--</body>-->
