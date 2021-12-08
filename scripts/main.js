// variables 
var inpAs=document.getElementById("arraySize"),arraySize=inpAs.value;
var inpGen=document.getElementById("algorithmGenerate");
var inpAspeed=document.getElementById("algorithmSpeed");
// var arraySpeed = document.getElementById("algorithmSpeed").value;

var buttsAlgos=document.querySelectorAll(".algos button");

var divSizes=[];
var divs=[];
var marginSize;
var cont=document.getElementById("arrayContainer");
cont.style="flex-direction:row";


//array generation and updation.
//different array size and random value.

inpGen.addEventListener("click",generateArray);
inpAs.addEventListener("input",updateArraySize);

function generateArray(){
    cont.innerHTML="";

    for(var i=0;i<arraySize;i++){
        // divSizes[i] = Math.floor(Math.random * (0.5) * ((inpAs.max) - (inpAs.min))) + 10;
        divSizes[i]=Math.floor(Math.random() * 0.5*(inpAs.max - inpAs.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        marginSize=0.1;
        divs[i].style=" margin:0% " + marginSize + "%; background-color:blue; width:" + (100/arraySize-(2*marginSize)) + "%; height:" + (divSizes[i]) + "%;";
    }
}

function updateArraySize(){
    arraySize=inpAs.value;
    generateArray();
}

window.onload=updateArraySize();

//running the appropriate algorithm.

for(var i=0;i<buttsAlgos.length;i++){
    buttsAlgos[i].addEventListener("click",runalgo);
}

function disableButtons(){
    for(var i=0;i<buttsAlgos.length;i++){
        buttsAlgos[i].classList=[];
        buttsAlgos[i].classList.add("buttLocked");

        buttsAlgos[i].disabled=true;
        inpAs[i].disabled=true;
        inpGen.disabled=true;
        inpAspeed.disabled=true;
    }
}

function runalgo(){
    disableButtons();

    this.classList.add("buttSelected");
    switch(this.innerHTML){
        case "Bubble":Bubble();
            break;
        case "Selection":SelectionSort();
            break;
        case "Insertion":Insertion();
            break;
        case "Merge":Merge();
            break;
        case "Quick":Quick();
            break;
        case "Heap":Heap();
            break;
    }
}
