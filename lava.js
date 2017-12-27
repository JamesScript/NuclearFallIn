function Lava(x, y, w, h, skin) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.skin = skin;
    this.bouncing = false;
    this.frame = 0;
    this.show = function() {
        if (this.skin === 0 || this.skin === undefined) {
            for (var i = 0; i < this.w; i+= width * 0.025) {
                for (var j = 0; j < this.h; j+= height * 0.025) {
                    if (this.frame < 4) {
                        image(sprites.lava[0], this.x + i, this.y + j, width * 0.025, height * 0.025);
                    } else if (this.frame < 8) {
                        image(sprites.lava[1], this.x + i, this.y + j, width * 0.025, height * 0.025);
                    } else if (this.frame < 12) {
                        image(sprites.lava[2], this.x + i, this.y + j, width * 0.025, height * 0.025);
                    } else if (this.frame < 16) {
                        image(sprites.lava[3], this.x + i, this.y + j, width * 0.025, height * 0.025);
                    }
                }
            }
            this.frame++;
            if (this.frame >= 16) {
                this.frame = 0;
            }
        }
        if (this.skin === 1) {
            for (var i = 0; i < this.w; i+= width * 0.05) {
                image(sprites.lava[4], this.x + i, this.y, width * scl, height * scl);
            }
        }
    };
    this.update = function() {
        this.bouncing = false; // default, to be overridden below - if not, slow rise out of lava
        //Collision detection with character
        if (
            chr.x <= this.x + this.w && // left side of chr is left of rightest point of lava
            chr.x + chr.w >= this.x && // right side of chr is right of leftest point of lava
            chr.y + chr.h >= this.y && // feet of chr is at or below top of lava
            chr.y <= this.y + this.h // head of chr is above the bottom of lava
        ) {
            // Can't just say chr.grounded = true here because it checks ground[i] afterwards, this is easiest way I can tell albiet a little messy.
            if (chr.freeFallTime > 80) {
                chr.hp -= (chr.freeFallTime - 80);
            }
            chr.freeFallTime = 0;
            // Damage the lava does unless temporarily invincible
            if (chr.tempInvincible === 0) {
                chr.hp-= 10;
                chr.tempInvincible = 30;
            }
            // If falling onto lava, bounce up
            if (chr.y + chr.h <= this.y + chr.h / 6) {
                chr.fallingSpeed = -height * 0.012;
                this.bouncing = true;
                // console.log("Lava: bounce up");
            }
            // If right side of character hits left side of lava AND character's feet are below top part of lava (by sixth of chr's height)
            if (chr.x + chr.w >= this.x && chr.x + chr.w <= this.x + chr.w * 1.5 && chr.y + chr.h > this.y + chr.h / 6) {
                chr.x -= width * 0.016;
                this.bouncing = true;
                // console.log("Lava: push left");
            }
            // If left side of character hits right side of lava AND character's feet are below top part of lava (by sixth of chr's height)
            if (chr.x <= this.x + this.w && chr.x >= this.x + this.w - chr.w * 1.5 && chr.y + chr.h > this.y + chr.h / 6) {
                chr.x += width * 0.016;
                this.bouncing = true;
                // console.log("Lava: push right");
            }
            // If character's head hits the bottom of lava
            if (chr.y > this.y + this.h - chr.h / 3) {
                chr.y += height * 0.012;
                chr.fallingSpeed = height * 0.002;
                this.bouncing = true;
                // console.log("Lava: push down");
            }
            // If not being bounced off one of the edges, i.e. if inside, rise out of the lava. Slightly faster than falling speed
            if (!this.bouncing) {
                chr.y -= height * 0.016;
                // console.log("Lava: slow rise");
            }
            /*
            // If the character is sunk into the lava part way, but higher than the "bottom" that bounces the character down
            if (chr.y + chr.h > this.y + this.h / 3 && chr.y < this.y + this.h + chr/6) {
                chr.y--;
                console.log("Lava: slow rise");
            }
            */
        }
    };
}
