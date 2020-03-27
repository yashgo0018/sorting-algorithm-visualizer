export default function selectiveSort(
	array,
	setArray,
	done = 0,
	lastMinimumIndex = null
) {
	var i = done + 1;
	let minimum = array[done];
	let minimumIndex = done;

	if (done === array.length) {
		array.map(i => (i.active = true));
		setArray(array);
		return;
	}

	if (done !== 0) {
		array[done - 1].active = false;
		array[lastMinimumIndex].active = false;
	}
	while (i < array.length) {
		if (array[i].n < minimum.n) {
			minimum = array[i];
			minimumIndex = i;
		}
		i++;
	}
	if (i === array.length) {
		array[minimumIndex] = array[done];
		array[minimumIndex].active = true;
		array[done] = minimum;
		array[done].active = true;
		done++;
	}
	console.log(true);
	setTimeout(() => selectiveSort(array, setArray, done, minimumIndex), 20);
	setArray(array);
}
