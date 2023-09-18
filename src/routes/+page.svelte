<script>
    import GeneralData from "./GeneralData.svelte";
    import InventoryData from "./InventoryData.svelte";
    import PumpingProcess from "./PumpingProcess.svelte";
    import Signing from "./Signing.svelte";
    import OrderData from "./OrderData.svelte";

    export let form;
</script>

<div>
    <OrderData {form}/>
    <GeneralData {form} />
    <InventoryData />
    <PumpingProcess  />
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