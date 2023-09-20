<script>
    import NewMeasurement from "./NewMeasurement.svelte";
    import { onMount } from "svelte";

    onMount(() => 
    {
        let inputElements = document.getElementsByTagName("input");
        let inputArrayElements = Array.from(inputElements);
            
        return () => 
        {
            inputArrayElements.forEach(element => {
                sessionStorage.setItem(element.id, element.value);
            })
        }
    })
</script>

<div>
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