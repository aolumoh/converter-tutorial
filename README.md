# Converter Tutorial

In this tutorial, we will learn how to create a simple website that lets you convert
numbers from Celsius to Fahrenheit and back! The website also 
implements a dark and light mode switch for user convenience and readability

## Radio Buttons

A key aspect of having this work properly is setting up your
radio buttons correctly. If they are not set up correctly,
you run the risk of selecting both celsius and fahrenheit at the same time which will cause the program not to work. Ensure they share the same name attribute as shown below

```html
<input type="radio" name="temp" id="fahrenheit">
<label for="fahrenheit">To Celsius</label>
<input type="radio" name="temp" id="celsius">
<label for="celsius">To Fahrenheit</label>
```

## Event Listeners
This project will make use of event listeners. An event listener lets you dictate what will happen if a particular action is performed. For example: "if the page is loaded or resized, print my name". For our purpose, we will use this to basically say "If convert is clicked, do the calculation and print the answer". thats also how we get the screen to change modes when the "light mode" button is clicked.

## Unit Conversion
These are the steps to to the actual conversion:
- add an event listener to the convert button
- when convert is clicked, check which radio button is selected
- depending on which is selected, you know which calculation to do
- print appropriate messages for cases where the user tries to convert without selecting a unit or when they input non-numbers

```javascript
function convertTemp(temp, toCelsius = false){
  if(toCelsius){
    return(temp-32) * (5/9);  //convert to celsius

  //do calculation for fahrenheit
}

//output
if(toCelsius){
  output.innerText = `${temperature}°F = ${result}°C`;
```

## Light and Dark Mode

This is a dynamic feature that can be implemented in many different types of websites once you can get it down. The main thing to note here is that you will need to change certain elements while maintaining the main theme of the website. You'll want to keep some things consistent once you switch modes. Such as:

- Header/footer color
- Buttons

also, make sure to pay attention to the little things that do need to change like border colors to maintain contrast and make sure all your elements that transition are changing at the same pace

```javascript
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
```

### Demo

Click [here](https://aolumoh.github.io/converter-tutorial/) to test the application