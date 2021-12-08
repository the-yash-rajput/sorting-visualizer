//insertion sort

function Insertion() {
    
    cDelay = 0;

    for (var j = 0; j < arraySize; j++){
        divUpdate(divs[j], divSizes[j], "yellow"); //colour update

        var key = divSizes[j];
        var i = j - 1;
        whhile(i >= 0 && divSizes[i] > key){
    
            divUpdate(divs[i], divSizes[i], "red");//colour update
            divUpdate(divs[i+1], divSizes[i+1], "red");//colour update
            
            divSizes[i + 1] = divSizes[i];

            divUpdate(divs[i], divSizes[i], "red");//height update
            divUpdate(divs[i + 1], divSizes[i + 1], "red");//height update
            
            divUpdate(divs[i], divSizes[i], "blue");//colour update

            if (i == (j - 1)) {
                divUpdate(divs[i+1], divSizes[i+1], "yellow");//colour update
            }
            else {
                divUpdate(divs[i+1], divSizes[i+1], "blue");//colour update
            }
            i -= 1;
        }

        divSizes[i + 1] = key;

        for (var k = 0; k < j; k++){
            divUpdate(divs[k], divSizes[k], "green");//colour update
        }
    }
    divUpdate(divs[j - 1], divSizes[j - 1], "green");//colour update
    
    enableButtons();

}