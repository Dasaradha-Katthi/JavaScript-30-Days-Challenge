 <script>
        
            function signIn(){
               
                let inputvalue =document.getElementById("inputElement").value;

                let verifiedText = "Hi!"+inputvalue+", verifying your account..";

                document.getElementById("signInElement").textContent= verifiedText;
                signInElement.style.color="green";
                      
            }
   
        </script>
