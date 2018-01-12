function bubbleSort(arr) {
	for(let x = 0; x < arr.length; i++) {
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] > arr[i + 1]) {
				arr = swap(arr, i);
			}
		}
	}
	return arr;
}

function swap(arr, index) {
	let x = array[index];
	array[index] = array[index + 1];
	array[index + 1] = x;
	return array;
}