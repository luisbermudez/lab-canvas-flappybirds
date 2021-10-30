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
    // audio.play();
    requestId = requestAnimationFrame(update);
  }

  function gameOver() {
    audio.pause();
    bg.gameOver();
    requestId = undefined;
  }

  function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bg.draw();
    flappy.draw();
    generatePipes();
    drawPipes();
    ctx.font = '50px Arial';
    ctx.fillText(`Score: ${score}`, 750, 50);

    if(flappy.y + flappy.height > canvas.height) {
      gameOver();
    }

    if(requestId) {
      requestId = requestAnimationFrame(update);
    }
  }

  function generatePipes() {
    if( !(frames % 160 === 0) ) {
      return true;
    }


    const height = Math.floor(Math.random() * (canvas.height * 0.6)) + 30 // Math.floor(Math.random() * (max - min)) + min 
    const pipe1 = new Pipe('top', canvas.width, 0, height);
    const pipe2 = new Pipe('bottom', canvas.width, height + 120, canvas.height - 120 - height);

    pipes.push(pipe1, pipe2);
  }

  function drawPipes() {
    pipes.forEach((pipe, index_pipe) => {

      if(pipe.x < -30) {
        score++;
        pipes.splice(index_pipe, 1);
      }
      if(pipe.x + pipe.width === 80) {
        score += .5;
      }
      pipe.draw();
      if(flappy.collision(pipe)) {
        gameOver();
      }
    })
  }

  function resetGame() {
    if(requestId) {
      return true;
    }

    score = 0;
    flappy.y = 40;
    flappy.userPull = 0;
    flappy.vy = 2;
    startGame();
  }

  addEventListener('keydown', (e)=> {
    if(e.keyCode === 32) {
      flappy.userPull = 0.3;
    }
    if(e.keyCode === 82) {
      resetGame();
    }
  });

  addEventListener('keyup', (e)=> {
    if(e.keyCode === 32) {
      flappy.userPull = 0;
    }
  });
};
