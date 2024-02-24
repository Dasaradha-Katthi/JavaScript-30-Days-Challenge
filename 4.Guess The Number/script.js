<script>
        let gameResult = document.getElementById("gameResult");
        let userInput = document.getElementById("userInput");
        let randomNumber = Math.ceil(Math.random() * 100);
  
        function checkGuess() {

            let guessedNumber = parseInt(userInput.value);

            if (guessedNumber > randomNumber){

                gameResult.textContent = "Too High! Try Again";
                gameResult.style.backgroundColor = "lightblue";

            }

            
            else if (guessedNumber < randomNumber){

                gameResult.textContent = "Too Low! Try Again";
                gameResult.style.backgroundColor = "lightblue";

            }

            
            else if (guessedNumber === randomNumber){

                 gameResult.textContent = "Congrats! You got it right.";
                 gameResult.style.backgroundColor = "lightgreen";

            }

            else{

                gameResult.textContent = " Provide a Valid input";
                gameResult.style.backgroundColor = "red";


            }
 
}

</script>
