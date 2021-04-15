var listOfButtons = document.querySelectorAll("button");

for (i=0; i<listOfButtons.length; i++) {
  // i will be numbers of each elements
  //add eventlistener to all buttons
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var thisButtonInnerHTML = this.innerHTML;
    console.log(thisButtonInnerHTML);

    var thisButtonFirstClass = this.classList[0];
    console.log(thisButtonFirstClass);

    playSound(thisButtonInnerHTML, thisButtonFirstClass);

  });
}

function playSound(key, firstClass) {

  switch (key) {
    //mouse case
    case "sound 1":
      audio1.play();
      var buttonClass = document.querySelector("." + firstClass).classList;
      buttonClass.add("w-btn");
      buttonTimeOut(buttonClass);
      break;

    case "sound 2":
      audio2.play();
      document.querySelector("." + firstClass).classList.add("s-btn");
      break;

    case "sound 3":
      audio3.play();
      document.querySelector("." + firstClass).classList.add("a-btn");
      break;

    case "sound 4":
      audio4.play();
      document.querySelector("." + firstClass).classList.add("d-btn");
      break;

    case "w":
      audio1.play();
      break;
    case "s":
      audio2.play();
      break;
    case "a":
      audio3.play();
      break;
    case "d":
      audio4.play();
      break;
  }

}

var audio1 = new Audio("sound1.mp3");
var audio2 = new Audio("sound2.mp3");
var audio3 = new Audio("sound3.mp3");
var audio4 = new Audio("sound4.mp3");

document.addEventListener("keypress", function(e) {
  playSound(e.key);
});

function buttonTimeOut(buttonClass) {
  setTimeout(function() {
    buttonClass.remove("w-btn");
  }, 3000);
}
