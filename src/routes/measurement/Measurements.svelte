<script>
    import { onMount } from "svelte";

    onMount(() => {
        let getAddStatus = sessionStorage.getItem("isAdded");
        getAddStatus = getAddStatus === "true" ? true : false;
        
        if (getAddStatus) 
        {
            let getList = document.getElementById("measurementList");
            let anchor = document.createElement("a");
            let newListElement = document.createElement("li");
            let button = document.createElement("button");

            button.textContent = sessionStorage.getItem("measurement");
            anchor.href = "/measurement/1";

            getList.appendChild(newListElement);
            newListElement.appendChild(anchor);
            anchor.appendChild(button);

            sessionStorage.setItem("isAdded", "false");    
        }
    })
</script>

<a href="/newmeasurement">
    <button id="measurementButton">Neue Messung</button>
</a>

<ul id="measurementList">
    
</ul>