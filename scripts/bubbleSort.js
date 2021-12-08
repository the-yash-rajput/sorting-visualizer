//Bubble Sort..

function Bubble() {
    cDelay = 0;
    
    for (var i = 0; i < arraySize - 1; i++) {
        for (var j = 0; j < arraySize - i - 1; j++){
            divUpdate(divs[j], divSizes[j], "yellow"); //colour update

            if (divSizes[j] > divSizes[j + 1]) {
                divUpdate(divs[j], divSizes[j], "red"); //colour update
                divUpdate(divs[j + 1], divSizes[j + 1], "red"); // colour update

                var tem = divSizes[j];
                divSizes[j] = divSizes[j + 1];
                divSizes[j + 1] = tem;

                divUpdate(divs[j], divSizes[j], "red"); // height update
                divUpdate(divs[j + 1], divSizes[j + 1], "red"); // height update

            }
            divUpdate(divs[j], divSizes[j], "blue"); // colour update

        }
        divUpdate(divs[j], divSizes[j], "green"); // colour update
    }
    divUpdate(divs[0], divSizes[0], "green"); // colour update


    enableButtons();
}