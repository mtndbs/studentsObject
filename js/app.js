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

console.log(studentId.name);

let totalId = studentId 
studentList.push(totalId)
console.dir(totalId);
}



function displayStudent(){
    document.querySelector("#scrn").innerHTML = "<ul>";
    document.querySelector("#scrn").innerHTML += '<li> name:'+studentId.name+'</li>'
    document.querySelector("#scrn").innerHTML += '<li> name:'+studentId.proffetion+'</li>'
    document.querySelector("#scrn").innerHTML += '<li> name:'+studentId.age+'</li>'
  document.querySelector("#scrn").innerHTML += "</ul>";
}