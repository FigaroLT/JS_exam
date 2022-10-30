/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let counterButton = document.querySelector('#btn__element');
let clickCounter = document.querySelector('#btn__state');
let counter = 0;
    
counterButton.onclick = function(){

    ++counter;

clickCounter.innerHTML = counter;

    
};

