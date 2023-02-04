// 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
//      решение 1 - рекурсивно O(n)
//      решение 2 - улучшить решение 1 до O(lon n)


//1
let result = 1;
function pow2(x, n) {

  if (n == 1) {
    return x;
  } else {
    pow2(x, n - 1);
    result = result * x;
  }
  console.log(result);
}

//2
function pow1(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  console.log(result);
}

// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.[index=6]

let arrA = [100, 112, 256, 349, 770];
let arrB = [72, 86, 113, 119, 265, 445, 892];
let sortedArr = [];
function mergeSort(arrA, arrB) {

  let j = 0;
  let k = 0;
  if (arrA.length < arrB.length) {
    while (j < arrA.length) {
      if (arrA[j] < arrB[k]) {
        sortedArr.push(arrA[j]);
        j++;
      } else {
        sortedArr.push(arrB[k]);
        k++;
      }
    }
  } else {
    while (k < arrB.length) {
      if (arrA[j] < arrB[k]) {
        sortedArr.push(arrA[j]);
        j++;
      } else {
        sortedArr.push(arrB[k]);
        k++;
      }
    }
    if (j < k) {
      for (let i = k - 1; i < arrB.length; i++) {
        sortedArr.push(arrB[i]);
      }
    }
  }

  if (j < k) {
    for (let i = k - 1; i < arrB.length; i++) {
      sortedArr.push(arrB[i]);
    }
  } else {
    for (let i = j - 1; i < arrA.length; i++) {
      sortedArr.push(arrA[i]);
    }
  }

  console.log(sortedArr[6]);//256
}
mergeSort(arrA, arrB);
console.log(sortedArr);



// 3 Имея отсортированный массив arr[] и число x, напишите функцию, которая подсчитывает вхождения x в arr[]. Ожидаемая временная сложность O(Log n)
// arr[] = {1, 1, 2, 2, 2, 2, 3,} 
// x = 2
// Вывод: 4 раза

let arr = [1, 1, 2, 2, 2, 2, 3];
let countX = 0;

function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let newArr = arr;


  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    
    if (arr[middle] === key) {
      // found the key

      console.log(middle);
      newArr.splice(middle, 1);
      countX++;
      console.log(countX);
      console.log(newArr);
      binarySearch(newArr, key);
    } else if (arr[middle] < key) {
      // continue searching to the right
      start = middle + 1;

    } else {
      // searching to the left
      end = middle - 1;
    }

  }
  // key wasn't found
  return -1;
}

binarySearch(arr, 2);  // countX = 4


// 4* Найдите пиковый элемент в двумерном массиве
// Элемент является пиковым, если он больше или равен своим четырем соседям слева, справа, сверху и снизу. Например, соседями для A[i][j] являются A[i-1][j], A[i+1][j], A[i][j-1] и A[i][j+1 ]. Для угловых элементов отсутствующие соседи считаются отрицательными бесконечными значениями.
// 10 20 15
// 21 30 14
//  7 16 32
// Выход: 30
// 30 — пиковый элемент, потому что все его
// соседи меньше или равны ему.
// 32 также можно выбрать в качестве пика.


// note
// 1 Смежная диагональ не считается соседней. 
// 2 Пиковый элемент не обязательно является максимальным элементом. 
// 3 Таких элементов может быть несколько. 
// 4 Всегда есть пиковый элемент.


