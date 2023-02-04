// 1  Реализовать алгоритм QuickSort, когда в качестве опорного элемента (pivot) мы выбираем не последний элемент в массиве, а случайный.



let arr = [5,82,1,43,18,33,14,68]
let count = 0;
let less = [];
let greater = [];


function quickSort(array) {
	if (array.length <=1) {
		return array
}
	let pivotIndex = Math.floor(array.length * Math.random());
  // console.log(pivotIndex);
	let pivot = array[pivotIndex]
let less = [];
let greater = [];
	for (let i = 0; i < array.length; i++) {
	count += 1;
	if (i === pivotIndex)
	continue
	if (array[i] < pivot) {
	less.push(array[i])

} else {
	greater.push(array[i])

}
} return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(arr));
console.log(count);

//2 Дан массив строк. Нужно найти самый длинный общий префикс, используя парадигму DivideAndConquer.

// Пример, 
// arr = ["return","retard","reunion","rest"]
// prefix = "re"

// arr = ["cheer", "cheerful", "cheese"]
// prefix = "chee"

// arr = ["mirror", "nothing"]
// prefix = ""          


// let arrayStr = ["return", "retard", "reunion", "rest"]
let arrayStr = ["cheer", "cheerful", "cheese"]
// let arrayStr = ["mirror", "nothing"]

let mLength = (arrayStr.map(item => item.length)).sort((x, y) => {return x-y})[0];
let prefix = [];

for(let i = 0; i < mLength; i++){
	let letter = arrayStr[0][i]
	let countx = 0;
	for(let j=0; j < arrayStr.length; j++){
		if (arrayStr[j][i] == letter) {

			countx ++;
			if (countx == arrayStr.length) {
				prefix.push(letter);
			}
			
		} else break
	}
}

console.log(prefix);
