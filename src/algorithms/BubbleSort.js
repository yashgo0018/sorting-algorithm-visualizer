export default function bubbleSort(array, setArray, start = 0, done = 0) {
	var i = start + 1;
	var changed = false;
	while (i < array.length - done) {
		if (array[i - 1].n > array[i].n) {
			let temp = array[i - 1];
			array[i - 1] = array[i];
			array[i] = temp;
			array[i].active = true;
			changed = true;
			break;
		} else {
			array[i - 1].active = false;
			array[i].active = false;
		}
		i++;
	}
	if (i >= array.length - done - 1) {
		done += 1;
		i = 0;
		if (!changed && start === 0) {
			array.map(i => (i.active = true));
			setArray(array);
			return;
		}
		array.map(i => (i.active = false));
	}
	setTimeout(() => bubbleSort(array, setArray, i, done), 0.1);
	setArray(array);
}
