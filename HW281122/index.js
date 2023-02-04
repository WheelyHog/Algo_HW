//1) if n = 1: Time Complexity = O(1), Space Complexity = O(1)
//     else  : Time Complexity = O(n^2), Space Complexity = O(n)

// function test1(n) {
//   if (n == 1)
//     return;
//   for (i = 1; i <= n; i++)
//     for (j = n; j >= 1; j--)
//       console.log(i);
// }

// 2) if n = 1: Time Complexity = O(1), Space Complexity = O(1)
//     else  : Time Complexity = O(n), Space Complexity = O(n)

// function test2(n) {
//   let a = 0;
//   for (i = 0; i < n; i++)
//     for (j = n; j > i; j--){
//       console.log(a = a + i + j);
//     }
// }

//3) if n = 0 || 1: Time Complexity = O(1), Space Complexity = O(1) 
//     else  : Time Complexity = O(n^2), Space Complexity = O(n)

// function test3(n) {
//   let i, j, a = 0;
//   for (i = n / 2; i <= n; i++)
//     for (j = 2; j <= n; j = j * 2){
//        a = a + n / 2;
//     }    
// }

//4) if n <= 0 : Time Complexity = O(1), Space Complexity = O(1) 
//       else  : Time Complexity = O(nlogn), Space Complexity = O(n)
// function test4(n) {
//   let a = 0, i = n;     
//   while (i > 0) {      
//     a += i;           
//     i /= 2;           

//   }
// }



// function binSearch(sortedArray, key){             (ПОКА НЕ РАБОТАЕТ!!!)
//   let start = 0;
//   let end = sortedArray.length - 1;

//   while (start <= end) {
//       let middle = Math.floor((start + end) / 2);

//       if (sortedArray[middle] === key) {
//           // found the key
//           console.log( middle);
//       } else if (sortedArray[middle] < key) {
//           // continue searching to the right
//           start = middle + 1;
//       } else {
//           // search searching to the left
//           end = middle - 1;
//       }
//   }
// // key wasn't found
//   console.log(-1);
// }
// binSearch([1,3,5,7,9], 3);