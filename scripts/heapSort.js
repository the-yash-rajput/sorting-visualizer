// Heap Sort..

function Heap() {
    cDelay = 0;
    heapSort();
    enableButtons();
}

function swap(i, j) {
    divUpdate(divs[i], divSizes[i], "red"); //colour update.
    divUpdate(divs[j], divSizes[j], "red"); //colour update.

    //swaping..
    var temp = divSizes[i];
    divSizes[i] = divSizes[j];
    divSizes[j] = temp;

    divUpdate(divs[i], divSizes[i], "red"); //height update.
    divUpdate(divs[j], divSizes[j], "red"); //height update.

    divUpdate(divs[i], divSizes[i], "blue"); //colour update.
    divUpdate(divs[j], divSizes[j], "blue"); //colour update.

}

function maxHeapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < n && divSizes[l] > divSizes[largest]) {
        if (largest != i) {
            divUpdate(divs[largest], divSizes[largest], "blue"); //colour update.
        }

        largest = l;

        divUpdate(divs[largest], divSizes[largest], "red"); //colour update.
    }

    if (r < n && divSizes[r] > divSizes[largest]) {
        if (largest != i) {
            divUpdate(divs[largest], divSizes[largest], "blue"); //colour update.
        }

        largest = r;

        divUpdate(divs[largest], divSizes[largest], "red"); //colour update.
    }

    if (largest != i) {
        swap(i, largest);

        maxHeapify(n, largest);
    }
}

function heapSort() {
    for (var i = Math.floor(arraySize / 2) - 1; i >= 0; i--){
        maxHeapify(arraySize, i);
    }

    for (var i = arraySize - 1; i > 0; i--){
        swap(0, i);
        divUpdate(divs[i], divSizes[i], "green"); //colour update.
        divUpdate(divs[i], divSizes[i], "yellow"); //colour update.   

        maxHeapify(i, 0);

        divUpdate(divs[i], divSizes[i], "blue"); //colour update.
        divUpdate(divs[i], divSizes[i], "green"); //colour update.
    }

    divUpdate(divs[i], divSizes[i], "green"); //colour update.

}