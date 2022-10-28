/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault();

    const kilograms = document.querySelector('#weightInput').value;
    const pounds = document.createElement('h4');
    const grams = document.createElement('h4');
    const ounces = document.createElement('h4');

    pounds.style.backgroundColor = 'lightGreen';
    pounds.style.padding = '10px';
    pounds.textContent = "POUNDS:" + " " + kilograms * 2.2046;
    grams.style.backgroundColor = 'lightBlue';
    grams.style.padding = '10px';
    grams.textContent = "GRAMS:" + " " + kilograms / 0.0010000;
    ounces.style.backgroundColor = 'pink';
    ounces.style.padding = '10px';
    ounces.textContent = "OUNCES:" + " " + kilograms * 35.274;

    const weightOutput = document.querySelector('#output');

    weightOutput.style.height = 'auto';
    weightOutput.style.width = '500px';
    weightOutput.style.textAlign = 'center';
    weightOutput.style.margin = 'auto';



weightOutput.append(pounds, grams, ounces);

    
})
