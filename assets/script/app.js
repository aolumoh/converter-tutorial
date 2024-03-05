'use strict';

const form = document.querySelector('form');
const numOne = document.querySelector('.num-one');
const convertButton = document.querySelector('.convert');
const output = document.querySelector('.output p');
const lightMode = document.querySelector('.light-mode');
const body = document.querySelector('body');
const title = document.querySelector('h2');
const unitText = document.querySelectorAll('label');
const lightText = 'rgb(255, 255, 255';
const darkText = 'rgb(0, 0, 0)';

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

// Color change

lightMode.addEventListener('click', () => {
  if(lightMode.value === 'Dark mode')
    turnDark();
  else if (lightMode.value === 'Light mode')
    turnLight();
});

function turnLight(){
  body.style.backgroundColor = 'rgb(240, 240, 240';
  lightMode.value = 'Dark mode';
  lightMode.style.backgroundColor = '#000';
  lightMode.style.color = '#fff';
  title.style.color = darkText;
  unitText.forEach(label => {
    label.style.color = darkText;
  });
  numOne.style.color = darkText;
  numOne.style.borderColor = 'rgb(200, 200, 200)';
  output.style.color = darkText;
}

function turnDark(){
  body.style.backgroundColor = 'rgb(24, 23, 32)';
  lightMode.value = 'Light mode';
  lightMode.style.backgroundColor = '#fff';
  lightMode.style.color = '#000';
  title.style.color = lightText;
  unitText.forEach(label => {
    label.style.color = lightText;
  });
  numOne.style.color = lightText;
  numOne.style.borderColor = '#ffffff0d';
  output.style.color = lightText;
}