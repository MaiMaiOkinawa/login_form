window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //If you type non-resitered keyCode, it will not run anything
  if (!audio) return;

  audio.currenTime = 0;
  audio.play();
  key.classList.add('playing');
  //Remove class .playing
  setTimeout(() => {
    key.classList.remove('playing');
  }, 100);
}
