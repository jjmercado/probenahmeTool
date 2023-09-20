<script>
    // @ts-nocheck
    import { DateTime } from "luxon";

    let pumpRadioButton = 1;
    let scoopRadioButton = 0;
    let lotDepth = 0;
    let calmWaterLevel = 0;
    let expansionDiameter;
    let pumpInstallationDepth = 0;
    let watchInterval;

    $: pumpTimerHour = 0;
    $: pumpTimerMinute = 0;
    $: pumpTimerSecond = 0;

    let Faktor = 
    { 
        50 : 2.0,
        75 : 4.4,
        100: 7.9,
        125: 12.3,
        150: 18.0,
        175: 24.0,
        200: 31.0,
        250: 49.0,
        300: 71.0,
        350: 96,
        400: 126,
        450: 159,
        500: 196,
        1000: 785,
        1500: 1767,
        2000: 3142   
    };

function calculateCalmWaterLevel()
{
    let Volumen = 0;
    expansionDiameter = +document.getElementById("expansionDiameter").value;
    let setFaktor;

    for (const key in Faktor) 
    {
        if (expansionDiameter == key)
        {
            setFaktor = Faktor[key];
        }
    }

    Volumen = (lotDepth - calmWaterLevel) * setFaktor;

    document.getElementById("standWaterVolume").value = Volumen;
}

function validatePumpData() 
{
    let valid = false;
    calmWaterLevel = +document.getElementById("calmWaterLevel").value;
    lotDepth = +document.getElementById("lotDepth").value;
    pumpInstallationDepth = +document.getElementById("pumpInstallationDepth").value;
    
    if(!valid)
    {
        if (calmWaterLevel === 0 || lotDepth === 0 || pumpInstallationDepth === 0) 
        {
            console.log("Keine Werte eingetragen");
        }
        else
        {
            if (calmWaterLevel > lotDepth)
            {
                console.error("Das Ruhewasser darf nicht größer als die Lottiefe sein");
                valid = false;
            }
            
            if (calmWaterLevel > pumpInstallationDepth) 
            {
                console.error("Das Ruhewasser darf nicht größer als die Einbautiefe sein");
                valid = false;
            }
            
            if (pumpInstallationDepth > lotDepth) 
            {
                console.error("Die Einbautiefe darf nicht größer als die Lottiefe sein");
                valid = false;
            }
        }
        
    }
    else
    {
        valid = true;
        console.log("Data is valid!");
    }
}

const startPumpStopWatch = () => 
{
    let pumpTimerStart = DateTime.now().toMillis();
    watchInterval = setInterval(() => {
        let delta = DateTime.now().toMillis() - pumpTimerStart;
        pumpTimerHour = Math.floor(delta / 1000 / 60 / 60);
        pumpTimerMinute = Math.floor(delta / 1000 / 60);
        pumpTimerSecond = Math.floor(delta / 1000); 

        if (pumpTimerSecond > 59) 
        {
            pumpTimerSecond = pumpTimerSecond - (pumpTimerMinute * 60);
        }

        if (pumpTimerMinute > 59) 
        {
            pumpTimerMinute = pumpTimerMinute - (pumpTimerHour * 60);
        }

    }, 100);
}

const stopPumpStopWatch = () => 
{
    clearInterval(watchInterval);
}

</script>

<h1>Pumpvorgang</h1>

<div>
    <label for="pumpSample">Pumpprobe</label>
    <input type="radio" name="sample" id="pumpSample" checked on:click={() => {
        pumpRadioButton = 1;
        scoopRadioButton = 0;
        }}>
</div>

<div>
    <label for="scoopSample">Schöpfprobe</label>
    <input type="radio" name="sample" id="scoopSample" on:click={() => {
        pumpRadioButton = 0;
        scoopRadioButton = 1;
        }}>
</div>

{#if pumpRadioButton}
    <label for="pumpType">Pumpenart</label>
    <select name="pumpType" id="pumpType">
        <option value="1">-</option>
        <option value="2">MP-1</option>
        <option value="3">SQ</option>
        <option value="4">SQ-E</option>
        <option value="5">SP</option>
        <option value="6">12V</option>
        <option value="7">Sonstiges</option>
    </select>

    <label for="pumpTypeNGNr">Pumpenart NG-Nr</label>
    <input type="text" name="pumpTypeNGNr" id="pumpTypeNGNr">

    <label for="conveyorPump">Fördereinrichtung</label>
    <select name="conveyorPump" id="conveyorPump">
        <option value="1">Steigleitung</option>
        <option value="2">PE-Rohr</option>
        <option value="3">PE-Schlauch</option>
        <option value="4">Sonstiges</option>
    </select>

    <label for="measuringReferencePoint">Messbezugspunkt MP</label>
    <select name="measuringReferencePoint" id="measuringReferencePoint">
        <option value="1">POK</option>
        <option value="2">ROK</option>
        <option value="3">SOK</option>
        <option value="4">GOK</option>
    </select>

    <label for="calmWaterLevel">Ruhewasserspiegel</label>
    <input type="text" name="calmWaterLevel" id="calmWaterLevel" on:blur={validatePumpData}>
    <label for="calmWaterLevel">[m u. MP]</label>

    <label for="lotDepth">Lottiefe</label>
    <input type="text" name="lotDepth" id="lotDepth" on:blur={validatePumpData}>
    <label for="lotDepth">[m u. MP]</label>

    <label for="pumpInstallationDepth">Einbautiefe der Pumpe</label>
    <input type="text" name="pumpInstallationDepth" id="pumpInstallationDepth" on:blur={validatePumpData}>
    <label for="pumpInstallationDepth">[m u. MP]</label>

    <label for="standWaterVolume">Standwasservolumen</label>
    <input type="text" name="standWaterVolume" id="standWaterVolume" on:click={calculateCalmWaterLevel}>
    <label for="standWaterVolume">[l]</label>

    <label for="lowering">Absenkung bei PN</label>
    <input type="text" name="lowering" id="lowering">
    <label for="lowering">[m u. Rwsp]</label>

    <label for="waterVolumePumped">Geförderte Wassermenge</label>
    <input type="text" name="waterVolumePumped" id="waterVolumePumped">
{:else}
    <label for="conveyorScoop">Fördereinrichtung</label>
    <select name="conveyorScoop" id="conveyorScoop">
        <option value="1">Edelstahlschöpfer</option>
        <option value="2">Sonstiges</option>
    </select>
{/if}

<label for="conveyorNKNr">Fördereinrichtung NK-Nr</label>
<input type="text" name="conveyorNKNr" id="conveyorNKNr">


<label for="lastUsed">Wo wurden die Gerätschaften zuvor eingesetzt?</label>
<select name="lastUsed" id="lastUsed">
    <option value="1">Lager, gereinigt</option>
    <option value="2">Messstelle</option>
</select>

<label for="weatherCharacter">Witterungscharakter (GW)</label>
<select name="weatherCharacter" id="weatherCharacter">
    <option value="1">-</option>
    <option value="2">Wechselhaft</option>
    <option value="3">Trockenperiode</option>
    <option value="4">Regenperiode</option>
    <option value="5">Frostperiode</option>
    <option value="6">Hitzeperiode</option>
    <option value="7">Gewitterneigung</option>
    <option value="8">Schneeschmelze</option>
    <option value="9">Schneefallperiode</option>
</select>

<label for="weatherOfExecutionDay">Wetter am Untersuchungstag (TW)</label>
<select name="weatherOfExecutionDay" id="weatherOfExecutionDay">
    <option value="1">-</option>
    <option value="2">Trocken</option>
    <option value="3">Regen</option>
    <option value="4">Gewitter</option>
    <option value="5">Frost</option>
    <option value="6">Regennachlauf</option>
    <option value="7">Schneeschmelze</option>
    <option value="8">Schneefall</option>
</select>

<label for="temperature">Luft</label>
<input type="text" name="temperature" id="temperature">
<label for="temperature">[°C]</label>

<button on:click={startPumpStopWatch}>Start</button>
<button on:click={stopPumpStopWatch}>Stop</button>

<label for="pumpDuration">Pumpendauer</label>
<input type="text" name="pumpDuration" id="pumpDuration" value="{pumpTimerHour  > 9 ? pumpTimerHour : `0${pumpTimerHour}`}:{pumpTimerMinute  > 9 ? pumpTimerMinute : `0${pumpTimerMinute}`}:{pumpTimerSecond  > 9 ? pumpTimerSecond : `0${pumpTimerSecond}`}">
<label for="pumpDuration">[Std:Min:Sec]</label>

<a href="/measurement" id="measurementButton">
    <button>Neue Messung</button>
</a>

<div></div>

<style>
    table
    {
        display: flex;
        flex-direction: column;
    }

    div input[type="checkbox"]
    {

    }
</style>