$(document).ready(onReady);
console.log('JQuery is ready!');


function onReady(){
console.log('JQuery is loaded');
$('.generateButton').on('click', changeTheDiv);
$('.swapButton').on('click', onSwapClick);
addingButtons();
}

function changeTheDiv(){
    console.log('Changing the div function');
    $('.appendTheDiv').empty();
    $('.appendTheDiv').append("Changing the div!").val('');
    countingTheClicks();
}

function countingTheClicks(){
    let clickCounter = 0;
    console.log("Hopefully counting the clicks");
    $('.appendTheDiv').append('<p id="countingThings">Number of clicks:</p>');
    $(".generateButton").click(function() {
        clickCounter++;
        $("#countingThings").empty();
        $("#countingThings").append('<p id="countingThings">Number of clicks:' + clickCounter + '</p>');
        });
        addingButtons();
}

function addingButtons(){
    console.log('Adding buttons?');
$('.appendTheDiv').append("<button id='swapButton'>Swap</button>");
$('.appendTheDiv').append("<button id='deleteButton'>Delete</button>");

}

function onSwapClick(){
    console.log("Swap button click");
    $('.appendTheDiv').css('background-color', 'yellow');
}