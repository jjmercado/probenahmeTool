<script>
    import { onMount } from "svelte";

    onMount(() => {
        // let getAddStatus = sessionStorage.getItem("isAdded");
        // getAddStatus = getAddStatus === "true" ? true : false;
        
        let counter = +sessionStorage.getItem("counter");
        
        for (let index = 0; index < counter; index++) 
        {
            let getList = document.getElementById("measurementList");
            let anchor = document.createElement("a");
            let newListElement = document.createElement("li");
            let button = document.createElement("button");

            button.textContent = `Messung ${index + 1}`;
            anchor.href = `/measurement/${index + 1}`;

            getList.appendChild(newListElement);
            newListElement.appendChild(anchor);
            anchor.appendChild(button);
        }
        // if (getAddStatus) 
        // {

        //     sessionStorage.setItem("isAdded", "false");    
        // }
    })
</script>

<a href="/">
    <button>Home</button>
</a>

<a href="/newmeasurement">
    <button id="measurementButton">Neue Messung</button>
</a>

<ul id="measurementList">
    
</ul>