//Quick sort

function Quick() {
    cDelay = 0;
    quickSort(0, arraySize - 1);

    enableButtons();
}

function quickPartition(start, end) {
    var i = start + 1;
    var piv = divSizes[start]; // making 1st element as pivot element.
    divUpdate(divs[start], divSizes[start], "yellow"); //colour update.

    for (var j = start + 1; j <= end; j++){
        // re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.

        if (divSizes[j] < piv) {
            divUpdate(divs[j], divSizes[j], "yellow"); //colour update.

            divUpdate(divs[i], divSizes[i], "red"); //colour update.
            divUpdate(divs[j], divSizes[j], "red"); //colour update.

            //swaping
            var temp = divSizes[i];
            divSizes[i] = divSizes[j];
            divSizes[j] = temp;

            divUpdate(divs[i], divSizes[i], "red"); //height update.
            divUpdate(divs[j], divSizes[j], "red"); //height update.

            divUpdate(divs[i], divSizes[i], "blue"); //height update.
            divUpdate(divs[j], divSizes[j], "blue"); //height update.

            i += 1;
        }
    }

    divUpdate(divs[start], divSizes[start], "red"); //colour update.
    divUpdate(divs[i - 1], divSizes[i - 1], "red"); //colour update.
    

    //swaping..
    var temp = divSizes[start];//put the pivot element in its proper place.
    divSizes[start] = divSizes[i - 1];
    divSizes[i - 1] = temp;

    divUpdate(divs[start], divSizes[start], "red"); //colour update.
    divUpdate(divs[i - 1], divSizes[i - 1], "red"); //colour update.
    
    for (var t = start; t <= i; t++){
        divUpdate(divs[t], divSizes[t], "green");//colour update.
    }

    return i - 1; //return the position of the pivot
}

function quickSort(start, end) {
    if (start < end) {
        //store the position of pivot element
        var pivPos = quickPartition(start, end);
        quickSort(start, pivPos - 1);  //sort the left side of the pivot.
        quickSort(pivPos + 1, end);  //sorts the right side of pivot.
    }
}
