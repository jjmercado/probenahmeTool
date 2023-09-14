<script>
    import GeneralData from "./GeneralData.svelte";
    import InventoryData from "./InventoryData.svelte";
    import PumpingProcess from "./PumpingProcess.svelte";
    import Signing from "./Signing.svelte";
    import NewMeasurement from "./NewMeasurement.svelte";
</script>

<div>
    <GeneralData />
    <InventoryData />
    <PumpingProcess />
    <Signing />
    <NewMeasurement />
</div>

<style>

    div
    {
        display: flex;
        flex-direction: column;
        max-width: 35rem;
        margin: auto;
    }

</style>