<script>
let counterElement=document.getElementById("countval");

    function onInc(){

        let prevCV = counterElement.textContent;

        let updatedCV = parseInt(prevCV) + 1;

        counterElement.textContent = updatedCV;

        if (updatedCV > 0)
        {
            counterElement.style.color="green";

        }
        else if (updatedCV < 0)
        {
            counterElement.style.color="red";

        }
        else {
            counterElement.style.color="black";

        }



    }
    
    function onDec(){

        let prevCV = counterElement.textContent;

        let updatedCV = parseInt(prevCV) - 1;

        counterElement.textContent = updatedCV;

        if (updatedCV > 0)
        {
            counterElement.style.color="green";

        }
        else if (updatedCV < 0)
        {
            counterElement.style.color="red";

        }
        else {
            counterElement.style.color="black";

        }

}

function onReset(){

    updatedCV = 0;

    counterElement.textContent = updatedCV;

    counterElement.style.color="black";

}

</script>
