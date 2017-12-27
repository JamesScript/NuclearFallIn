function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.w = cnv.x / 30;
    this.h = cnv.y / 15;
    this.fallingSpeed = 0;
    this.xSpeed = 4;
    this.grounded = false;
    this.show = function() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.w, this.h);
    };
    this.update = function() {
        if (!this.grounded) {
            if (this.fallingSpeed < 6) {
                this.fallingSpeed += 0.3;
            }
        } else {
            if (this.fallingSpeed > 0) {
                this.fallingSpeed = 0;
            }
        }
        this.y += this.fallingSpeed;
        this.x += this.xSpeed;
        if (this.x >= width - this.w || this.x <= 0) {
            this.xSpeed *= -1;
        }
    };
}