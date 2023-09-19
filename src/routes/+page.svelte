<script>
    import GeneralData from "./GeneralData.svelte";
    import InventoryData from "./InventoryData.svelte";
    import PumpingProcess from "./PumpingProcess.svelte";
    import Signing from "./Signing.svelte";
    import OrderData from "./OrderData.svelte";
    import { onMount } from "svelte";

    export let form;

    onMount(() => {
        let inputElements = document.getElementsByTagName("input");
        let inputArrayElements = Array.from(inputElements);
        inputArrayElements.forEach(element => {
            if (!element.value) 
            {                  
                // @ts-ignore
                element.value = sessionStorage.getItem(element.id);
            }
        })
        
        return () => {
            inputArrayElements.forEach(element => {
                sessionStorage.setItem(element.id, element.value);
            })
        }
    })
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