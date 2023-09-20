<script>
// @ts-nocheck

import { dataStore } from '../dataStore.js';
import { DateTime } from "luxon";

const currentDate = DateTime.now();
let myData = {};

export let form;
</script>

<div>
    <h1>Generelle Daten</h1>

    <label for="datetime">Datum</label>
    <input type="date" name="datetime" id="datetime" value="{currentDate.toFormat('yyyy-MM-dd')}">

    {#if form}
        {#await form}
            <p>...waiting</p>
            {:then form}
            <label for="samplingLocation">Probenahmeort</label>
            <input type="text" name="samplingLocation" id="samplingLocation" value="{form.protocolData.samplingLocation}">
        {/await}
    {:else}
    <label for="samplingLocation">Probenahmeort</label>
    <input type="text" name="samplingLocation" id="samplingLocation">
    {/if}
        
    <label for="toBeExecuted">Auszuführender</label>
    <input type="text" name="toBeExecuted" id="toBeExecuted">
</div>

<style>
    div 
    {
        display: flex;
        flex-direction: column;
    }
</style>