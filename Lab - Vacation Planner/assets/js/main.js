var name = window.prompt('Hello! Please enter your name');

var greeting = document.getElementById('greeting');

greeting.innerHTML += ", " + name;

var enterDays = document.getElementById('enterDays');

enterDays.onclick = calculateDays;

function calculateDays() {
  var daysInput = document.getElementById('days');
  var daysMessage = document.getElementById("daysMessage");
  var days = daysInput.value;
  if (days < 4) {
    daysMessage.innerHTML = "Short trips are always worth it!";
  } else if (days < 7) {
    daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
  } else {
    daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!"
  }

  var hours = days * 24;
  var minutes = hours * 60;
  var seconds = minutes * 60;

  var hoursMessage = document.getElementById("hoursMessage");
  var minutesMessage = document.getElementById("minutesMessage");
  var secondsMessage = document.getElementById("secondsMessage");

  hoursMessage.innerHTML = "That means you'll be traveling for " + hours + " hours.";
  minutesMessage.innerHTML = "Which means you'll be traveling for " + minutes + " minutes.";
  secondsMessage.innerHTML = "Which means you'll be traveling for " + seconds + " seconds.";

  var timingNext = document.getElementById('timingNext');
  timingNext.removeAttribute('hidden');

  timingNext.onclick = function () {
    document.getElementById('budgetSection').removeAttribute('hidden');
  }
}

var enterBudget = document.getElementById('enterBudget');
enterBudget.onclick = calculateBudget;

function calculateBudget(){
  var daysInput = document.getElementById('days');
  var days = daysInput.value;
  var tripBudgetInput = document.getElementById('tripBudget');
  var tripBudget = tripBudgetInput.value;

  var tripExchange = tripBudget * 50.56;
  var dailyExchange = tripExchange / days;
  var exchange10 = 50.56 * 10;
  var exchange500 = 50.56 * 500;

  var tripExchangeMessage = document.getElementById("tripExchangeMsg");
  var dailyExchangeMessage = document.getElementById("dailyExchangeMsg");
  var exchange10Msg = document.getElementById("exchange10Msg");
  var exchange500Msg = document.getElementById("exchange500Msg");

  tripExchangeMsg.innerHTML = "That means you'll need " + tripExchange + " PHP for your trip.";
  dailyExchangeMsg.innerHTML = "That means you can spend " + dailyExchange + " PHP per day.";
  exchange10Msg.innerHTML = "You'll need " + exchange10 + " PHP for an item that would cost you 10 USD.";
  exchange500Msg.innerHTML = "You'll need " + exchange500 + " PHP for an item that would cost you 500 USD.";
}

var images = ["assets/images/philippines.jpg", "assets/images/vietnam.jpg", "assets/images/japan.jpg", "assets/images/thailand.jpg" ];

var currentImage = 0;

setInterval(changeImage, 3000);

function changeImage(){
    currentImage++;
    if(currentImage > images.length - 1){
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}
