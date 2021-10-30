// This is for classes
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d')

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
        this.x--;
        
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

    }
}