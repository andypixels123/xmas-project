const savedData = localStorage.getItem("stats") ? localStorage.getItem("stats") : null;
const pageText = document.getElementById("pageText");
let userData = {};
const colours = ["blue", "pink", "green", "purple", "red", "black", "brown", "white", "gold", "orange", "silver", "beige", "yellow",];
const randomColour = colours[rNum(colours.length)];
const randomAge = rNum(100) + 2;

const maleNames = [
  { name: "Noel" },
  { name: "Joseph" },
  { name: "Gabriel" },
  { name: "Jesus" },
  { name: "Rudolph" },
  { name: "Ebenezer Scrooge" },
  { name: "Buddy the Elf" },
  { name: "Santa Claus" },
];

const femaleNames = [
  { name: "Mary" },
  { name: "Carol Singer" },
  { name: "Holly" },
  { name: "Angel" },
  { name: "Noelle" },
  { name: "Ivy" },
];

function getGift(age, gender) {
  // presents ages 2-5, 6-12, 13-20, 21-35, 36-50, 50+
  let i, gift;
  const maleGifts = [
    ["Heavy Goods Vehicle", "VW Beetle", "shovel", "pet baboon", "uni-cycle", "pair of clown shoes", "spanner", "driving experience", "pipe and tobacco", "punch ball"],
    ["bottle", "horror dvd", "walking stick", "pet reindeer", "bottle of whiskey", "flying Lesson", "bottle opener", "tea pot", "pair of walking boots", "hip flask"],
    ["pet penguin", "air fryer", "cutlery set", "National Trust membership", "real polar bear", "pet lion", "log cabin", "cement mixer", "lawn mower", "scented candle"],
    ["SpongeBob SquarePants", "toy ferrari", "wordsearch book", "jigsaw puzzle", "Scrabble Set", "calendar", "pen set", "can of oil", "drawing pad", "hair straightener"],
    ["broom", "pogo stick", "pack of Paracetamol", "Thomas the Tank Engine", "colouring book", "crossword puzzle book", "bottle of diet pills", "Beano Annual", "Guinness Book of Records", "Space Hopper"],
    ["colouring book", "action man", "pair of roller blades", "pair of clogs", "mini skirt", "plastic sheep", "personalised mug", "gym membership", "Lego set", "Play-Doh set"],
  ];
  const femaleGifts = [
    ["Prosecco", "bottle of Gin", "hairdryer", "spa day", "comb", "food mixer", "manicure set", "bottle of Chanel No.5", "tin of biscuits", "tub of Quality Street"],
    ["set of hair curlers", "flower bouquet", "greenhouse", "chopping board", "socket set", "bottle of diet pills", "gym membership", "flower pot", "Slinky", "Nintendo Switch"],
    ["Dyson Vacuum Cleaner", "baking tray", "bricklaying course", "screwdriver set", "personalised toothbrush", "pair of novelty socks", "snack hamper", "bicycle tyre", "Cluedo Board Game", "portable power bank"],
    ["set of bowls", "cricket bat", "Furby", "Star Wars Power Crystal Lightsaber", "Hasbro Frustration Board Game", "Scalextric Set", "train set", "Airfix Kit", "Evel Knievel Stunt Set", "Stretch Armstrong"],
    ["lipstick", "perm", "blue rinse", "self-help book", "radio-controlled car", "build-a-bear workshop", "Rubiks Cube", "Monopoly Game", "Sylvanian Families playset", "Spirograph Set"],
    ["bicycle", "Barbie Doll", "pet hamster", "set of novelty underwear", "Fart Box", "Christmas jumper", "tricycle", "football", "Nintendo Game Boy", "Jenga Game"],
  ];

  switch (true) {
    case age < 6:
      i = 0;
      break;
    case age > 5 && age < 13:
      i = 1;
      break;
    case age > 12 && age < 21:
      i = 2;
      break;
    case age > 20 && age < 36:
      i = 3;
      break;
    case age > 35 && age < 51:
      i = 4;
      break;
    case age > 49:
      i = 5;
  }

  if (gender === "male") {
    gift = maleGifts[i][rNum(maleGifts[i].length)];
  }

  if (gender === "female" || gender === "unconfirmed") {
    gift = femaleGifts[i][rNum(femaleGifts[i].length)];
  }
  userData.userGift = gift;
  storeValues("stats", userData);
}

function createElem(e, aN, aT, pI, iTx, typ, f, req) {
  let par;
  const el = document.createElement(e);
  const secTion = document.getElementsByTagName("section");
  if (pI) { par = document.getElementById(pI); } else { par = secTion[secTion.length - 1]; }
  if (aN) {
    if (aT == "c") { el.className = aN; } else { el.id = aN; }
    if (e === "input") {
      el.name = aN;
      if (req) { el.required = true; }
    }
  }
  if (iTx) { el.innerText = iTx; }
  if (typ) { el.type = typ; }
  if (f) { el.htmlFor = f; }
  par.appendChild(el);
  return el;
}

function storeValues(key, value) {
  const storageString = JSON.stringify(value);
  localStorage.setItem(key, storageString);
}

function rNum(factor) {
  return Math.floor(Math.random() * factor);
}

function removeElem(element, callBack) {
  setTimeout(() => element.remove(), 5000);
  // must delay callback >5000ms
  if (callBack) { callBack(); }
}

function formTwo() {
  // e, aN, aT, pI, iTx, type, for, req
  pageText.innerText = `Hello, ${userData.userName}.\r\n\nThank you for submitting your data.\r\n\nToday we will be collating information that you provide together with some very clever AI generated content for us to determine the perfect Christmas present for you.`;
  const elemGroup = createElem("span", "elemGroup", "", "", "", "", "", "");
  createElem("p", "", "", "elemGroup", "You will be pleased to know, you have passed our initial checks and you are now able to proceed and find your perfect Christmas present.", "", "", "");
  createElem("p", "", "", "elemGroup", "A few more steps are required....", "", "", "");
  const dataForm = createElem("form", "dataForm", "", "elemGroup", "", "", "", "");
  createElem("label", "", "", "dataForm", "What is your favourite colour?", "", "colourInput", "");
  const colourInput = createElem("input", "colourInput", "", "dataForm", "", "text", "", "y");
  createElem("label", "", "", "dataForm", "How old are you?", "", "userAge", "");
  const userAge = createElem("input", "userAge", "", "dataForm", "", "number", "", "");
  createElem("button", "", "", "dataForm", "submit", "submit", "", "");

  const buttons = document.getElementsByTagName("button");

  dataForm.addEventListener("submit", (e) => {
    buttons[0].disabled = true;
    e.preventDefault(); // prevent data from showing in url
    const formData = new FormData(dataForm);
    const dataObj = Object.fromEntries(formData);

    // change form values
    userAge.value = randomAge;
    colourInput.value = randomColour;

    // store user data
    userData.userAge = randomAge;
    userData.userColour = randomColour;
    storeValues("stats", userData);
    removeElem(elemGroup, () => setTimeout(funcThree, 5100));
  });
}

function funcThree() {
  // e, aN, aT, pI, iTx, type, for, req
  pageText.innerText = `${userData.userName}, if you are not completely happy with the data you have submitted you may now amend your details, or get your perfect present!`;
  // add telephone number js, We have your current location and together with the information you have provided, we are able to determine your telephone number. We have added this to your collated data and we may use this to contact you to confirm your personal details. Your telephone number is -
  // const teL = document.getElementById('telNum'); // telephone input
  const amendBtn = createElem("div", "btn", "c", "", "Amend", "", "", "");
  amendBtn.title = "amend personal details";
  const giftBtn = createElem("div", "btn", "c", "", "Present", "", "", "");
  giftBtn.title = "perfect present idea";
  amendBtn.addEventListener("click", () => {
    localStorage.removeItem("stats");
    location.reload();
  });
  giftBtn.addEventListener("click", () => {
    getGift(userData.userAge, userData.userGender);
  });
}

if (savedData) {
  // data found in local storage
  try {
    userData = JSON.parse(savedData);
    console.log(userData);
  } catch (err) {
    console.error(`local storage error: ${err}`);
  }

  pageText.innerText = `Welcome back!\r\n\nFrom your previous visit we harvested the following personal information:\r\n\nYour name is ${userData.userName}\r\nYour favourite colour is ${userData.userColour}\r\nYou are ${userData.userAge} years of age\r\nYour gender is ${userData.userGender}\r\n\nWith the information you have provided and our clever use of generative AI, we found your perfect Christmas present:`;
  createElem("p", "bold", "c", "", `${userData.userGift}`, "", "", "");
  const amendBtn = createElem("div", "btn", "c", "", "Amend", "", "", "");
  amendBtn.title = "amend personal details";
  amendBtn.addEventListener("click", () => {
    localStorage.removeItem("stats");
    location.reload();
  });

} else {
  // local storage empty -> create form
  // e, aN, aT, pI, iTx, type, for, req
  const dataForm = createElem("form", "dataForm", "", "", "", "", "", "");
  createElem("label", "", "", "dataForm", "What is your name?", "", "userName", "");
  const userName = createElem("input", "userName", "", "dataForm", "", "text", "", "y");
  const checkboxP = createElem("p", "", "", "dataForm", "", "", "", "");
  checkboxP.innerText = "Please check one option\r\n( we need this to confirm your name )";
  createElem("label", "", "", "dataForm", "male", "", "inputMale", "");
  const maleCheckbox = createElem("input", "inputMale", "", "dataForm", "", "checkbox", "", "");
  createElem("label", "", "", "dataForm", "female", "", "inputFemale", "");
  const femaleCheckbox = createElem("input", "inputFemale", "", "dataForm", "", "checkbox", "", "");
  createElem("button", "", "", "dataForm", "submit", "submit", "", "");
  const buttons = document.getElementsByTagName("button");

  userName.addEventListener("input", () => {
    // todo: add random name below =============================
    userName.value = "Mary";
    setTimeout(() => {
      // annoying alert box
      alert("Thanks, your name was submitted");
      // todo: add random name below =============================
      userName.value = "Santa";
    }, 5000);
  });

  maleCheckbox.addEventListener("input", () => {
    femaleCheckbox.checked = false;
  });
  femaleCheckbox.addEventListener("input", () => {
    maleCheckbox.checked = false;
  });
  pageText.innerText = "Please complete the form below to get started...";

  dataForm.addEventListener("submit", (e) => {
    buttons[0].disabled = true;
    e.preventDefault(); // prevent data from showing in url
    const formData = new FormData(dataForm);
    const dataObj = Object.fromEntries(formData);

    // get gender from form, select name from array
    let uSer, gEnder;
    switch ("on") {
      case dataObj.inputMale:
        uSer = maleNames[rNum(maleNames.length)];
        gEnder = "male";
        break;
      case dataObj.inputFemale:
        uSer = femaleNames[rNum(femaleNames.length)];
        gEnder = "female";
        break;
      default:
        uSer = femaleNames[rNum(femaleNames.length)];
        gEnder = "unconfirmed";
    }

    // change form values
    userName.value = uSer.name;

    // store user data
    userData.userName = uSer.name;
    userData.userGender = gEnder;
    storeValues("stats", userData);

    // delay, optionally run another function after removing element
    removeElem(dataForm, () => setTimeout(formTwo, 5100));
    // removeElem(dataForm, null); // remove element, no callback
    // removeElem(dataForm, () => setTimeout(console.log("run new function"), 6000)); // test callback
    // also removes event handlers
  });
}

// todo: SHOW FAVOURITE CHRISTMAS PRESENT ON PAGE, IN POP-UP??
// todo: add sound, fanfare?

// todo: CREATE ANNOYING 'HURRY UP' POP-UPS or Alerts with setInterval()?
// popup - 'please submit your information' 1 second after first input changes
// const hurryUp = setTimeout(popHurry, 1000);
// function popHurry() {
// }
// alert("Did you enter the correct name? An error was detected!");

// todo: Create fake telephone number after form submission? Add to local storage?
// teL.addEventListener("click", () => {
//   teL.value = "999";
//   const timer = setInterval(() => { teL.value = ""; alert("Thanks"); clearInterval(timer);}, 5000);
//   popup - Thank you. Your telephone number has been submitted, we may use your number to contact you in the near future. We need this to confirm your personal information.
// });

// todo: ENTER TELEPHONE NUMBER TO CONFIRM  PERSONAL DETAILS
// please enter your telephone number, change as entered, auto submit? fake submit? 999, 118 118, 111, 1471, 123, 101
// submit(); reset();

// todo: CREATE FAVOURITE MOVIE?
// from the information you have submitted and with the clever use of generative AI, we can determine that -
// your favourite Christmas movie is - the King's speech, Die Hard 2, Indiana Jones and the Temple of Doom, Mary Poppins

// todo: CUSTOM POPUP BOX, use createElem() for this!
// play.addEventListener("click", () => {
//     let info = document.createElement("section");
//     let closeBtn = document.createElement("div");
//     info.id = "popup";
//     info.innerHTML = "<h2>Game Play</h2><div class='scrollBox'><p>text here</p></div>";
//     closeBtn.id = "close";
//     closeBtn.title = "click to close";
//     closeBtn.innerText = "✕";
//     document.body.appendChild(info);
//     info.appendChild(closeBtn);
//     closeBtn.addEventListener("click", () => {info.remove();});
// });