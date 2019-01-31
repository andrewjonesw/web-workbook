'use strict';

$(document).ready(function() {
  // Put app logic in here
  let player1 = 'x'
  let player2 = 'o'
  let play = 'x'
  let dataCell = $('div[data-cell]')

  dataCell.click(function(){
  if (play === 'x') {
  $(this).append('o')
  play = 'o'
} else {
  $(this).append('x')
  play = 'x'
}

function readDataCellValue(cell) {
let attrVal = cell
console.log(cell.attr('data-cell'))

$('#clear').on('click', function () {
dataCell.empty()
})