<script>
    import GeneralData from "./GeneralData.svelte";
    import InventoryData from "./InventoryData.svelte";
    import PumpingProcess from "./PumpingProcess.svelte";
    import Signing from "./Signing.svelte";
    export let data;
    console.log(data);
</script>

<div>
    <GeneralData {data} />
    <InventoryData />
    <PumpingProcess />
    <Signing />
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