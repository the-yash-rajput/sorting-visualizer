//selection sort
function SelectionSort() {
    cDelay = 0;

    for (var i = 0; i < arraySize - 1; i++){
        divUpdate(divs[i], divSizes[i], "red");//colour update
        
        var indexMin = i;

        for (var j = i + 1; j < arraySize; j++){
            divUpdate(divs[j], divSizes[j], "yellow");//colour update
            
            if (divSizes[j] < divSizes[indexMin]) {
                if (indexMin != i) {
                    divUpdate(divs[indexMin], divSizes[indexMin], "blue");//colour update
                }
                indexMin = j;
                divUpdate(divs[indexMin], divSizes[indexMin], "red");//colour update
            }
            else {
                divUpdate(divs[j], divSizes[j], "blue");//colour update
            }
        }

        if (indexMin != i) {
            var temp = divSizes[indexMin];
            divSizes[indexMin] = divSizes[i];
            divSizes[i] = temp;

            divUpdate(divs[indexMin], divSizes[indexMin], "red");//height update           
            divUpdate(divs[i], divSizes[i], "red");//height update
            divUpdate(divs[indexMin], divSizes[indexMin], "blue");//colour update
        }

        divUpdate(divs[i], divSizes[i], "green");//colour update
    }
    divUpdate(divs[i], divSizes[i], "green");//colour update

    enableButtons();
}