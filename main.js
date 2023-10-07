ar intervalId;

function find() {
  var a = document.getElementsByClassName('public_submit');
  var b = document.getElementsByClassName('plyr__controls__item plyr__control');
  if (a.length > 0) {
    a[0].click();
  }
  if (b[0].getAttribute("aria-pressed")=='false') {
    b[0].click();
  }
}
function startLoop() {
  intervalId = setInterval(find, 1);
}

startLoop();
