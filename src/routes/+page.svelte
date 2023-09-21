<script>
// @ts-nocheck

    import GeneralData from "./GeneralData.svelte";
    import InventoryData from "./InventoryData.svelte";
    import PumpingProcess from "./PumpingProcess.svelte";
    import Signing from "./Signing.svelte";
    import OrderData from "./OrderData.svelte";
    import { onMount } from "svelte";

    export let form;

    let signaturePad; 
    let signaturePadData;
    
    onMount(() => {
        let inputElements = document.getElementsByTagName("input");
        let selectedElements = document.getElementsByTagName("select");
        let textArea = document.getElementById("comments");
        
        let selectedArrayElements = Array.from(selectedElements);
        let inputArrayElements = Array.from(inputElements);

        if (signaturePad.isEmpty() && sessionStorage.getItem("signaturePad")) 
        {
            signaturePadData = sessionStorage.getItem("signaturePad");
            signaturePad.fromData(JSON.parse(signaturePadData));
        }

        if(!textArea.value)
        {
            textArea.value = sessionStorage.getItem("comments");
        }

        selectedArrayElements.forEach(element => 
        {
            if (sessionStorage.getItem(element.id)) 
            {
                element.value = sessionStorage.getItem(element.id);   
            }
        });

        inputArrayElements.forEach(element => {
            if (!element.value) 
            {                  
                element.value = sessionStorage.getItem(element.id);
            }
        });
        
        return () => {
            sessionStorage.setItem("comments", textArea.value);

            inputArrayElements.forEach(element => {
                sessionStorage.setItem(element.id, element.value);
            })
            selectedArrayElements.forEach(element => {
                sessionStorage.setItem(element.id, element.value);
            })

            sessionStorage.setItem("signaturePad", JSON.stringify(signaturePad.toData()));
        }
    })
</script>

<div>
    <button on:click={() => {sessionStorage.clear(); window.location.reload()}}>Clear storage</button>
    <OrderData {form}/>
    <GeneralData {form} />
    <InventoryData />
    <PumpingProcess />
    <Signing bind:signaturePad />
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