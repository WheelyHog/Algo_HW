// ========================== LECTION 170123 ============================

function fibonacci(n) {
  if (n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}
// console.log(fibonacci(45));

let cache = [];
cache[0] = 0;
cache[1] = 1;

function fibonacciMemo(n) {
  if (n < 2) {
    return cache[n];
  } else if (cache[n]) {
    cache[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  }
  return cache[n];
}
// console.log(fibonacciMemo(45));  // НЕ РАБОТАЕТ!!!


function fibonacciTab(n) {
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2]
  }
  return cache[n]
}

// console.log(fibonacciTab(45))

function fibonacciTabOptomized(n) {
  let cache1 = 0;
  let cache2 = 1;
  let cache3 = 1;
  for (let i = 2; i <= n; i++) {
    cache3 = cache1 + cache2;
    cache1 = cache2;
    cache2 = cache3;
  }
  return cache3;
}
// console.log(fibonacciTabOptomized(90))


// ============================================================
// Вычислить n-й член последовательности, заданной формулами:
// a(2n) = a(n) + a(n-1),
// a(2n+1) = a(n) — a(n-1),
// a0 = a1 = 1.

function sequence(n) {
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return 1;
  } else if (n % 2 == 0) {
    return sequence(n / 2) + sequence(n / 2 - 1)
  } else {
    return sequence(n / 2) - sequence(n / 2 - 1)
  }
}
// console.log(sequence(3));   // НЕ РАБОТАЕТ!!!


function sequenceMemo(n) {
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return 1;
  } else if (cache[n] == 0) {
    if (n % 2 == 0) {
      cache[n] = sequenceMemo(n / 2) + sequenceMemo(n / 2 - 1)
    } else {
      cache[n] = sequenceMemo(n / 2) - sequenceMemo(n / 2 - 1)
    }
  }
  return cache[n]
}

// console.log(sequenceMemo(5));  // НЕ РАБОТАЕТ!!! 
// ==========================================================================
// Самый дешёвый путь
// В каждой клетке прямоугольной таблицы N*M записано некоторое число. 
// Изначально игрок находится в левой верхней клетке. 
// За один ход ему разрешается перемещаться в соседнюю клетку либо вправо, либо вниз (влево и вверх перемещаться запрещено). 
// При проходе через клетку игрок платит определенную сумму, какое число записано в этой клетке.
// Требуется найти минимальную стоимость пути, отдав которую игрок может попасть в правый нижний угол.

pathCost = [
  [0, 1, 1, 0, 3, 9, 0, 3, 9, 0, 3, 9, 0, 3, 9, 0, 3, 9],
  [1, 1, 1, 3, 5, 1, 3, 5, 1, 3, 5, 1, 3, 5, 1, 3, 5, 1],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
  [7, 8, 2, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0, 4, 2, 0],
];

pathCost1 = [
  [0,11,0,0,0,0],
  [10,10,10,10,10,0],
  [10,10,10,4,10,0]
]

pathCost2 = [
  [0, 2, 3],
  [1, 3, 0],
  [1, 2, 10],
]


function minimalCost(pathCost) {
  return findMin(pathCost, 0, 0);
}

function findMin(pathCost, i, j) {
  let totalCost = pathCost[i][j];

  if ((i < pathCost.length - 1) && (j < pathCost[0].length - 1)) {
    totalCost += Math.min(findMin(pathCost, i + 1, j), findMin(pathCost, i, j + 1))
 
  } else if (i < pathCost.length - 1) {
    totalCost += findMin(pathCost, i + 1, j)

  } else if (j < pathCost[0].length - 1) {
    totalCost += findMin(pathCost, i, j + 1)
    
  }
  
  return totalCost
  
}

// console.log(minimalCost(pathCost2));



function minimalCostMemo(pathCost) {
  cacheMin = Array.from(Array(pathCost.length), () => new Array(pathCost[0].length));
  fillCache(cacheMin);
  return findMinMemo(pathCost, cacheMin, 0, 0);
}

function fillCache(cacheMin) {
  for (let i = 0; i < cacheMin.length; i++) {
    for (let j = 0; j < cacheMin[0].length; j++) {
      cacheMin[i][j] = -1;
    }
  }
}

function findMinMemo(pathCost, cacheMin, i, j) {
  if (cacheMin[i][j] != -1) {
    return cacheMin[i][j]
  } else {
    cacheMin[i][j] = pathCost[i][j];
  }

  if ((i < pathCost.length - 1) && (j < pathCost[0].length - 1)) {
    cacheMin[i][j] += Math.min(findMinMemo(pathCost, cacheMin, i + 1, j), findMinMemo(pathCost, cacheMin, i, j + 1))
  } else if (i < pathCost.length - 1) {
    cacheMin[i][j] += findMinMemo(pathCost, cacheMin, i + 1, j)
  } else if (j < pathCost[0].length - 1) {
    cacheMin[i][j] += findMinMemo(pathCost, cacheMin, i, j + 1)
  }
  return cacheMin[i][j]
}
// console.log(minimalCostMemo(pathCost));

// ==================================================================
// На вершине лесенки, содержащей N ступенек, находится мячик, который начинает прыгать по ним вниз, к основанию. 
// Мячик может прыгнуть на следующую ступеньку, на ступеньку через одну или через 2. 
// (То есть, если мячик лежит на 8-ой ступеньке, то он может переместиться на 5-ую, 6-ую или 7-ую.) 
// Определить число всевозможных «маршрутов» мячика с вершины на землю.

function ballPath(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (n == 3) return 4;
  return ballPath(n - 1) + ballPath(n - 2) + ballPath(n - 3);
}

// console.log(ballPath(4));

function ballPathTabOptimized(n) {
  let cache1 = 1;
  let cache2 = 2;
  let cache3 = 4;
  let cache4 = 7;

  for (let i = 4; i <= n; i++) {
    cache4 = cache1 + cache2 + cache3
    cache1 = cache2;
    cache2 = cache3;
    cache3 = cache4;
  }
  return cache4
}
// console.log(ballPathTabOptimized(4));

// ===============================HOMEWORK 170123 ==========================

// 1. Вычислить n-й член последовательности, заданной формулами:
// a(n) = sqrt(a(n-1)*a(n-1) + a(n-2)*a(n-2)),
// a0 = a1 = 1.

function foo(n) {
  if(n == 0) return 1;
  if(n == 1) return 1;

    return Math.sqrt(foo(n -1) * foo(n-1) + foo(n - 2) * foo(n - 2));
  }

console.log(foo(2));

cache = [];
cache[0] = 1;
cache[1] = 1;

function fooTab(n) {

  for (let i = 2; i <= n; i++) {
    cache[i] = Math.sqrt(cache[i-1] * cache[i-1] + cache[i - 2] * cache[i - 2])
  }
  return cache[n]
}

console.log(fooTab(20));

// 1. Вычислить n-й член последовательности, заданной формулами:
// a(n) = sqrt(a(n-1)*a(n-1) + a(n-2)*a(n-2)),
// a0 = a1 = 1.
(n = 0) a(0) = a0 = 1
(n = 1) a(1) = a1 = 1
(n = 2) a(2) = sqrt( a(1) * a(1) + a(0) * a(0)) = sqrt(2)
(n = 3) a(3) = sqrt( a(2) * a(2) + a(1) * a(1)) = sqrt ( sqrt(2) * sqrt(2) + 1 * 1 ) = sqrt(3)
(n = 4) a(4) = sqrt( a(3) * a(3) + a(2) * a(2)) = sqrt ( sqrt(3) * sqrt(3) + sqrt(2) * sqrt(2)) = sqrt (3 + 2) = sqrt(5)