// This is for classes
class Background {
    constructor(w, h) {
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = '../images/bg.png';
    }

    draw() {
        if(this.x < -canvas.width) {
            this.x = 0;
        }
        this.x -= 10;

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(
            this.image,
            this.x + this.width,
            this.y,
            this.width,
            this.height
        )
    }

    gameOver() {
        ctx.font = '80px Arial';
        ctx.fillText = ('Te moriste', 250, 200);
    }
}

class Flappy {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.vy = 2; // gravity
        this.userPull = 0; // gravity
        this.image = new Image();
        this.image.src = '../images/flappy.png';
    }

    draw() {
        // validar gravedad
        this.vy = this.vy + (gravity - this.userPull);
        if(this.y <= 0) {
            this.userPull = 0;
            this.y = 2;
            this.vy = 2;
        }

        if(this.y + this.height < canvas.height) {
            this.y += this.vy;
        }

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    collision(obstacle) {
        return (
            this.x < obstacle.x + obstacle.width && 
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y
        )
    }
}