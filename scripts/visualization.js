//changing the height and the background-color of the sorting elements.

var speed = 1000;

inpAspeed.addEventListener("input",visSpeed);

function visSpeed() {
    var arraySpeed=inpAspeed.value;
    switch (parseInt(arraySpeed)) {
        case 1: speed=1;
        break;
        case 2: speed=10;
        break;
        case 3: speed=100;
        break;
        case 4: speed=1000;
        break;
        case 5: speed=10000;
        break;
        default:
            break;
    }
    delayTime=10000/(Math.floor(arraySize/10)*speed);
}
//decrease the numerator to increase the speed.
var delayTime=10000/(Math.floor(arraySize/10)*speed);
var cDelay=0;  //this is the update on every dic change so that visualizationis visible.

function divUpdate(cont,height,color){
    window.setTimeout(function() {
        cont.style="margin: 0%" + marginSize + "%; width: "+(100/arraySize-(2*marginSize))+"%; height:" + height + "%; background-color:"+ color + ";";
    }, cDelay+=delayTime);
}

function enableButtons(){
    window.setTimeout(function(){
        for(var i=0;i<buttsAlgos.length;i++){
            buttsAlgos[i].classList=[];
            buttsAlgos[i].classList.add("buttUnselected");

            buttsAlgos[i].disabled=false;
            inpAs.disabled=false;
            inpGen.disabled=false;
            inpAspeed.disabled=false;
        }
    },cDelay+=delayTime);
}