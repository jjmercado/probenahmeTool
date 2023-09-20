<script>
// @ts-nocheck
    export let form;
</script>

<h1>Auftragsdaten</h1>
<form method="POST">
    <label for="projectNr">Projekt-Nr</label>
    <input type="search" name="projectNr" id="projectNr">
    <button type="submit">Suchen</button>
</form>

{#if form}
    {#await form}
        <p>...waiting</p>
        {:then form}

        <label for="client">Auftraggeber</label>
        <input type="text" name="client" id="client" value="{form.protocolData.client}">

        <label for="projektManager">Projektleiter</label>
        <input type="text" name="projektManager" id="projektManager" value="{form.protocolData["projectManager"]}">

        <label for="projectName">Projektbezeichnung</label>
        <input type="text" name="projectName" id="projectName" value="{form.protocolData.projectName}">

        <label for="protocolReceiver">Protokollempfänger</label>
        <input type="text" name="protocolReceiver" id="protocolReceiver" value="{form.protocolData.protocolReceiver}">
    {/await}

    {:else}
    <label for="client">Auftraggeber</label>
    <input type="text" name="client" id="client">

    <label for="projektManager">Projektleiter</label>
    <input type="text" name="projektManager" id="projektManager">

    <label for="projectName">Projektbezeichnung</label>
    <input type="text" name="projectName" id="projectName">

    <label for="protocolReceiver">Protokollempfänger</label>
    <input type="text" name="protocolReceiver" id="protocolReceiver">
{/if}

<label for="investigationPhase">Untersuchungsphase</label>
<select name="investigationPhase" id="investigationPhase">
    <option value="1">Orientierende Untersuchung</option>
    <option value="2">Detailuntersuchung</option>
    <option value="3">Sanierungsuntersuchung</option>
    <option value="4">Nachmessung</option>
</select>