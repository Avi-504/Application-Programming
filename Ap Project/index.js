var alldrum = document.querySelectorAll(".drum");

for (var i = 0; i < alldrum.length; i++) {
  alldrum[i].addEventListener('click', function()
{
  playsound(this.innerHTML);
  buttonchange(this.innerHTML);
})
}

document.addEventListener("keydown",function(e)//keypress is depricated so use keydown(MDN Docs)
{
  playsound(e.key);
  buttonchange(e.key);
})

function playsound(key) {
  switch (key) {
    case 'w':
      tom1audio = new Audio("sounds/tom-1.mp3");
      tom1audio.play();
      break;
    case 'a':
      tom2audio = new Audio("sounds/tom-2.mp3");
      tom2audio.play();
      break;
    case 's':
      tom3audio = new Audio("sounds/tom-3.mp3");
      tom3audio.play();
      break;
    case 'd':
      tom4audio = new Audio("sounds/tom-4.mp3");
      tom4audio.play();
      break;
    case 'j':
      crashaudio = new Audio("sounds/crash.mp3");
      crashaudio.play();
      break;
    case 'k':
      kickbassaudio = new Audio("sounds/kick-bass.mp3");
      kickbassaudio.play();
      break;
    case 'l':
      snareaudio = new Audio("sounds/snare.mp3");
      snareaudio.play();
      break;
      default:console.log(this);
      break;
  }
}

function buttonchange(key)
{
  document.querySelector("."+key).classList.add("pressed");// . is added for getting class

  setTimeout(function () {
    document.querySelector("."+key).classList.remove("pressed"); //to remove the pressed class afer 100 ms
  },100);
}
