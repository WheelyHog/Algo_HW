// Дан отсортированный массив arr (отсортированный в порядке возрастания), содержащий N целых чисел. Найти, существует ли набор из трёх разных  элементов (arr[i], arr[j], arr[k]), сумма которых равна X.

const arr = [10, 20, 35, 50, 75, 80];

function findSubSum(x) {

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum == x) {
        return true
      } else if (sum < x) {
        left++
      } else right--
    }
  }
  return false
}

console.log(findSubSum(110)) //true
console.log(findSubSum(115)) //false
console.log(findSubSum(150)) //true
console.log(findSubSum(30)) //false