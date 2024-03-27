<script>

let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
 
let countdown = 11;
let intervalId = setInterval(function(){

    countdown = countdown-1;
    timerEl.textContent = countdown;
    if (countdown === 0){

        timerEl.textContent = "BOOM!!";
        clearInterval(intervalId);
    }

},1000)

defuserEl.addEventListener('keydown', function(event){

      let defuserText = defuserEl.value;

      if(defuserText === 'defuse' && event.key === 'Enter' && countdown !== 0){

        timerEl.textContent = "YOU DID IT!!";
        clearInterval(intervalId);
      }
      
})

   
</script>
