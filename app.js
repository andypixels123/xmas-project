const pageText = document.getElementById("pageText");
const favColour = document.getElementById("favColour");
const howOld = document.getElementById("howOld");
const dataForm = document.getElementById("dataForm");

pageText.innerText = "Please complete the form below to get started...";

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
const minMax = [
  { min: 0, max: 15 },
  { min: 15, max: 35 },
  { min: 35, max: 55 },
  { min: 55, max: 75 },
  { min: 75, max: 95 }
];

const mM = minMax[rNum(minMax.length)];
// howOld.setAttribute("min", mM.min);
// howOld.setAttribute("max", mM.max);


// TODO: GET GENDER FROM FORM
// switch (gen) {
//   case male: const uSer = nMale[rNum(nMale.length)];
//     break;
//   case female: const uSer = nFemale[rNum(nFemale.length)];
//     break;
//   default: const uSer = nFemale[rNum(nFemale.length)];
// }
// console.log(uSer.name);

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

// popup - 'please submit your information' 1 second after first input changes
// const hurryUp = setTimeout(popHurry, 1000);
// function popHurry() {
// }
// from the information you have submitted and with the clever use of generative AI, we can determine that -
// your favourite Christmas movie is - the King's speech, Die Hard 2, Indiana Jones and the Temple of Doom, Mary Poppins, 
//
function removeEl(el) { // remove element
  setTimeout(() => el.remove(), 3000);
}

dataForm.addEventListener("submit", (e) => { // 'e' represents the 'submit' event
  e.preventDefault(); // prevents data from showing in url as query string 
  const formData = new FormData(dataForm); // FormData provides a way to construct a set of key/value pairs from data inputted
  const dataObj = Object.fromEntries(formData); // create object from inputted data as key/value pairs
  console.log(dataObj); // Check in your console to see what this variable looks like
  // const pEL = document.createElement("p");
  // pEL.innerHTML = `user name - ${dataObj.userName}<br>user location - ${dataObj.userLocation}<br>user hobby - ${dataObj.userHobby}`;
  // mainEL[0].appendChild(pEL);

  pageText.innerText = "Thank you for submitting your data.";
  removeEl(dataForm);
});

