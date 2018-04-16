$(document).ready(onReady);
console.log('JQuery is ready!');


function onReady(){
console.log('JQuery is loaded');
$('.generateButton').on('click', changeTheDiv);
$('.appendTheDiv').css('background-color', 'red');
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
        $("#countingThings").append('<p id="countingThings">Number of clicks:' +clickCounter+ '</p>');
        });
}

function addingButtons(){
    console.log('Adding buttons?');
$('.appendTheDiv').append("<button>Swap</button>");
$('.appendTheDiv').append("<button>Delete</button>");

}