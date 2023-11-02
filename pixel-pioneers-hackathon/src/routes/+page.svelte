<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
  import type { PageData } from "./$types";
  import hljs from "highlight.js/lib/core";
  import json from "highlight.js/lib/languages/json";
  import { CodeBlock, storeHighlightJs } from "@skeletonlabs/skeleton";
  import "highlight.js/styles/github-dark.css";
  import { storeTheme } from "$lib/stores/stores";
  import { browser } from "$app/environment";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faScroll, faUser, faQuestion, faRoad, faBullseye } from "@fortawesome/free-solid-svg-icons";

  hljs.registerLanguage("json", json);
  storeHighlightJs.set(hljs);
  export let data: PageData;

  storeTheme.subscribe(setBodyThemeAttribute);

  function setBodyThemeAttribute(): void {
    if (!browser) return;
    document.body.setAttribute("data-theme", $storeTheme);
  }
</script>

<!--<div class="w-full max-w-4xl mx-auto space-y-10">-->
<!-- <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
  <CodeBlock code={JSON.stringify(data, null, 1)} language="json" lineNumbers="true"></CodeBlock>
</div> -->
<section class="body-font">
  <div class="container px-5 pt-10 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 uppercase">discover degrees</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">welcome to <b>DegreeNexus</b>! The goal of this site is to create a more easily accessable and more understandable collection of degrees available in Sourh Africa for new- and returning students.</p>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 pb-7">
      <div class="px-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full variant-soft-secondary text-primary-600 mb-5 flex-shrink-0">
          <Fa icon={faQuestion} size="3x" class="inline-block text-primary-600" />
        </div>
        <div class="flex-grow">
          <h2 class=" text-lg title-font font-medium mb-3">Who We Are</h2>
          <p class="leading-relaxed text-base">We are a group of three students at Varsity College, currently studying Bahcelor of Computer and Information Sciences in Application Development. </p>
        </div>
      </div>
      <div class="px-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full variant-soft-secondary text-primary-600 mb-5 flex-shrink-0">
          <Fa icon={faBullseye} size="3x" class="inline-block text-primary-600" />
        </div>
        <div class="flex-grow">
          <h2 class="text-lg title-font font-medium mb-3">The Goal</h2>
          <p class="leading-relaxed text-base">Our application will empower young people who are seeking to make the next step in their studies. It will do this by providing an university aggregation system where students will be able to explore multiple degrees available in South Africa and the universities hosting them.</p>
        </div>
      </div>
      <div class="px-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full variant-soft-secondary text-primary-600 mb-5 flex-shrink-0">
          <Fa icon={faRoad} size="3x" class="inline-block text-primary-600" />
        </div>
        <div class="flex-grow">
          <h2 class="text-lg title-font font-medium mb-3">How It Happened</h2>
          <p class="leading-relaxed text-base">Varsity College offered a Hackathon where we saw our idea could be realised of giving prospective students a feasible and easily usable method on choosing the next steps in their studies.</p>
        </div>
      </div>
    </div>
    <!-- <a href="./degrees">
      <button class="flex mx-auto mt-16 text-white variant-filled-secondary border-0 py-2 px-8 focus:outline-none hover:variant-filled-primary rounded text-lg uppercase">Search Degrees</button>
    </a> -->

    <div class="flex flex-wrap text-center justify-center pt-5">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="px-4 py-6 rounded-lg variant-soft-secondary">
          
          <Fa icon={faScroll} size="3x" class="mb-3 inline-block text-primary-600"/>

          <h2 class="title-font font-medium text-3xl">{data.degrees}</h2>
          <p class="leading-relaxed">Degrees Added</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="px-4 py-6 rounded-lg variant-soft-secondary">
          <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg> -->

          <Fa icon={faUser} size="3x" class="mb-3 text-primary-600 inline-block"/>

          <h2 class="title-font font-medium text-3xl">{data.users}</h2>
          <p class="leading-relaxed">Users</p>
        </div>
      </div>
  </div>
  </div>
</section>

