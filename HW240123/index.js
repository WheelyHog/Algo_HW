// // 1. Классическая Queue - реализовать используя массив (Array)
// //     pushToEnd(int data) - вставляет элемент в конец queue
// //     remove() - удаляет элемент из начала queue
// //     peek() - возвращает элемент из начала не удаляя его
// //     isEmpty()
// //     size()
// // начало (sample code in java)
// public class Queue {
//     private int[] arr;      // массив для хранения элементов queue
//     private int head;      // head указывает на передний элемент в queue
//     private int tail;       // tail часть указывает на последний элемент в queue
//     private int capacity;   // максимальная емкость queue
//     private int count;      // текущий размер queue

let queue = [];
let head = queue[0];
let tail = queue[queue.length - 1]
let capacity = 100;
let count = 0;

function remove() {
  if (count > 0) {
    delete queue[0];
    count--;
    for (let i = 0; i < count; i++) {
      queue[i] = queue[i + 1]
    }
  } else console.log("Queue is empty!");
  queue.length--;
  head = queue[0];
  return queue;
}

function pushToEnd(data) {
  if (count <= capacity) {
    tail = data;
    count++;
    queue[count - 1] = data;
    head = queue[0]
  }
  return queue
}

function peek() {
  return head;
}

function isEmpty() {
  return count == 0;
}

function size() {
  return capacity;
}

// console.log(size());
// console.log(pushToEnd(1));
// console.log(pushToEnd(2));
// console.log(pushToEnd(3));
// console.log(pushToEnd(4));
// console.log(pushToEnd(5));
// console.log(remove());
// console.log(tail);
// console.log(head);

// 2 ==========================================================================================
// Напишите программу, которая реверсирует стек с помощью рекурсии. 
// Вам не разрешено использовать конструкции цикла, такие как while, for.. и тд
// Вы можете использовать только следующие функции в стеке S: 
// isEmpty(S) 
// push(S) 
// pop(S)

let s = [1,2,3,4,5];
let reversedS = [];

function isEmpty(s){
  return s.length == 0
}

function reverse(s){
 reversedS.push(s.pop());
if(isEmpty(s)){
  return
} else reverse(s)
}

reverse(s);
console.log(reversedS);

