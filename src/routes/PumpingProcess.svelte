<h1>Pumpvorgang</h1>

<label for="pumpSample">Pumpprobe</label>
<input type="checkbox" name="pumpSample" id="pumpSample">

<label for="scoopSample">Schöpfprobe</label>
<input type="checkbox" name="scoopSample" id="scoopSample">

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

<label for="conveyorScoop">Fördereinrichtung</label>
<select name="conveyorScoop" id="conveyorScoop">
    <option value="1">Edelstahlschöpfer</option>
    <option value="2">Sonstiges</option>
</select>

<label for="conveyorPump">Fördereinrichtung</label>
<select name="conveyorPump" id="conveyorPump">
    <option value="1">Steigleitung</option>
    <option value="2">PE-Rohr</option>
    <option value="3">PE-Schlauch</option>
    <option value="4">Sonstiges</option>
</select>

<label for="pumpTypeNGNr">Pumpenart NG-Nr</label>
<input type="text" name="pumpTypeNGNr" id="pumpTypeNGNr">

<label for="conveyorNKNr">Fördereinrichtung NK-Nr</label>
<input type="text" name="conveyorNKNr" id="conveyorNKNr">

<label for="lastUsed">Wo wurden die Gerätschaften zuvor eingesetzt?</label>
<select name="lastUsed" id="lastUsed">
    <option value="1">Lager, gereinigt</option>
    <option value="2">Messstelle</option>
</select>

<label for="measuringReferencePoint">Messbezugspunkt MP</label>
<select name="measuringReferencePoint" id="measuringReferencePoint">
    <option value="1">POK</option>
    <option value="2">ROK</option>
    <option value="3">SOK</option>
    <option value="4">GOK</option>
</select>

<label for="calmWaterLevel">Ruhewasserspiegel</label>
<input type="text" name="calmWaterLevel" id="calmWaterLevel">
<label for="calmWaterLevel">[m u. MP]</label>

<label for="lotDepth">Lottiefe</label>
<input type="text" name="lotDepth" id="lotDepth">
<label for="lotDepth">[m u. MP]</label>

<label for="pumpInstallationDepth">Einbautiefe der Pumpe</label>
<input type="text" name="pumpInstallationDepth" id="pumpInstallationDepth">
<label for="pumpInstallationDepth">[m u. MP]</label>

<label for="standWaterVolume">Standwasservolumen</label>
<input type="text" name="standWaterVolume" id="standWaterVolume">
<label for="standWaterVolume">[l]</label>

<label for="lowering">Absenkung bei PN</label>
<input type="text" name="lowering" id="lowering">
<label for="lowering">[m u. Rwsp]</label>

<label for="waterVolumePumped">Geförderte Wassermenge</label>
<input type="text" name="waterVolumePumped" id="waterVolumePumped">

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

<button>Start</button>
<button>Stop</button>

<label for="pumpDuration">Pumpendauer</label>
<input type="text" name="pumpDuration" id="pumpDuration">
<label for="pumpDuration">[Std:Min]</label>

<!-- <table>
    <tr>
        <th>Messung</th>

        <th>Wasserstand</th>
        <th>Förderleistung</th>
        <th>Stand Wasserzähler [m³]</th>
        <th>Temperatur [°C]</th>
        <th>Messung</th>
        <th>LF [µS/cm]</th>
        <th>pH-Wert</th>
        <th>O2 [mg/l]</th>
        <th>Redoxspannung Eh [mV]</th>
        <th>Färbung - Intensität</th>
        <th>Färbung</th>
        <th>Trübung</th>
        <th>Geruch - Intensität</th>
        <th>Geruch - Allgemeine</th>
        <th>Geruch - Differenziert</th>
    </tr>
    <tr>
        <th>Uhrzeit</th>
    </tr>
</table> -->

<style>
    table
    {
        display: flex;
        flex-direction: column;
    }
</style>