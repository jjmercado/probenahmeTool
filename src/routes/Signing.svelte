<script>
    import lemonade from "lemonadejs";
    import Signature from "@lemonadejs/signature";
    import { onMount } from "svelte";
 
    onMount(() => {
        const signaturePad = document.getElementById("signaturePad");
        
        Signature(signaturePad, {
        value: [],
        width: 500,
        height: 100,
        instructions: "Please sign this document"
    })

});

</script>

<h1>Unterschriftfeld</h1>

<label for="comments">Bemerkungen</label>
<textarea name="comments" id="comments"></textarea>
<input type="date" name="date">
<!-- Unterschriftfeld -->
<div id="signaturePad"></div>

<style>
    #signaturePad
    {
        border:1px dashed #ccc;
        display: inline-block;
        text-align: center;
        margin-bottom: 10px;
    }
</style>