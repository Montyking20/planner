// Display the time using moment.js
$("#currentDay").text(`${moment().format('dddd, MMMM Do, YYYY')}`);

// ---- Planner Variables ---- //
// Time Slot Variables
const hour01 = $('#hour01').text();
const hour02 = $('#hour02').text();
const hour03 = $('#hour03').text();
const hour04 = $('#hour04').text();
const hour05 = $('#hour05').text();
const hour06 = $('#hour06').text();
const hour07 = $('#hour07').text();
const hour08 = $('#hour08').text();
const hour09 = $('#hour09').text();
const hour10 = $('#hour10').text();




// Record event data to local storage
// If a save button is clicked
// Create a variable for the designated hour
// That is equal to the time and event entry for that hour
$('#btn01').on('click', function () {
     if ($('#event01').val()) {
    localStorage.removeItem('event01');
    }
    const hourOne = JSON.stringify(hour01);
    localStorage.setItem(hour01, $('#event01').val());
});

// Repeat for remaining hours on planner
$('#btn02').on('click', function () {
    if ($('#event02').val()) {
        localStorage.removeItem('event02');
    }
    const hourTwo = JSON.stringify(hour02);
    localStorage.setItem(hour02, $('#event02').val());
});

$('#btn03').on('click', function () {
    if ($('#event03').val()) {
        localStorage.removeItem('event03');
    }
    const hourThree = JSON.stringify(hour03);
    localStorage.setItem(hour03, $('#event03').val());
});

$('#btn04').on('click', function () {
    if ($('#event04').val()) {
        localStorage.removeItem('event04');
    }
    const hourFour = JSON.stringify(hour04);
         localStorage.setItem(hour04, $('#event04').val());
});

$('#btn05').on('click', function () {
    if ($('#event05').val()) {
        localStorage.removeItem('event05');
    }
    const hourFive = JSON.stringify(hour05);
          localStorage.setItem(hour05, $('#event05').val());
});

$('#btn06').on('click', function () {
    if ($('#event06').val()) {
        localStorage.removeItem('event06');
    }
    const hourSix = JSON.stringify(hour06);
          localStorage.setItem(hour06, $('#event06').val());
});

$('#btn07').on('click', function () {
    if ($('#event07').val()) {
       localStorage.removeItem('event07');
    }
    const hourSeven = JSON.stringify(hour07);
          localStorage.setItem(hour07, $('#event07').val());
});

$('#btn08').on('click', function () {
    if ($('#event08').val()) {
       localStorage.removeItem('event08');
    }
    const hourEight = JSON.stringify(hour08);
          localStorage.setItem(hour08, $('#event08').val());
});

$('#btn09').on('click', function () {
    if ($('#event09').val()) {
       localStorage.removeItem('event09');
    }
    const hourNine = JSON.stringify(hour09);
          localStorage.setItem(hour09, $('#event09').val());
});

$('#btn10').on('click', function () {
    if ($('#event10').val()) {
       localStorage.getItem('event10');
    }
    const hourTen = JSON.stringify(hour10);
    localStorage.setItem(hour10, $('#event10').val());
  
});

// --- TIME MANAGEMENT --- //

// Date Time Variables

let currentTime = moment().format('LT');
let currentTime24 = parseInt(moment().format('HH'));
let currentTimeInt = parseInt(currentTime);
let eventTimer;




// Apply color to time slot to indicate if the
// hour has past, is current, or coming up

eventHightlight();

function eventHightlight() {
    eventTimer = setInterval(eventHightlight, 1000);

    // Determine if the current time is within the planner's time span (8am - 5pm)
             if (currentTime24 >= 8 && currentTime24 <= 17) {

             for (let i = 1; i <= 10; i++) {
                 let currentHrInt = parseInt($('#time'+i).text());
            
             if (currentHrInt < 10) {
                 currentHrInt = currentHrInt + 12;
            };
           
             if (currentHrInt == currentTime24) {
               $('#text'+i).addClass('present');
                continue;
            }
            
             if (currentHrInt < currentTime24) {
               $('#text'+i).addClass('future');
            } else {
                $('#text'+i).addClass('present');
            };
        };

        // Clear the interval 
            } else {
              clearInterval(eventTimer);
           $('textarea').addClass('past');
    };
};
