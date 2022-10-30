/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const poundsValue = 2.2046;
const gramsValue = 0.001;
const ounceValue = 35.274;
const form = document.querySelector("form");
const poundsOutput = document.createElement("h4");
const gramsOutput = document.createElement("h4");
const ouncesOutput = document.createElement("h4");

const converter = (event) => {
  event.preventDefault();

  const kilograms = +document.querySelector("#weightInput").value;
  const weightOutput = document.querySelector("#output");

  const convertToPounds = kilograms * poundsValue;
  const convertToGrams = kilograms / gramsValue;
  const convertToOunce = kilograms * ounceValue;

  if (kilograms) {
    poundsOutput.textContent = `POUNDS ${convertToPounds}`;
    gramsOutput.textContent = `GRAMS: ${convertToGrams}`;
    ouncesOutput.textContent = `OUNCES: ${convertToOunce}`;

    weightOutput.append(poundsOutput, gramsOutput, ouncesOutput);
  } else {
    alert("Please insert numbers");
  }
};

form.addEventListener("submit", converter);
