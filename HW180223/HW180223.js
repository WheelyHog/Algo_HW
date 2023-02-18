function calculateCost(start, end) {
    let cost;
    let border = 13;
    let leftPart = border - start;
    let rightPart = end - border;
    if (end < border) {
        cost = 1
    } else {
        if (leftPart > rightPart) {
            cost = 1;
        } else cost = 2;
    }
    return cost
}

calculateCost(10, 17)

let arrayOfItems = [[9, 11], [10, 12], [12, 13], [13, 14], [12, 15], [14, 15], [16, 17], [15, 17], [9, 10]]

function maxBenefit(arr) {
    let result = arr.sort((a, b) => {
        return a[1] - b[1]
    }) //сортируем массив по возрастанию времени завершения
    let itemsArray = [] // создаем массив заявок
    itemsArray.push(result[0]) // добавляем в него первую заявку(которая начинается раньше всех)

    let lastItem = 0;

    for (let i = 1; i < arr.length; i++) { // если следующая заявка начинается позже или в то же время, что заканчивается предыдущая, добавляем ее в массив
        if (arr[i][0] >= arr[lastItem][1]) {
            itemsArray.push(arr[i])
            lastItem = i;
        }
    }
    console.log(itemsArray) // вывод полученного массива заявок
    let sumOfCosts = 0;
    itemsArray.forEach(elem => {
        sumOfCosts += calculateCost(elem) // считаем суммарную стоимость заявок
    })
    return sumOfCosts
}

console.log("Суммарная стоимость:" + maxBenefit(arrayOfItems))


