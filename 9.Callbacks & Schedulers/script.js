<script>

let setIntervalEl = document.getElementById("setIntervalbtn");
let clearIntervalEl = document.getElementById("clearIntervalbtn");
let paragraphEl = document.createElement('p');
 
 document.body.appendChild(paragraphEl);






let uniqueId = null;

setIntervalEl.onclick = function(){
    let counter = 0;
    uniqueId = setInterval(function(){
    
    let paragraphEl = document.createElement('p');
 
    document.body.appendChild(paragraphEl);

    paragraphEl.textContent = counter;  
    counter = counter + 1;


}, 1000);

};

    clearIntervalEl.onclick = function(){
    clearInterval(uniqueId);
    paragraphEl.textContent = " Interval Cleared"; 
    
    
};

</script>
