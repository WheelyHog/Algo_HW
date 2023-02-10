// Given an array 'arr[]' of positive integers, flip each group of subarrays to size 'K.'

// Example 1:
// K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: The first group consists of elements
// 1, 2, 3. The second group consists of 4,5.

// Example 2:
// K = 3
// arr[] = {5,6,8,9}
// Output: 8 6 5 9

// Your task:
// To write a reverse (arr, k) function that takes 'arr[]' and 'K' as input and modifies the array into place.
// let arr = [1,2,3,4,5]
let arr = [5, 6, 8, 9]
function flipToK(arr, k) {
    let tempStart = []
    let tempEnd = []
    for (let i = 0; i < arr.length; i++) {
        if (i < k) {
            tempStart[i] = arr[k - i - 1]
        } else tempEnd.push(arr[i])
    }
    return [...tempStart, ...tempEnd]
}

// console.log(flipToK(arr, 3))
// =======================================================================================

// Find the smallest positive element, which given sorted array doesn't contain. All elements of an array are sorted

// Example: [1, 2, 6, 31]
// Result: 3
//
// Example: [2, 3, 4, 6, 9, 11, 15]
// Result: 1

//Expected time complexity O(log(n))

// signature example java
// public static int smallestMissing(int[] arr) {
// }
// let nums = [2, 3, 4, 6, 9, 11, 15];
// let n = arr.length - 1

function findFirstMissing(array, start, fin) {
    while (start <= fin) {
        let mid = Math.floor((start + fin) / 2);

        if (array[mid - 1] === mid) {
            start = mid + 1;
        } else {
            fin = mid - 1;
        }
    }
    return start;
}

let array = [1, 2, 3, 6, 31]
console.log(findFirstMissing(array, 1, array.length));
=====================================================================
// function coverDistance(n) {
//     if (n == 1) return 1;
//     if (n == 2) return 2;
//     if (n == 3) return 4;
//     return coverDistance(n - 1) + coverDistance(n - 2 ) + coverDistance(n - 3);
// }
// console.log(coverDistance(4));
===========================================================================
let string_Sequence = "(()()";

function validate(string_Sequence) {
    let arr = [];

    for (let i = 0; i < string_Sequence.length; i++) {
        let x = string_Sequence[i];

        if (x == '(') {
            arr.push(x);
            continue;
        }

        if (arr.length == 0)
            return false;

        let check;
        if (x == ')') {
            check = arr.pop();
        }
    }
    return (arr.length == 0);
}
    console.log(validate(string_Sequence));

Эту задачу можно вообще решить просто: исходя из условия, нам достаточно выяснить, равна ли сумма открывающих сумме закрывающих скобок. В случае, если равна, то true, иначе false. Но мне кажется, что здесь просто некорректное само условие.
