const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];


let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
let passwordLength = document.getElementById("password-length")

document.getElementById("generate-btn").addEventListener("click", function () {

  function getMultipleRandom(characters, num) {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  let newFirstPassword = getMultipleRandom(characters, passwordLength.value)
  firstPassword.innerHTML = newFirstPassword.join("")

  let newSecondPassword = getMultipleRandom(characters, passwordLength.value)
  secondPassword.innerHTML = newSecondPassword.join("")
  
})

function sliderFunction() {
  let inputCheck = document.getElementById("inputCheck")
  let mainContainer = document.querySelector(".main-container")
  let titleText = document.querySelector("h1")
  let warningText = document.querySelector(".warning-text")
  let passwordLabel = document.querySelector(".password-label")
  let copyFirstBtn = document.getElementById("copy-first-btn")
  let copySecondBtn = document.getElementById("copy-second-btn")

  if(inputCheck.checked == false) {
    mainContainer.classList.toggle("light")
    titleText.classList.toggle("light")
    passwordLabel.classList.toggle("light")
    warningText.classList.toggle("light")
    copyFirstBtn.classList.toggle("light")
    copySecondBtn.classList.toggle("light")
  } else {
    mainContainer.classList.remove("light")
    titleText.classList.remove("light")
    passwordLabel.classList.remove("light")
    warningText.classList.remove("light")
    copyFirstBtn.classList.remove("light")
    copySecondBtn.classList.remove("light")
  }
}


const copyFirstPassword = async () => {
  try {
    await navigator.clipboard.writeText(firstPassword.innerHTML)
    console.log('Content copied to clipboard')
    let firstTooltip = document.getElementById("myFirstTooltip")
    firstTooltip.innerHTML = "Password was copied" 
  } catch (err) {
    console.log("Failed to copy: ", err)
  }
}

const copySecondPassword = async () => {
  try {
    await navigator.clipboard.writeText(secondPassword.innerHTML)
    console.log('Content copied to clipboard')
    let secondTooltip = document.getElementById("mySecondTooltip")
    secondTooltip.innerHTML = "Password was copied" 
  } catch (err) {
    console.log("Failed to copy: ", err)
  }
}

function outFunc() {
  let firstTooltip = document.getElementById("myFirstTooltip")
  firstTooltip.innerHTML = "Copy to clipboard" 

  let secondTooltip = document.getElementById("mySecondTooltip")
  secondTooltip.innerHTML = "Copy to clipboard" 
}
