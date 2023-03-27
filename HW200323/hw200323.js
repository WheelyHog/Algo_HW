//Проверьте, равны ли два массива или нет
//Учитывая два массива, arr1 и arr2 одинаковой длины N , задача состоит в том, чтобы определить, равны ли данные массивы или нет. 

//Два массива называются равными, если:
//оба они содержат один и тот же набор элементов, 
//расположение (или перестановки) элементов может/не может быть одинаковым.
//Если есть повторения, то количество повторяющихся элементов также должно быть одинаковым, чтобы два массива были равны.


//Ввод: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
//Вывод: Да


//Временная сложность - O(n)

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let sortedArr1 = arr1.sort();
  let sortedArr2 = arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

let arr1 = [1, 2, 5, 4, 0];
let arr2 = [2, 4, 5, 0, 1];

console.log(areArraysEqual(arr1, arr2)); // true

//Как вариант, можно решить еще и таким способом:
//1. Сравнить длины массивов. Если длины отличаются, то ответ сразу false.
//2. Применить к массивам хеш-функцию и сравнить результаты. Если равны, то true, иначе - false.
//Но я не знаю, как это записать в коде.


function findMax(arr, k) {
  let tempSumm = arr[0];
  for (let j = 1; j < k; j++) {
    tempSumm += arr[j];
  }
  let currentMax = tempSumm;
  for (let i = 0; i < arr.length - k; i++) {
    tempSumm = tempSumm - arr[i] + arr[k + i];
    if (currentMax < tempSumm) {
      currentMax = tempSumm;
    }
  }
  console.log(currentMax);
}
const arr_1 = [1, 45, 2, 10, 23, 3, 1, 0, 20];
const k_1 = 4;
findMax(arr_1, k_1);
const arr_2 = [10, 20, 30, 40];
const k_2 = 2;
findMax(arr_2, k_2);