let nav = document.getElementById("nav");
let navbar = document.getElementById("navbar");

let home = document.getElementById("home");
let about = document.getElementById("about");
let help = document.getElementById("help");
let contact = document.getElementById("contact");

let inab = document.getElementById("insideabout");
let inhl = document.getElementById("insidehelp");
let inco = document.getElementById("insidecontact");

// _____________________________________________________________________________

about.addEventListener("mouseover" , function show(){
    inab.style.display = "block";
});

about.addEventListener("mouseout" , function hide(){
    inab.style.display = "none";
});

// _____________________________________________________________________________

help.addEventListener("mouseover" , function show(){
    inhl.style.display = "block";
});

help.addEventListener("mouseout" , function hide(){
    inhl.style.display = "none";
});

// _____________________________________________________________________________

contact.addEventListener("mouseover" , function show(){
    inco.style.display = "block";
});

contact.addEventListener("mouseout" , function hide(){
    inco.style.display = "none";
});