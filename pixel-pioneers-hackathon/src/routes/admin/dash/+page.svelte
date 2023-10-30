<script lang="ts">
  import type { SvelteEvent, TableSource } from "@skeletonlabs/skeleton";
  import { Paginator, tableMapperValues } from "@skeletonlabs/skeleton";
  import type { PageData } from "./$types";

  export let data: PageData;

  function formatTimeAgo(date: Date): string {
    const now = new Date();
    const timeDifference = now.getTime() - date.getTime();
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (daysAgo > 0) {
      return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else {
      return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
    }
  }


  let users = data.users ?? [];
  let userFields = Object.keys(users[0] ?? {});
  userFields.push("actions");
  let tableRowCounter = userFields.length;

  const tableSimple: TableSource = {
    head: userFields/* ["email", "name", "role", "created", "actions"]*/,
    body: tableMapperValues(users, userFields),
    // Optional: A list of footer labels.
    foot: ["Total", "", "<code class=\"code\">5</code>"]
  };

  let mySelectionHandler = (event: CustomEvent) => {
    console.log(event.detail);
  };

  function onRowClick(event: SvelteEvent<MouseEvent | KeyboardEvent, HTMLTableRowElement>, rowIndex: number): void {
    event.preventDefault();
    event.stopPropagation();
  }

  function toggleClass(event: MouseEvent) {
    const th = event.target as HTMLTableElement;

    // Check if the 'table-sort-asc' class is present and toggle it
    if (th.classList.contains("table-sort-asc")) {
      th.classList.remove("table-sort-asc");
      // someData = "Data Updated on Click";
    } else {
      // Set the 'table-sort-asc' class
      th.classList.add("table-sort-asc");
      // someData = "Data Updated on Click (Alternate)";
    }
  }
</script>
<h1 class="h1">
  <span
    class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Design.</span>
</h1>

<div class="flex items-center justify-center h-full mx-auto max-w-7xl space-y-4">
  <div class=" w-full p-6 mx-auto">
    <!--<div class="table-compact">-->
    <div class="table-container">


      <table class="table table-interactive" role="grid">
        <thead class="table-head">
        <!--      <tr>
                <th colspan={tableRowCounter}>
                  &lt;!&ndash;<h1 class="h1 mx-5 py-3">User Table</h1>&ndash;&gt;

                </th>
              </tr>
      -->
        <!--        <tr>
                  <td colspan="3">
                    <select  class="select variant-form-material" />
                  </td>

                  <td colspan="3">
                    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
                      <div class="input-group-shim">(icon)</div>
                      <input type="search" placeholder="Search..." />
                      <button class="variant-filled-secondary">Submit</button>
                    </div>
                  </td>
                </tr>-->
        <tr>
          {#each tableSimple.head as heading }
            <th on:click={toggleClass}>
              {@html heading}
            </th>
          {/each}
        </tr>
        </thead>

        <tbody class="table-body">

        {#each tableSimple.body as row, rowIndex}
          <!--on:click={(e) => { onRowClick(e, rowIndex); }}-->
          <tr aria-rowindex={rowIndex + 1}>
            {#each row as cell, cellIndex}
              <td role="gridcell" aria-colindex={cellIndex + 1} tabindex={cellIndex === 0 ? 0 : -1}>
                {#if tableSimple.head[cellIndex] === "actions"}
                  <div class="inline-flex items-center space-x-3">
                    <a href="/api/edit" title="Edit" class="hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </a>
                    <a href="/api/edit" title="Edit password" class="hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </a>
                    <a href="/api/block" title="Suspend user" class="hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </a>
                  </div>
                {:else if tableSimple.head[cellIndex] === "createdAt" || tableSimple.head[cellIndex] === "updatedAt"}
                  {@html formatTimeAgo(new Date(cell))}
                {:else}
                  {@html Number(cell) === 0 ? cell : (cell ? cell : "-")}
                {/if}
              </td>
            {/each}

        {/each}
        </tbody>
        {#if tableSimple.foot}
          <tfoot>
          <tr>
            <td colspan={tableRowCounter}>
              <Paginator showNumerals />
            </td>
          </tr>

          </tfoot>
        {/if}
      </table>
    </div>


  </div>
</div>