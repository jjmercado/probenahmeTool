<script>
    import { onMount } from "svelte";


    let options = ["0", "1"];
    $: deficiencyPictures = 0;
    $: deficiencies = "";
    let container;

    onMount(() => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        const picLabel = document.createElement('label');
        const picInput = document.createElement('input');

        label.htmlFor = "deficiencies";
        label.innerText = "Beschreibung";

        input.type = "text";
        input.name = "deficiencies";
        input.id = "deficiencies";

        picLabel.htmlFor = "picture";
        picLabel.innerText = "Bild";

        picInput.type = "file";
        picInput.name = "picture";
        picInput.id = "picture";
        picInput.accept = "image/*";

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(picLabel);
        container.appendChild(picInput);
    });
</script>

<h1>Bestandsdaten zur Messstelle</h1>

<label for="measurementFinal">Messstellenabschluss</label>
<select name="measurementFinal" id="measurementFinal">
    <option value="1">Überflur</option>
    <option value="2">Unterflur</option>
</select>

<label for="typeOfSamplingPoint">Art der Probenahmestelle</label>
<select name="typeOfSamplingPoint" id="typeOfSamplingPoint">
    <option value="1">GWM</option>
    <option value="2">Brunnen</option>
    <option value="3">Schacht</option>
    <option value="4">Sonstiges</option>
</select>

<label for="knownGroundwaterLevel">Bekannte Grundwasserstand</label>
<input type="text" name="knownGroundwaterLevel" id="knownGroundwaterLevel">
<label for="knownGroundwaterLevel">[m u. MP]</label>

<label for="dateOfKnownGroundwaterLevel">Datum bekannter Grundwasserstand</label>
<input type="date" name="dateOfKnownGroundwaterLevel" id="dateOfKnownGroundwaterLevel">

<label for="expansionDN">Ausbau DN</label>
<select name="expansionDN" id="expansionDN">
    <option value="1">Kunststoff</option>
    <option value="2">Beton</option>
    <option value="3">Stahl</option>
    <option value="4">Sonstiges</option>
</select>

<label for="expansionDiameter">Ausbau Durchmesser</label>
<input type="text" name="expansionDiameter" id="expansionDiameter">
<label for="expansionDiameter">[mm]</label>

<label for="dismantlingDepth">Ausbautiefe (Schichtenverz.)</label>
<input type="text" name="dismantlingDepth" id="dismantlingDepth">
<label for="dismantlingDepth">[m u. MP]</label>

<label for="filterTubeFrom">Filterrohr (Von)</label>
<input type="text" name="filterTubeFrom" id="filterTubeFrom">
<label for="filterTubeFrom">[m u. MP]</label>

<label for="filterTubeTo">Filterrohr (Bis)</label>
<input type="text" name="filterTubeTo" id="filterTubeTo">
<label for="filterTubeTo">[m u. MP]</label>

<label for="foundCondition">Vorgefundener Zustand</label>
<select name="foundCondition" id="foundCondition" on:change={(e) => deficiencies = e.target.value}>
    <option value={options[0]}>Ohne Mängel</option>
    <option value={options[1]}>Mangelhaft</option>
</select>

{#if deficiencies === "1"}
    <!-- Mängel beschreiben und bild einfügen -->
    <label for="deficiencies">Beschreibung</label>
    <input type="text" name="deficiencies" id="deficiencies">

    <label for="picture">Bild</label>
    <input type="file" name="picture" id="picture" accept="image/*">
    <button on:click={() => deficiencyPictures++ }>+</button>
    <button on:click={() => deficiencyPictures--}>-</button>
    {#if deficiencyPictures > 0}
    {/if}
    {/if}
    <div bind:this={container}/>
