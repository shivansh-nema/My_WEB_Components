let box = document.getElementById("box");
let head = document.getElementById("heading");
let para = document.getElementById("para");
let btn = document.getElementById("btn");

function anime() {
    if (para.style.visibility != "visible") {
        box.style.width = "1000px";
        box.style.height = "500px";
        box.style.background = "url(Image.jpg) no-repeat center center/cover";
        box.style.borderRadius = "0px";
        box.style.transition = "all 0.7s ease";

        head.style.fontSize = "100px";
        head.style.webkitTextStroke = "5px black";
        head.style.color = "transparent";
        head.style.position = "relative";
        head.style.top = "10px";
        head.style.transition = "all 0.7s ease ";

        para.style.visibility = "visible";
        para.style.transition = "all 0.8s ease 0.8s";
    }
    
    else {
        box.style.width = "300px";
        box.style.height = "80px";
        box.style.background = "linear-gradient(to bottom , rgb(196, 192, 192) , rgb(58, 56, 56))";
        box.style.borderRadius = "20px";
        box.style.transition = "all 0.7s ease";

        head.style.fontSize = "50px";
        head.style.webkitTextStroke = "0px";
        head.style.color = "black";
        head.style.position = "relative";
        head.style.top = "0px";
        head.style.textDecoration = "none";
        head.style.transition = "all 0.7s ease";
        
        para.style.visibility = "hidden";
        para.style.transition = "all 0s ease 0s";
    }
};