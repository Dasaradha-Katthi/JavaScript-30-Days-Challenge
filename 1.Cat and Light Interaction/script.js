function switchOff(){
    document.getElementById("bulbimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

    document.getElementById("catimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";  
    
    document.getElementById("changeText").textContent="switched Off";

    document.getElementById("Bon").style.backgroundColor="green";

    document.getElementById("Boff").style.backgroundColor="grey";

}


function switchOn(){
    document.getElementById("bulbimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

    document.getElementById("catimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";  
    
    document.getElementById("changeText").textContent="switched On";

    document.getElementById("Bon").style.backgroundColor="grey";

    document.getElementById("Boff").style.backgroundColor="red";


}
