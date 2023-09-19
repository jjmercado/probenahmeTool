<script>
    import SignaturePad from 'signature_pad';
    import { onMount } from 'svelte';

    // @ts-ignore
    export let signaturePad;

    onMount(() => {
        // @ts-ignore
        signaturePad = new SignaturePad(document.getElementById('signaturePad'), {
            backgroundColor: 'rgb(255, 255, 255)',
            penColor: 'rgb(0, 0, 0)'
        });
    })
    
    const resetButton = () => {
        // @ts-ignore
        signaturePad.clear();
    }

</script>

<h1>Unterschriftfeld</h1>

<label for="comments">Bemerkungen</label>
<textarea name="comments" id="comments"></textarea>
<input type="date" name="date">
<div id="wrapper">
    <canvas id="signaturePad" width="500" height="200"></canvas>
</div>
<p>Bitte hier Unterschreiben</p>
<button id="resetButton" on:click={resetButton}>Reset</button>

<style>
    #wrapper
    {
        display: flex;
        justify-content: center;
    }
    #signaturePad
    {
        border:1px dashed #ccc;
        display: inline-block;
        text-align: center;
        margin-bottom: 10px;
    }

    p 
    {
        text-align: center;
    }
</style>