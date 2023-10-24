// Session based theme store. Grabs the current theme from the current body.
import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const storeTheme = writable(browser ? document.body.getAttribute("data-theme") ?? "" : "skeleton");