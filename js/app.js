let studentList = [];
let studentId = {
  name: " ",
  proffetion: " ",
  age: " ",
  car: { type: " ", color: "", year: "" },
};

function studentName(){
studentId.name = document.querySelector('#student-name').value
studentId.proffetion = document.querySelector('#student-prof').value
studentId.age = document.querySelector('#student-age').value

studentId.car.type = document.querySelector('#student-car-type').value
studentId.car.color = document.querySelector('#student-car-color').value
studentId.car.year = document.querySelector('#student-car-year').value

studentList.push(studentId)

console.log(studentList);
}



function displayStudent(){
    document.querySelector("#scrn").innerHTML = "<ul>";
    document.querySelector("#scrn").innerHTML += '<li> Name:'+studentId.name+'</li>'
    document.querySelector("#scrn").innerHTML += '<li> Prof:'+studentId.proffetion+'</li>'
    document.querySelector("#scrn").innerHTML += '<li> Age:'+studentId.age+'</li>'
    document.querySelector("#scrn").innerHTML += '<li> Car:</li>'
    document.querySelector("#scrn").innerHTML += '   <li> type:'+studentId.car.type+'</li>'
    document.querySelector("#scrn").innerHTML += '   <li> color: <span style="background-color:'+studentId.car.color+';"> Car color </span></li>'
    document.querySelector("#scrn").innerHTML += '   <li> year:'+studentId.car.year+'</li>'
  document.querySelector("#scrn").innerHTML += "</ul>";
}