function insertionSort(arr) {
    // Start from the second element (index 1) as the first element is already considered sorted
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Shift elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the current element at its correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
const array = [5, 9, 18, 2, 1];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);