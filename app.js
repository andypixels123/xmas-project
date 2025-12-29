const pageText = document.getElementById("pageText"); // page text
const favColour = document.getElementById("favColour"); // fav colour input
const userName = document.getElementById("userName"); // username input
const howOld = document.getElementById("howOld"); // age input
const m = document.getElementById('maLe'); // male checkbox
const f = document.getElementById('feMale'); // female checkbox
const teL = document.getElementById('telNum'); // telephone input
const dataForm = document.getElementById("dataForm"); // form

pageText.innerText = "Please complete the form below to get started...";
// Hello Santa Claus, today we will be collating information that you provide together with some very clever AI generated content for us to determine the perfect Christmas present for you. Please complete the form below to get started...

// const inp1 = document.getElementById();
// const inp2 = document.getElementById();
// const inp3 = document.getElementById();
// const inp4 = document.getElementById();

function rNum(X) {
  return Math.floor(Math.random() * X);
}

// male names list
const nMale = [
  { name: "Noel" },
  { name: "Joseph" },
  { name: "Gabriel" },
  { name: "Jesus" },
  { name: "Rudolph" },
  { name: "Ebenezer Scrooge" },
  { name: "Buddy the Elf" },
  { name: "Santa Claus" }
];

// female names list
const nFemale = [
  { name: "Mary" },
  { name: "Carol Singer" },
  { name: "Holly" },
  { name: "Angel" },
  { name: "Noelle" },
  { name: "Ivy" }
];

// set min / max values for age input
// const minMax = [
//   { min: 0, max: 15 },
//   { min: 15, max: 35 },
//   { min: 35, max: 55 },
//   { min: 55, max: 75 },
//   { min: 75, max: 95 }
// ];

// favourite colours
const coLours = ["light blue", "pink", "green", "purple", "red", "black", "brown", "white", "light green", "orange", "silver", "blue", "yellow", "beige"];
const favCol = coLours[rNum(coLours.length)];
// console.log(favCol);
// form name - favColour

// const mM = minMax[rNum(minMax.length)];
const aGe = (rNum(100)) + 1;
// console.log(aGe);
// howOld.setAttribute("min", mM.min);
// howOld.setAttribute("max", mM.max);


//  NOT CURRENTLY USED ===============================================
// let otherPerson = "Father Christmas"; // create random name from array
// function myFunction() {
//   const person = prompt("Please enter your name", otherPerson);
//   if (person != null) {
//     const p1 = document.createElement("p");
//     const p2 = document.createElement("p");
//     const p3 = document.createElement("p");
//     p1.innerText = `Hello ${otherPerson}.`;
//     p2.innerText = "Today we will be personalising your new web page and we will save your personal data and site preferences for your future visits to this website.";
//     p3.innerText = "Please complete the following form and submit your information for further processing.";
//     pageText.appendChild(p1);
//     pageText.appendChild(p2);
//     pageText.appendChild(p3);
//   }
// }
// myFunction();
// END ===============================================================



// todo ==============================================================

// store dataObj in local storage

// create pop up html.... copy from clicker assignment

// CREATE HURRY UP POP-UP
// popup - 'please submit your information' 1 second after first input changes
// const hurryUp = setTimeout(popHurry, 1000);
// function popHurry() {
// }

// You will be pleased to know, you have passed our initial checks and you are now able to proceed and find your perfect Christmas present. A few more steps are now required. Add 'continue' button. 

// CREATE FAVOURITE MOVIE 
// from the information you have submitted and with the clever use of generative AI, we can determine that -
// your favourite Christmas movie is - the King's speech, Die Hard 2, Indiana Jones and the Temple of Doom, Mary Poppins

// CREATE FAVOURITE CHRISTMAS PRESENT
// your favourite Christmas present is - 

// ENTER TELEPHONE NUMBER TO CONFIRM  PERSONAL DETAILS
// please enter your telephone number, change as entered, auto submit? fake submit? 999, 118 118, 111, 1471, 123, 101
// submit(); reset();

// todo end


function removeEl(el, func) { // delay remove element
  setTimeout(() => el.remove(), 5000);
  // run callback if exists
  if (func) { func(); }
}

m.addEventListener("input", () => { f.checked = false; });
f.addEventListener("input", () => { m.checked = false; });

dataForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent data from showing in url
  const formData = new FormData(dataForm);
  const dataObj = Object.fromEntries(formData);

  // console.log(dataObj);

  // GET GENDER FROM FORM, SELECT APPROPRIATE NAME
  let uSer;
  switch ("on") {
    case dataObj.maLe:
      uSer = nMale[rNum(nMale.length)];
      break;
    case dataObj.feMale:
      uSer = nFemale[rNum(nFemale.length)];
      break;
    default: uSer = nFemale[rNum(nFemale.length)];
  }

  // update form values
  userName.value = uSer.name;
  howOld.value = aGe;
  favColour.value = favCol;

  // update object values
  dataObj.userName = uSer.name;
  dataObj.howOld = aGe;
  dataObj.favColour = favCol;

  // console.log(dataObj);

  pageText.innerText = `Thank you for submitting your data, ${uSer.name}.`;
  // delay, run another function after removing form??
  // re-use function for other elements' removal
  // removeEl(dataForm, () => setTimeout(() => { console.log("run new function") }, 6000));
  removeEl(dataForm, null);
});

// todo: get telephone number after form submission, add number to form Object? Get from local storage
// teL.addEventListener("click", () => {
//   teL.value = "999";
//   const timer = setInterval(() => { teL.value = ""; alert("Thanks"); clearInterval(timer);}, 5000);
//   // popup - Thank you. Your telephone number has been submitted, we may use your number to contact you in the near future. We need this to confirm your personal information.
// });