function Character(x, y) {
    this.x = x;
    this.y = y;
    this.w = width / 30;
    this.h = height / 15;
    this.xSpeed = 0.008; // in relation to width of canvas
    this.skidFactor = 1; // default skid on ground, changes on ice
    this.skidLeft = 0;
    this.skidStart = false;
    this.fallingSpeed = 0;
    this.freeFallTime = 0;
    this.hp = 100;
    this.grounded = false;
    this.lastDirection = "left";
    this.frame = 3; // still
    // TempInvincible: When character takes damage, don't take damage for a few frames. 0 = false, 5 = start
    this.tempInvincible = 0;
    // ffCounter: Five Frame counter - useful for seeing where character was five frames ago
    // this.ffCounter = 5;
    this.show = function() {
        // fill(255);
        // rect(this.x, this.y, this.w, this.h);
        if (this.lastDirection === "left") {
            if (keyIsDown(LEFT_ARROW)) {
                this.frame++;
                if (this.frame >= 4 && this.frame < 8) {
                    image(sprites.chr[1], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 8 && this.frame < 12) {
                    image(sprites.chr[2], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 12 && this.frame < 16) {
                    image(sprites.chr[1], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 16 && this.frame < 20) {
                    image(sprites.chr[0], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 20 && this.frame < 24) {
                    image(sprites.chr[3], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 24 && this.frame < 28) {
                    image(sprites.chr[4], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 28 && this.frame < 32) {
                    image(sprites.chr[3], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 32) {
                    image(sprites.chr[0], this.x, this.y, this.w, this.h);
                    if (this.frame >= 36) {
                        this.frame = 4;
                    }
                }
            } else {
                image(sprites.chr[0], this.x, this.y, this.w, this.h);
            }
        }
        if (this.lastDirection === "right") {
            if (keyIsDown(RIGHT_ARROW)) {
                this.frame++;
                if (this.frame >= 4 && this.frame < 8) {
                    image(sprites.chr[6], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 8 && this.frame < 12) {
                    image(sprites.chr[7], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 12 && this.frame < 16) {
                    image(sprites.chr[6], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 16 && this.frame < 20) {
                    image(sprites.chr[5], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 20 && this.frame < 24) {
                    image(sprites.chr[8], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 24 && this.frame < 28) {
                    image(sprites.chr[9], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 28 && this.frame < 32) {
                    image(sprites.chr[8], this.x, this.y, this.w, this.h);
                }
                if (this.frame >= 32) {
                    image(sprites.chr[5], this.x, this.y, this.w, this.h);
                    if (this.frame >= 36) {
                        this.frame = 4;
                    }
                }
            } else {
                image(sprites.chr[5], this.x, this.y, this.w, this.h);
            }
        }
    };
    this.update = function() {
        // Unless chracter is on the ground, fall. Falling speed increases as it approaches freefall speed
        if (!this.grounded) {
            this.skidFactor = 1;
            // If fallingSpeed is less than freefall speed
            if (this.fallingSpeed < height * 0.012) {
                this.fallingSpeed += height * 0.0006;
            } else {
                this.freeFallTime++;
            }
        } else {
            // If actually falling, stop when hit the ground. If statement needed so jumping isn't prevented
            if (this.fallingSpeed > 0) {
                if (this.freeFallTime > 80) {
                    this.hp -= (this.freeFallTime - 80);
                }
                this.fallingSpeed = 0;
                this.freeFallTime = 0;
            }
        }
        //Constrain falling speed to freefall time to avoid falling through or into objects
        this.fallingSpeed = constrain(this.fallingSpeed, -height, height * 0.012);
        this.y += this.fallingSpeed;
        this.x = constrain(this.x, 0, width - chr.w);

        // Temporary invincibility when damaged - to make sure the game isn't too evil
        if (this.tempInvincible > 0) {
            this.tempInvincible--;
        }

        // Skidding
        if (this.skidLeft > 0) {
            if (this.lastDirection === "left") {
                this.x -= this.skidLeft;
            }
            if (this.lastDirection === "right") {
                this.x += this.skidLeft;
            }
            this.skidLeft-= this.skidFactor;
        }

        // this.ffCounter--;
        // if (this.ffCounter < 0) {
        //     this.ffCounter = 5;
        // }
    };
    this.controls = function() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= width * this.xSpeed;
            this.lastDirection = "left";
            this.skidStart = true;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += width * this.xSpeed;
            this.lastDirection = "right";
            this.skidStart = true;
        }
        if (!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW)) {
            this.frame = 3;
            if (this.skidStart) {
                this.skidLeft = 5;
                this.skidStart = false;
            }
        }
        if (keyIsDown(UP_ARROW) || keyIsDown(32)) {
            if (this.grounded) {
                this.freeFallTime = 0;
                this.fallingSpeed = -height * 0.016;
            }
        }
    };
}
