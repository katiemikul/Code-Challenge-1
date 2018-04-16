$(document).ready(onReady);
console.log('JQuery is ready!');

function onReady(){
console.log('JQuery is loaded');
$('.generateButton').on('click', changeTheDiv);
}

function changeTheDiv(){
    console.log('Changing the div function');
    $('.appendTheDiv').empty();
    $('.appendTheDiv').append("Changing the div!").val('');
}
