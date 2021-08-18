//1 show all students
//2 create a new student
//3 save and exit

var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData(){
    var content = fs.readFileSync('./db.json');
    students = JSON.parse(content);
}

function showMenu(){
    console.log("1. Show all students");
    console.log("2. Create a new student");
    console.log("3. Save and exit");
    var option = readlineSync.question('> ');
    switch(option){
        case "1":
            showStudents();
            showMenu();
            break;
        case "2":
            createStudent();
            showMenu();
            break;
        case "3":
            saveAndExit();
            break;
        default:
            console.log("Choose again !!!");
            showMenu();
            break;
    }
}

function showStudents(){
    for(var student of students){
        console.log(student.name, student.age);
    }
}

function createStudent(){
    var name = readlineSync.question("name: ");
    var age = readlineSync.question("age: ");
    var student = {
        name: name,
        age: age
    };
    students.push(student);
}

function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./db.json', content, {encoding: 'utf-8'});
}
 
function main(){
    loadData();
    showMenu();
}

main();