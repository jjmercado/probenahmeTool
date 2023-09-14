<script>
    import { DateTime } from "luxon";
    const currentDate = DateTime.now();
    export let data;

    $: projectNr = "";

</script>


<div>
    <h1>Generelle Daten</h1>

    <form method="POST">
        <label for="projectNr">Projekt-Nr</label>
        <input type="search" name="projectNr" id="projectNr" bind:value="{projectNr}">
        <button type="submit">Suchen</button>
    </form>

    <label for="datetime">Datum</label>
    <input type="date" name="datetime" id="datetime" value="{currentDate.toFormat('yyyy-MM-dd')}">

    <label for="samplingLocation">Probenahmeort</label>
    <input type="text" name="samplingLocation" id="samplingLocation">

    <label for="toBeExecuted">Auszuführender</label>
    <input type="text" name="toBeExecuted" id="toBeExecuted">

    <label for="client">Auftraggeber</label>
    <input type="text" name="client" id="client">

    <label for="investigationPhase">Untersuchungsphase</label>
    <select name="investigationPhase" id="investigationPhase">
        <option value="1">Orientierende Untersuchung</option>
        <option value="2">Detailuntersuchung</option>
        <option value="3">Sanierungsuntersuchung</option>
        <option value="4">Nachmessung</option>
    </select>

    <label for="projektManager">Projektleiter</label>
    <input type="text" name="projektManager" id="projektManager">

    <label for="projectName">Projektname</label>
    <input type="text" name="projectName" id="projectName" value="{data.dbData}">

    <label for="protocolReceiver">Protokollempfänger</label>
    <input type="text" name="protocolReceiver" id="protocolReceiver">
</div>

<style>
    div 
    {
        display: flex;
        flex-direction: column;
    }


</style>