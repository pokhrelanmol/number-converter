const naturalNumber = document.getElementById("naturalInput");
const convertB = document.getElementById("convertToBinary");
const outputB = document.getElementById("binaryOutput");
// function to convert decimal to binary
const decimalToBinary = (number) => {
  let answer = "";
  let divident = number;

  while (divident > 1) {
    quotient = Math.floor(divident / 2);
    remainder = divident % 2;
    answer = remainder + answer;
    divident = quotient;
  }
  answer = divident + answer;
  return answer;
};
// addEventListener

convertB.addEventListener("click", () => {
  let userInput = naturalNumber.value;
  // console.log(userInput);
  if (userInput.length <= 0) {
    alert("Please enter a number!");
  } else {
    userInput = parseInt(userInput);
    if (isNaN(userInput)) {
      alert("Please enter a valid number!");
    } else {
      const answer = decimalToBinary(userInput);
      outputB.innerText = `Binary of ${userInput} is ${answer}`;
    }
  }
});
// the process of natural to binary conversion ends here

// binary to natural conversion

const binaryNumInput = document.getElementById("binaryInput");
const convertbtn = document.getElementById("convertToNatural");
const naturalNumOutput = document.getElementById("naturalOutput");

// function to convert binary to natural
const binaryToNatural = (binaryNumInput) => {
  let initialInput = binaryNumInput;
  let Answers = 0;
  let powers = 0;
  while (initialInput != 0) {
    Answers = Answers + 2 ** powers * (initialInput % 10);
    powers++;
    initialInput = parseInt(initialInput / 10);
  }
  return Answers;
};

// validating if the user is entering the correct value or not
convertbtn.addEventListener("click", () => {
  let inputByUser = binaryNumInput.value;
  if (inputByUser.length <= 0) {
    alert("enter some inputs");
  } else {
    inputByUser = parseInt(inputByUser);
    if (isNaN(inputByUser)) {
      alert("only numbers are allowed!");
    } else {
      const finalAnswer = binaryToNatural(inputByUser);
      naturalNumOutput.innerText = `The natural of ${inputByUser} is ${finalAnswer}`;
    }
  }
});

// the process of binary to natural conversion ends here.

// merging both the method of the conversion in one place
const numOptions = document.getElementById("numberOption");
const input = document.getElementById("inputField");
const convertButton = document.getElementById("convert");
const outputDiv = document.getElementById("outputDiv");
// console.log(numOptions);
convertButton.addEventListener("click", () => {
  const value = numOptions.value;
  const number = input.value;
  let answer = {};
  if (value === "nToB") {
    answer.number = decimalToBinary(number);
    answer.unit = "Binary";
  } else if (value === "bToN") {
    answer.number = binaryToNatural(number);
    answer.unit = "Natural";
  } else if (value === sU) {
    outputDiv.innerText = "";
  }

  outputDiv.innerText = `The ${answer.unit} of ${number} is ${answer.number}`;
});
