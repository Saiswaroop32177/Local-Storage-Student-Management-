
let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let id = document.getElementById("sid").value.trim();
    let name = document.getElementById("sname").value.trim();
    let course = document.getElementById("course").value.trim();
    let marks = document.getElementById("marks").value.trim();

    if (!id || !name || !course || marks === "") {
        alert("Please enter all details");
        return;
    }

    students.push({ id, name, course, marks });
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("sid").value = "";
    document.getElementById("sname").value = "";
    document.getElementById("course").value = "";
    document.getElementById("marks").value = "";

    showStudents();
}

function showStudents() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach((s, i) => {
        list.innerHTML += `<tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.course}</td>
            <td>${s.marks}</td>
            <td><button onclick="deleteStudent(${i})">Delete</button></td>
        </tr>`;
    });
}

function deleteStudent(i) {
    students.splice(i, 1);
    localStorage.setItem("students", JSON.stringify(students));
    showStudents();
}

showStudents();
