'use strict';

const form = document.querySelector('form');
const numOne = document.querySelector('.num-one');
const convertButton = document.querySelector('.convert');
const output = document.querySelector('.output p');
const lightMode = document.getElementById('light-mode');

function isNumber(str) {
  if (str.length > 0 && !isNaN(str)) return true;
  return false;
}

function convertTemp(temp, toCelsius = false){
  if(toCelsius){
    return(temp-32) * (5/9);  //convert to celsius
  } else {
    return((temp * 1.8) + 32);  //convert to F
  }
}

lightMode.addEventListener('click', function() {
  body.style.backgroundColor = fff;
})

convertButton.addEventListener('click', function() {
  const temperature = numOne.value.trim();
  const toCelsius = document.getElementById('fahrenheit').checked;
  const toFahrenheit = document.getElementById('celsius').checked;

  if(isNumber(temperature)) {
    const parsed = parseFloat(temperature);
    const result = convertTemp(parsed, toCelsius).toFixed(1);

    if(toCelsius){
      output.innerText = `${temperature}°F = ${result}°C`;
    } else if(toFahrenheit){
      output.innerText = `${temperature}°C = ${result}°F`;
    } else{
      output.innerText = 'Please, select a conversion unit';
    }
    numOne.value = '';
  } else {
    output.innerText = 'Please, enter valid numbers';
  }
});

console.log();


convertTemp(32);
convertTemp(0, true);