"use strict";

window.addEventListener("DOMContentLoaded", start);

// all my const
const allCleanStudents = [];

const Student = {
  firstName: "",
  middleName: "unknow middle name",
  nickName: "unknown nick name",
  lastName: "",
  imageSrc: "image.jpg",
  house: "",
};

const studentList = document.getElementById("student_list");
const template = document.getElementById("student").content;
// const singleStudent = document.querySelectorAll(".single_student");

const url = "https://petlatkea.dk/2021/hogwarts/students.json ";

// all my variables

let list;

// start
function start() {
  console.log(`start`);
  fetchData();
}

// ****** CONTROLLER
//* step 1 : async fetch data
async function fetchData() {
  const response = await fetch(url);
  list = await response.json();

  console.log(`allStudents is :`, list);

  prepareStudents(list);
}

// ****** MODEL
//* step 2 : init loop for each student aka prepare the student list
function prepareStudents(list) {
  console.log(`prepareStudents`);

  console.table(list);
  //   foreach student
  list.forEach((student) => {
    // console.log(`forEach working`);
    cleanStudentData();
  });
}

// *step 3 clean the data
function cleanStudentData() {
  console.log(`cleanStudentData`);
  //   foreach jsonStudent (not to confuse with const student!!)
  list.forEach((elm) => {
    const student = Object.create(Student);
    // ** make variables for each properties in (old) array
    // they are : fullname, gender and house

    //* 3.1 trim each new let for whitespace (as a start - global thing to do)

    //* 3.2 Find and set values for the object Student (specify steps)
    // ** 3.2.1 firstname
    // ! SHOULD : first char uppercase, rest lowercase, trim

    // ** 3.2.2 middleName
    // ! SHOULD :

    // ** 3.2.3 nickName
    // ! SHOULD :

    // ** 3.2.4 lastName
    // ! SHOULD : first char uppercase rest lowercase, trim

    // ** 3.2.5 gender
    // ! SHOULD :

    // ** 3.2.6 imgSrc
    // ! SHOULD :

    // ** 3.2.7 house
    // ! SHOULD :
  });

  //* PUSH each elm in new clean array :   allClanStudentList.push(elm)
}

// ***** VIEW
//* step 4 display/show the data
function displayStudents() {
  console.log(`displayStudents`);
  // ** 4.1  foreach student loop

  // ** 4.2  CLONE const clone = template cloneNode(true)
  // ** 4.2.1  clone qS [data-field="firstName"] = student.firstName.value (?? do you need the value at the end, test)
  // ** 4.2.2  clone qS [data-field="MiddleName"] = student.middleName
  // ** 4.2.3  clone qS [data-field="NickName"] = student.NickName
  // ** 4.2.4  clone qS [data-field="LastName"] = student.lastName
  // ** 4.2.5  clone qS [data-field="gender"] = student.gender
  // ** 4.2.6  clone qS [data-field="imgSrc"].src = student.imgSrc
  // ** 4.2.7  clone qS [data-field="house"] = student.house

  // ** 4.3 APPEND studentList.appenChild(clone);

  //   end
}