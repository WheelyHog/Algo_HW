class Task {
  cost
  deadline
  name

  constructor(name, deadline, cost) {
    this.deadline = deadline;
    this.cost = cost
    this.name = name
  }
}

const tasks = []
let arrOfTasks = []

tasks.push(new Task(1, 1, 40))
tasks.push(new Task(2, 2, 50))
tasks.push(new Task(3, 3, 60))
tasks.push(new Task(3, 3, 20))
tasks.push(new Task(4, 4, 90))
tasks.push(new Task(5, 5, 70))
tasks.push(new Task(6, 5, 50))
tasks.push(new Task(7, 6, 30))

function maximizePrice(tasks) {

  let expensivest = tasks.sort((a, b) => b.cost - a.cost)[0]
  for (i = 1; i <= tasks.length; i++) {
    arrOfTasks[tasks[i].deadline] = tasks[i]
  }
  console.log(arrOfTasks);
}

maximizePrice(tasks)