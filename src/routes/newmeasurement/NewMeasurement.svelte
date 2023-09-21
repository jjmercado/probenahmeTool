<script>
    
</script>

<a href="/">
    <button>Home</button>
</a>

<a href="/measurement/#measurementButton">
    <button>Zurück zu den Messungen</button>
</a>

<label for="measurement">Messung</label>
<input type="text" name="measurement" id="measurement">

<label for="time">Uhrzeit</label>
<input type="time" name="time" id="time">

<label for="waterLevel">Wasserstand</label>
<input type="text" name="waterLevel" id="waterLevel">

<label for="conveyingCapacity">Förderleistung</label>
<input type="text" name="conveyingCapacity" id="conveyingCapacity">

<label for="standWaterMeter">Stand Wasserzähler [m³]</label>
<input type="text" name="standWaterMeter" id="standWaterMeter">

<label for="temperature">Temperatur [°C]</label>
<input type="text" name="temperature" id="temperature">

<label for="LF">LF [mS/cm]</label>
<input type="text" name="LF" id="LF">

<label for="pH">pH-Wert</label>
<input type="text" name="pH" id="pH">

<label for="O2">O2 [mg/l]</label>
<input type="text" name="O2" id="O2">

<label for="redoxVoltage">Redoxspannung Eh [mV]</label>
<input type="text" name="redoxVoltage" id="redoxVoltage">

<label for="coloring">Färbung</label>
<select name="coloring" id="coloring">
    <option value="1">farblos</option>
    <option value="2">weiß</option>
    <option value="3">gelb</option>
    <option value="4">gelbbraun</option>
    <option value="5">braun</option>
    <option value="6">grün</option>
    <option value="7">blau</option>
    <option value="8">rot</option>
    <option value="9">grau</option>
    <option value="10">schwarz</option>
</select>

<label for="coloringIntensity">Färbung - Intensität</label>
<select name="coloringIntensity" id="coloringIntensity">
    <option value="1">farblos</option>
    <option value="2">stark</option>
    <option value="3">schwach</option>
</select>

<label for="turbidity">Trübung</label>
<select name="turbidity" id="turbidity">
    <option value="1">klar/ohne</option>
    <option value="2">fast klar</option>
    <option value="3">schwach opalisierend</option>
    <option value="4">opalisierend</option>
    <option value="5">schwach trüb</option>
    <option value="6">stark trüb</option>
    <option value="7">undurchsichtig</option>
</select>

<label for="smellIntensity">Geruch - Intensität</label>
<select name="smellIntensity" id="smellIntensity">
    <option value="1">ohne</option>
    <option value="2">stark</option>
    <option value="3">schwach</option>
</select>

<label for="smellGeneral">Geruch - Allgemein</label>
<select name="smellGeneral" id="smellGeneral">
    <option value="1">ohne</option>
    <option value="2">erdig</option>
    <option value="3">modrig</option>
    <option value="4">faulig</option>
    <option value="5">jauchig</option>
    <option value="6">aromatisch</option>
</select>

<label for="smellDifferentiated">Geruch - Differenziert</label>
<select name="smellDifferentiated" id="smellDifferentiated">
    <option value="1">n. Chlor</option>
    <option value="2">n. Teer</option>
    <option value="3">n. Mercaptan</option>
    <option value="4">n. Mineralöl</option>
    <option value="5">n. H25</option>
    <option value="6">n. Ozon</option>
    <option value="7">n. Abwasser</option>
</select>

<a href="/measurement/#measurementButton">
    <button on:click={() => {
        // sessionStorage.setItem("isAdded", "true"); 
        let counter;
        if (sessionStorage.getItem("counter") === "0")
        {
            counter = 1;
            sessionStorage.setItem("counter", `${counter}`)
        }
        else
        {
            counter = +sessionStorage.getItem("counter");
            counter++;
            sessionStorage.setItem("counter", `${counter}`);
        }
    }}>Hinzufügen</button>
</a>
