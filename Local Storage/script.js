<script>
let textareaEl = document.getElementById("textareaElement");
let btnEl = document.getElementById("btnElement");
btnEl.onclick = function(){
  

    let useripText = textareaEl.val;
    localStorage.setItem("userEnteredText", useripText);
    

}
let suipval = localStorage.getItem("userEnteredText");
if (suipval === null){
    textareaEl.val = " ";

}
else{
    textareaEl.val = suipval;
}

</script>
