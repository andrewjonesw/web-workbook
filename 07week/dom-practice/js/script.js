'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
});
var listItems = document.querySelectorAll('li')

var addH2 = document.createElement('h2')

var content = document.createTextNode ('You have ' + listItems.length + ' items in your shopping cart')

addH2.appendChild(content)

var shoppingElement = document.querySelector('h1')

shoppingElement.appendChild(addH2)

var listInput = document.createElement ('input')

var inputDiv = document.createElement('div')

var listInput = document.createElement('input')
inputDiv.appendChild(listInput)

var h2Element = document.querySelector('h2')
h2Element.appendChild(inputDiv)

var button = document.createElement('button')
inputDiv.appendChild(button)

var buttonText = document.createTextNode('Add List Item')
button.appendChild(buttonText)
button.appendChild(buttonText)

button.onclick = 'addListItem()'
function addListItem () {
  var getInput = document.querySelector;
  var inputValue = getInput.inputValue
  var ulList = document.createElement
  console.log('hello!')
  button.setAttribute("onclick", 'addListItem');
}