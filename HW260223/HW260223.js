// a_position - position of lift A
// b_position - position of lift B
// current_position - where lift have to arrive


function callLift(a_position, b_position, current_position){
    let dx_a = Math.abs(a_position - current_position)
    let dx_b = Math.abs(b_position - current_position)
if(dx_a > dx_b){
    console.log('Ближайший лифт B')
} else if(dx_b > dx_a) {
    console.log('Ближайший лифт A')
} else console.log('Лифты A и B на одинаковом расстоянии')
}

callLift(0, 8, 1)
callLift(0, 8, 3)
callLift(19, 8, 9)
callLift(3, 28, 1)
callLift(0, 1, 1)