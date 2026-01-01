const str = localStorage.getItem("stats") ? localStorage.getItem("stats") : null;
// console.log(str); // check local storage
const pageText = document.getElementById("pageText");
let userData = {};
const coLours = ["light blue", "pink", "green", "purple", "red", "black", "brown", "white", "light green", "orange", "silver", "blue", "yellow", "beige"];
const favCol = coLours[rNum(coLours.length)];
const aGe = (rNum(100)) + 2;

// presents ages 1-5, 6-12, 13-20, 21-35, 36-50, 50+
// const mPres = [{}, {}, {}, {}, {}, {}];
// const fPres = [{}, {}, {}, {}, {}, {}];
// switch (true) {
//   case age < 6:

//     break;
//   case age > 5 && age < 13:

//     break;
//   case age > 12 && age < 21:

//     break;
//   case age > 20 && age < 36:

//     break;
//   case age > 35 && age < 51:

//     break;
//   case age > 49:

//     break;
// }

// preSents[1];
// preSents[2];
// preSents[3];
// preSents[4];
// preSents[5];


function createElem(e, aN, pI, aT, iTx, typ, f, req) {
  let par;
  const el = document.createElement(e);
  // const mAin = document.getElementsByTagName("main");
  const secTion = document.getElementsByTagName("section");
  if (pI) {
    par = document.getElementById(pI);
  } else {
    // par = mAin[0];
    par = secTion[((secTion.length) - 1)];
  }
  if (aN) {
    if (aT == "c") { el.className = aN; } else { el.id = aN; }
    if (e === "input") { el.name = aN; if (req) { el.required = true; } }
  }
  if (iTx) { el.innerText = iTx; }
  if (typ) { el.type = typ; }
  if (f) { el.htmlFor = f; }
  par.appendChild(el);
  return el;
}

function storeValues(K, val) {
  let V = JSON.stringify(val);
  localStorage.setItem(K, V);
}

function rNum(X) {
  return Math.floor(Math.random() * X);
}

function removeEl(el, func) {
  setTimeout(() => el.remove(), 5000);
  // must delay callback >5000ms
  if (func) { func(); }
}

function formTwo() {
  pageText.innerText = `Hello, ${userData.userName}.\r\n\nThank you for submitting your data.\r\n\nToday we will be collating information that you provide together with some very clever AI generated content for us to determine the perfect Christmas present for you.`;
  // elememt, attr.name, parent id, attr.type, inner text, type, for, required
  createElem("p", "p1", "", "", "You will be pleased to know, you have passed our initial checks and you are now able to proceed and find your perfect Christmas present.", "", "", "");
  createElem("p", "p2", "", "", "A few more steps are now required....", "", "", "");
  createElem("form", "dataForm", "", "", "", "", "", "");
  createElem("label", "", "dataForm", "", "What is your favourite colour?", "", "favColour", "");
  createElem("input", "favColour", "dataForm", "", "", "text", "", "y");
  createElem("label", "", "dataForm", "", "How old are you?", "", "howOld", "");
  createElem("input", "howOld", "dataForm", "", "", "number", "", "");
  createElem("button", "", "dataForm", "", "submit", "submit", "", "");

  const p1 = document.getElementById("p1");
  const p2 = document.getElementById("p2");
  // const favColour = document.getElementById("favColour"); // fav colour input
  // const howOld = document.getElementById("howOld"); // age input
  // const teL = document.getElementById('telNum'); // telephone input

  dataForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent data from showing in url
    const formData = new FormData(dataForm);
    const dataObj = Object.fromEntries(formData);
    // console.log(dataObj);

    // change form values
    howOld.value = aGe;
    favColour.value = favCol;
   
    // add user stats
    userData.howOld = aGe;
    userData.favColour = favCol;
    storeValues("stats", userData);

    // delay, run another function after removing form??
    // re-use function for other elements' removal
    // removeEl(dataForm, () => setTimeout(console.log("run new function"), 6000));
    // removeEl(dataForm, () => setTimeout(formTwo, 5100));
    // todo: remove list of elements?
    // const toRemove = [dataForm, p1, p2]; // [...args]
    // removeEl(toRemove, null);
    removeEl(dataForm, null);
    removeEl(p1, null);
    removeEl(p2, () => setTimeout(funcThree, 5100));
    // removeEl(p2, null);
    // pageText.innerText="";

  });
}

function funcThree() {
  pageText.innerText = "new function running";
  // add telephone number js, We have your current location and together with the information you have provided, we are able to determine your telephone number. We have added this to your collated data and we may use this to contact you to confirm your personal details. Your telephone number is - 
  // amend personal details button
  // Add large, red button with white text for present??
}

if (str) { // stats exist in local storage
  try {
    userData = JSON.parse(str);
    console.log(userData);
    // userName = userData.userName;
    // favColour = userData.favColour;
    // howOld = userData.howOld;
    // console.log(`object from storage ${userData}, ${userData.userName}, ${userData.favColour}, ${userData.howOld}`);
  } catch (err) {
    console.error(`local storage error: ${err}`);
  }

  // todo: local storage exists, SAY HI AND LIST STATS FROM LAST VISIT, add 'amend' details button
  pageText.innerText = `Welcome back!\r\n\nFrom your previous visit we harvested the following personal information:\r\n\nYour name is ${userData.userName}\r\nYour favourite colour is ${userData.favColour}\r\nYou are ${userData.howOld} years of age\r\nYour gender is ${userData.userGen}`;


} else { // local storage empty -> create form
  // elememt, attr.name, parent id, attr.type, inner text, type, for, required
  createElem("form", "dataForm", "", "", "", "", "", "");
  createElem("label", "", "dataForm", "", "What is your name?", "", "userName", "");
  createElem("input", "userName", "dataForm", "", "", "text", "", "y");
  const chEck = createElem("p", "", "dataForm", "", "", "", "", "");
  chEck.innerHTML = "Please check one option<br>( we need this to confirm your name )";
  createElem("label", "", "dataForm", "", "male", "", "maLe", "");
  createElem("input", "maLe", "dataForm", "", "", "checkbox", "", "");
  createElem("label", "", "dataForm", "", "female", "", "feMaLe", "");
  createElem("input", "feMale", "dataForm", "", "", "checkbox", "", "");
  createElem("button", "", "dataForm", "", "submit", "submit", "", "");

  const userName = document.getElementById("userName"); // username input
  const m = document.getElementById('maLe'); // male checkbox
  const f = document.getElementById('feMale'); // female checkbox
  const dataForm = document.getElementById("dataForm"); // form

  m.addEventListener("input", () => { f.checked = false; });
  f.addEventListener("input", () => { m.checked = false; });

  // alert("Did you enter the correct name? An error was detected!");

  pageText.innerText = "Please complete the form below to get started...";

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



  // todo: CREATE ANNOYING 'HURRY UP' POP-UPS
  // popup - 'please submit your information' 1 second after first input changes
  // const hurryUp = setTimeout(popHurry, 1000);
  // function popHurry() {
  // }

  // todo: add annoying alerts with setInterval? -> alert("Did you enter the correct name? An error was detected!");

  // todo: get telephone number after form submission, add number to form Object? Get from local storage
  // teL.addEventListener("click", () => {
  //   teL.value = "999";
  //   const timer = setInterval(() => { teL.value = ""; alert("Thanks"); clearInterval(timer);}, 5000);
  //   popup - Thank you. Your telephone number has been submitted, we may use your number to contact you in the near future. We need this to confirm your personal information.
  // });

  // todo: CREATE FAVOURITE MOVIE 
  // from the information you have submitted and with the clever use of generative AI, we can determine that -
  // your favourite Christmas movie is - the King's speech, Die Hard 2, Indiana Jones and the Temple of Doom, Mary Poppins

  // todo: ENTER TELEPHONE NUMBER TO CONFIRM  PERSONAL DETAILS
  // please enter your telephone number, change as entered, auto submit? fake submit? 999, 118 118, 111, 1471, 123, 101
  // submit(); reset();

  // todo: CREATE FAVOURITE CHRISTMAS PRESENT
  // your favourite Christmas present is -  


  dataForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent data from showing in url
    const formData = new FormData(dataForm);
    const dataObj = Object.fromEntries(formData);
    // console.log(dataObj);

    // get gender from form, select name from array
    let uSer, gEnder;
    switch ("on") {
      case dataObj.maLe:
        uSer = nMale[rNum(nMale.length)];
        gEnder = "male";
        break;
      case dataObj.feMale:
        uSer = nFemale[rNum(nFemale.length)];
        gEnder = "female";
        break;
      default:
        uSer = nFemale[rNum(nFemale.length)];
        gEnder = "unconfirmed";
    }

    // change form values
    userName.value = uSer.name;

    // add user data
    userData.userName = uSer.name;
    userData.userGen = gEnder;
    storeValues("stats", userData);

    // delay, run another function after removing form??
    // re-use function for other elements' removal
    // removeEl(dataForm, () => setTimeout(console.log("run new function"), 6000)); // test callback
    removeEl(dataForm, () => setTimeout(formTwo, 5100));
    // removeEl(dataForm, null); // remove element, no callback
    // removing element also removes this event handler

  });
}




// CUSTOM POPUP BOX =================
// play.addEventListener("click", () => {
//     let info = document.createElement("section");
//     let closeBtn = document.createElement("div");
//     info.id = "popup";
//     info.innerHTML = "<h2>Game Play</h2><div class='scrollBox'><p>The object of this game is to accumulate clicks (aka panics). This kind of game is known as a 'clicker' or 'incremental' game and it uses Javascript logic to calculate values. Initially, click the panic button to start the game. When 100 clicks have accumulated, the shop will be opened for business. Further stock will be added when enough 'panics' have accumulated to pay for each item in the shop. When you purchase items from the shop, you are buying a higher rate of clicks (panics) per second. The cost of each purchase is deducted from the 'Total Stress' (total panics count) when making a purchase. Click an item in the shop to make your first purchase and the game will enter auto mode. Your stats will be saved every second so you can stop the game and pickup where you started next time you visit. The game continues infinitely until stopped by the user via the save / stop button or by closing the page.</p><p>Happy Stressing!</p></div>";
//     closeBtn.id = "close";
//     closeBtn.title = "click to close";
//     closeBtn.textContent = "✕";
//     document.body.appendChild(info);
//     info.appendChild(closeBtn);
//     closeBtn.addEventListener("click", () => {info.remove();});
// });