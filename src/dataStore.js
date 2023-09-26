import { writable } from 'svelte/store';

export let elapsedTime = writable(0);
export let interval = writable(0);
export let pumpStart = writable(false);
export let resumed = writable(false);
