const str = localStorage.getItem("stats") ? localStorage.getItem("stats") : null;
console.log(str); // check local storage
// const formContainer = document.getElementById("formContainer");

function createElem(e, aN, pI, aT, iTx, typ, f, req) {
  let par;
  const el = document.createElement(e);
  // const mAin = document.getElementsByTagName("main");
  const secTion = document.getElementsByTagName("section");
  if (pI) { // parent from id
    par = document.getElementById(pI);
  } else {
    // par = mAin[0]; // default parent
    par = secTion[((secTion.length) - 1)]; // default parent
  }
  if (aN) { // add class or id
    if (aT == "c") { el.className = aN; } else { el.id = aN; }
    if (e === "input") { el.name = aN; if (req) { el.required = true; } }
  }
  if (iTx) { el.innerText = iTx; }
  if (typ) { el.type = typ; }
  if (f) { el.htmlFor = f; }

  par.appendChild(el);
  return el;
}

if (str) { // stats exist in local storage
  try {
    const obj = JSON.parse(str);
    // userName = obj.userName;
    // favColour = obj.favColour;
    // howOld = obj.howOld;
    console.log(`object from storage ${obj}, ${obj.userName}, ${obj.favColour}, ${obj.howOld}`);
  } catch (err) {
    console.error(err);
  }

} else {

  // console.log("else, do this");

  // create form ==================================
  // spread syntax
  // const el1Data = ["form","dataForm","","",""];
  // const el2Data = ["label","","dataForm","","What is your name?"];
  // const el1 = createElem(...el1Data);
  // const el2 = createElem(...el2Data);

  const foRm = createElem("form", "dataForm", "", "", "", "", "", "");
  createElem("label", "", "dataForm", "", "What is your name?", "", "userName", "");
  createElem("input", "userName", "dataForm", "", "", "text", "", "y");


  // const laBel = document.createElement("label");
  // label.htmlFor = "input1";
  // laBel.innerText = "Text Here";
  // document.body.appendChild(laBel);

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

  function storeValues(K, val) { // save to local storage // key / value pairs
    let V = JSON.stringify(val);
    localStorage.setItem(K, V);
  }

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

    // get gender from form, select name from array
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
    // howOld.value = aGe;
    // favColour.value = favCol;

    // update object values
    dataObj.userName = uSer.name;
    // dataObj.howOld = aGe;
    // dataObj.favColour = favCol;

    // console.log(dataObj);
    storeValues("stats", dataObj);

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
  //   popup - Thank you. Your telephone number has been submitted, we may use your number to contact you in the near future. We need this to confirm your personal information.
  // });


}