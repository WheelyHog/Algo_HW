class Activity {
  startTime
  endTime
  name

  constructor(name, startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime
    this.name = name
  }
}

const activitiesToShedule = []

activitiesToShedule.push(new Activity(1, 715, 830))
activitiesToShedule.push(new Activity(2, 930, 1430))
activitiesToShedule.push(new Activity(3, 715, 1100))
activitiesToShedule.push(new Activity(4, 1115, 1245))
activitiesToShedule.push(new Activity(5, 830, 1045))
activitiesToShedule.push(new Activity(6, 1215, 1430))
activitiesToShedule.push(new Activity(7, 715, 930))
activitiesToShedule.push(new Activity(8, 945, 1115))
activitiesToShedule.push(new Activity(9, 1300, 1500))


function maximizeNumberOfActivities(activities) {

  let firstActivity = activitiesToShedule.sort((a, b) => a.endTime - b.endTime)[0]

  let activitiesList = []
  activitiesList.push(firstActivity)
  let lastActivity = 0;
  for (let i = 1; i < activitiesToShedule.length; i++) {

    if (activitiesToShedule[i].startTime >= activitiesToShedule[lastActivity].endTime) {
      activitiesList.push(activitiesToShedule[i])
      lastActivity = i
    }
  }
  console.log(activitiesList);
}

maximizeNumberOfActivities(activitiesToShedule)