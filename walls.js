
function Wall(x, y, w, h, defaultBounce) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    //defaultBounce can be left undefined
    this.defaultBounce = defaultBounce;
    this.bounceMultiplier = 1;
    this.show = function() {
        for (var i = 0; i < this.w; i+= width * 0.05) {
            for (var j = 0; j < this.h; j+= height * 0.05) {
                image(sprites.walls[0], this.x + i, this.y + j, width * 0.05, height * 0.05);
            }
        }
    };
    this.update = function() {
        // Default - increases if inside wall to stop character going through
        this.bounceMultiplier = 1;
        //Collision detection with character
        if (
            chr.x <= this.x + this.w &&
            chr.x + chr.w >= this.x &&
            chr.y + chr.h >= this.y &&
            chr.y <= this.y + this.h
        ) {
            // If the chracter is sunk into the wall part way, bring him/her to the surface
            if (chr.y + chr.h < this.y + chr.h/3 && chr.y + chr.h > this.y + 1) {
                chr.y --;
            }
            // To prevent bugs - if character is actually completely inside the wall, assess defaultBounce
            if (
                chr.x + chr.w < this.x + this.w &&
                chr.x > this.x &&
                chr.y + chr.h < this.y + this.h &&
                chr.y > this.y
            ) {
                // console.log("INSIDE WALL");
                if (this.defaultBounce === undefined) {
                    this.bounceMultiplier = 4;
                } else if (this.defaultBounce === "left") {
                    chr.x = this.x - chr.w * 1.5;
                } else if (this.defaultBounce === "right") {
                    chr.x = this.x + this.w + chr.w * 0.5;
                }
            }
            // Collision detection between chracter's head on bottom of ground
            if (
                chr.fallingSpeed < 1 &&
                chr.y <= this.y + this.h &&
                chr.y >= this.y &&
                chr.x + chr.w >= this.x &&
                chr.x <= this.x + this.w
            ) {
                chr.fallingSpeed = height * 0.002;
            }
            // If character is above the tip of wall (as opposed to jumping into it from below or side)
            if (chr.y + chr.h <= this.y + chr.h/3) {
                // Switching this boolean to true automatically takes care of gravity and freefall damage - see Character function
                chr.grounded = true;
            } else {
                // If character is on the right, push to the right
                if (chr.x + chr.w / 2 >= this.x + this.w / 2) {
                    chr.x += (width * 0.012) * this.bounceMultiplier;
                    // console.log("Wall: push right");
                } else {
                    chr.x -= (width * 0.012) * this.bounceMultiplier;
                    // console.log("Wall: push left");
                }
            }
        }
    };
}