<script>

    let contElement = document.getElementById("myContainer");

    let h2Element = document.createElement('h2');
    h2Element.textContent = "Web Technologies";
    contElement.appendChild(h2Element);
   
   
    let btnElement = document.createElement('button');
    btnElement.textContent = "Change Heading";
    contElement.appendChild(btnElement);
   
    btnElement.onclick = function(){

        h2Element.textContent = "4.0 Technologies";
       
        h2Element.classList.add("heading");
       
        
       
    }

        let br1Element = document.createElement('br');
        contElement.appendChild(br1Element);
        let br2Element = document.createElement('br');
        contElement.appendChild(br2Element);



        let RemoveStylesbtn = document.createElement('button');
        RemoveStylesbtn.textContent = "Remove styles";
        contElement.appendChild(RemoveStylesbtn);

         RemoveStylesbtn.onclick = function(){

            h2Element.classList.remove("heading");
         }

</script>
