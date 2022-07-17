let studentList = [];


function studentName(){
  let studentId = {
    name: " ",
    proffetion: " ",
    age: " ",
    car: { type: " ", color: "", year: "" },
  };

studentId.name = document.querySelector('#student-name').value
document.querySelector('#student-name').value = ""
studentId.proffetion = document.querySelector('#student-prof').value
document.querySelector('#student-prof').value = ""
studentId.age = document.querySelector('#student-age').value
document.querySelector('#student-age').value = ""
studentId.car.type = document.querySelector('#student-car-type').value
document.querySelector('#student-car-type').value = ""
studentId.car.color = document.querySelector('#student-car-color').value
studentId.car.year = document.querySelector('#student-car-year').value
document.querySelector('#student-car-year').value = ""

studentList.push(studentId)

console.log(studentList);
}


function displayStudent(){
  
  if(deleter = true){
    document.querySelector("#scrn").innerHTML = " "
  }
  for(student of studentList){
  document.querySelector("#scrn").innerHTML += "<ul>";// I forgot to +=  here, and it output only the last student because of that.(why? because every loop it deleted the last)
    document.querySelector("#scrn").innerHTML += '<li> Name:'+student.name+'</li>'
    document.querySelector("#scrn").innerHTML += '<li> Prof:'+student.proffetion+'</li>'
    document.querySelector("#scrn").innerHTML += '<li> Age:'+student.age+'</li>'
    document.querySelector("#scrn").innerHTML += '<li> Car:</li>'
    document.querySelector("#scrn").innerHTML += '   <li> type:'+student.car.type+'</li>'
    document.querySelector("#scrn").innerHTML += '   <li> color: <span style="background-color:'+student.car.color+';"> Car color </span></li>'
    document.querySelector("#scrn").innerHTML += '   <li> year:'+student.car.year+'</li>'
  document.querySelector("#scrn").innerHTML += "</ul>";

let deleter = true
}
}