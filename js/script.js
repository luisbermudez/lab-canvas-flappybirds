window.onload = function() {

  const bg = new Background(canvas.width, canvas.height);
  const flappy = new Flappy( 70, 40, 30, 30);

  document.getElementById("start-button").onclick = function() {
    if(requestId) {
      return true;
    }
    startGame();
  };

  function startGame() {
    requestId = requestAnimationFrame(update);
  }

  function gameOver() {

  }

  function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bg.draw();
    flappy.draw();

    if(requestId) {
      requestId = requestAnimationFrame(update);
    }
  }

  addEventListener('keydown', (e)=> {
    if(e.keyCode === 32) {
      flappy.userPull = 0.3;
    }
  });

  addEventListener('keyup', (e)=> {
    if(e.keyCode === 32) {
      flappy.userPull = 0;
    }
  });
};
