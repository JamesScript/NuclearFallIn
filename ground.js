function Ground(x, y, w, h, skin) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.skin = skin;
    this.show = function() {
        // Normal ground - like grass but no green pigment, stoney
        if (this.skin === undefined || this.skin === 0) {
            for (var i = 0; i < this.w; i+= width * 0.05) {
                image(sprites.ground[2], this.x + i, this.y, width * 0.05, this.h);
            }
        }
        if (this.skin === 1) {
            for (var i = 0; i < this.w; i+= width * 0.05) {
                image(sprites.ground[1], this.x + i, this.y, width * 0.05, this.h);
            }
        }
        // Grass
        if (this.skin === 2) {
            for (var i = 0; i < this.w; i+= width * 0.05) {
                image(sprites.ground[0], this.x + i, this.y, width * 0.05, this.h);
            }
        }
    };
    this.update = function() {
        //Collision detection between character's feet and ground
        if (
            chr.y + chr.h >= this.y && //bottom of feet below or at top surface
            chr.y <= this.y + this.h && // head above bottom of ground (ceiling under)
            chr.x + chr.w >= this.x && // right side of chr right of most left point
            chr.x <= this.x + this.w // left side of chr left of most right point
        ) {
            // If character is above the top half of the ground (as opposed to jumping into it from below or side)
            if (chr.y + chr.h <= this.y + this.h/2) {
                // Switching this boolean to true automatically takes care of gravity and freefall damage - see Character function
                chr.grounded = true;
            }
            // If right side of character hits left side of ground
            if (
                chr.y + chr.h > this.y + this.h/3 &&
                chr.x + chr.w >= this.x &&
                chr.x + chr.w <= this.x + chr.w
            ) {
                chr.x -= width * 0.012;
                chr.grounded = false; // // Overrides above boolean change to stop clinging to sides
            }
            // If left side of character hits right side of ground
            if (
                chr.y + chr.h > this.y + this.h/3 &&
                chr.x <= this.x + this.w &&
                chr.x >= this.x + this.w - chr.w
            ) {
                chr.x += width * 0.012;
                chr.grounded = false; // Overrides above boolean change to stop clinging to sides
            }
            // If the chracter is sunk into the ground part way, bring him/her to the surface
            if (chr.y + chr.h > this.y + 1) {
                chr.y--;
            }
        }
        // Collision detection between chracter's head on bottom of ground
        if (
            chr.fallingSpeed < 1 &&
            chr.y <= this.y + this.h &&
            chr.y >= this.y /* + this.h - 8 */ &&
            chr.x + chr.w >= this.x &&
            chr.x <= this.x + this.w
        ) {
            chr.fallingSpeed = height * 0.002;
        }
        // Collision detection for enemies - similar to above
        for (var i = 0; i < enemies.length; i++) {
            if (
                enemies[i].y + enemies[i].h >= this.y &&
                enemies[i].y + enemies[i].h <= this.y + this.h &&
                enemies[i].x + enemies[i].w >= this.x &&
                enemies[i].x <= this.x + this.w
            ) {
                enemies[i].grounded = true;
                if (enemies[i].y + enemies[i].h > this.y + 1) {
                    enemies[i].y--;
                }
            }
        }
    };
}

function MovingGround(x, y, w, h, endX, endY, steps) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.startX = x;
    this.startY = y;
    this.endX = endX;
    this.endY = endY;
    this.steps = steps;
    this.stepsDone = 0;
    this.returning = false;
    this.lastMovementX = 0;
    this.lastMovementY = 0;
    this.frame = 0;
    this.show = function() {
        // fill(0);
        // rect(this.x, this.y, this.w, this.h);
        for (var i = 0; i < this.w; i+= width * 0.05) {
            if (this.frame < 5) {
                image(sprites.movingGround[0], this.x + i, this.y, width * 0.05, this.h);
            } else {
                image(sprites.movingGround[1], this.x + i, this.y, width * 0.05, this.h);
            }
        }
        this.frame++;
        if (this.frame >= 10) {
            this.frame = 0;
        }
    };
    this.update = function() {
        //Collision detection between character's feet and ground
        if (
            chr.y + chr.h >= this.y && //bottom of feet below or at top surface
            chr.y <= this.y + this.h && // head above bottom of ground (ceiling under)
            chr.x + chr.w >= this.x && // right side of chr right of most left point
            chr.x <= this.x + this.w // left side of chr left of most right point
        ) {
            // If character is above the top half of the ground (as opposed to jumping into it from below or side)
            if (chr.y + chr.h <= this.y + this.h/2) {
                // Switching this boolean to true automatically takes care of gravity and freefall damage - see Character function
                chr.grounded = true;
            }
            // If right side of character hits left side of ground
            if (
                chr.y + chr.h > this.y + chr.h * 0.7 &&
                chr.x + chr.w >= this.x &&
                chr.x + chr.w <= this.x + chr.w
            ) {
                chr.x -= width * 0.012;
                chr.ground = false; // Overrides above boolean change to stop clinging to sides
            }
            // If left side of character hits right side of ground
            if (
                chr.y + chr.h > this.y + chr.h * 0.7 &&
                chr.x <= this.x + this.w &&
                chr.x >= this.x + this.w - chr.w
            ) {
                chr.x += width * 0.012;
                chr.grounded = false; // Overrides above boolean change to stop clinging to sides
            }
            // If the chracter is sunk into the ground part way, bring him/her to the surface
            if (chr.y + chr.h > this.y + 1) {
                chr.y--;
            }
        }
        // Collision detection between chracter's head on bottom of ground
        if (
            chr.fallingSpeed < 1 &&
            chr.y <= this.y + this.h &&
            chr.y >= this.y /* + this.h - 8 */ &&
            chr.x + chr.w >= this.x &&
            chr.x <= this.x + this.w
        ) {
            chr.fallingSpeed = height * 0.002;
        }
        // Collision detection for enemies - similar to above
        // for (var i = 0; i < enemies.length; i++) {
        //     if (
        //         enemies[i].y + enemies[i].h >= this.y &&
        //         enemies[i].y + enemies[i].h <= this.y + this.h &&
        //         enemies[i].x + enemies[i].w >= this.x &&
        //         enemies[i].x <= this.x + this.w
        //     ) {
        //         enemies[i].grounded = true;
        //         if (enemies[i].y + enemies[i].h > this.y + 1) {
        //             enemies[i].y--;
        //         }
        //     }
        // }
    };
    this.move = function() {
        if (!this.returning) {
            if (this.x < this.endX) {
                this.x+= (1 / this.steps) * (this.endX - this.startX);
                this.lastMovementX = (1 / this.steps) * (this.endX - this.startX);
            }
            if (this.x > this.endX) {
                this.x-= (1 / this.steps) * (this.startX - this.endX);
                this.lastMovementX = -(1 / this.steps) * (this.startX - this.endX);
            }
            if (this.y < this.endY) {
                this.y+= (1 / this.steps) * (this.endY - this.startY);
                this.lastMovementY = (1 / this.steps) * (this.endY - this.startY);
            }
            if (this.y > this.endY) {
                this.y-= (1 / this.steps) * (this.startY - this.endY);
                this.lastMovementY = -(1 / this.steps) * (this.startY - this.endY);
            }
            this.stepsDone++;
            if (this.stepsDone >= this.steps - 1) {
                this.returning = true;
            }
        } else {
            if (this.x < this.startX) {
                this.x-= (1 / this.steps) * (this.endX - this.startX);
                this.lastMovementX = (1 / this.steps) * (this.startX - this.endX);
            }
            if (this.x > this.startX) {
                this.x+= (1 / this.steps) * (this.startX - this.endX);
                this.lastMovementX = -(1 / this.steps) * (this.endX - this.startX);
            }
            if (this.y < this.startY) {
                this.y-= (1 / this.steps) * (this.endY - this.startY);
                this.lastMovementY = (1 / this.steps) * (this.startY - this.endY);
            }
            if (this.y > this.startY) {
                this.y+= (1 / this.steps) * (this.startY - this.endY);
                this.lastMovementY = -(1 / this.steps) * (this.endY - this.startY);
            }
            this.stepsDone--;
            if (this.stepsDone <= 1) {
                this.returning = false;
            }
        }
        if ( // Move character with platform
        chr.y + chr.h >= this.y - chr.h / 3 && //bottom of feet below or at top surface
        chr.y <= this.y + this.h && // head above bottom of ground (ceiling under)
        chr.x + chr.w >= this.x && // right side of chr right of most left point
        chr.x <= this.x + this.w  // left side of chr left of most right point
        ) {
            chr.x += this.lastMovementX;
            chr.y += this.lastMovementY;
        }
    };
}

function Ice(x, y, w, h, strength) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.stage = 0; // how broken the ice is
    this.strength = strength;
    this.broken = false;
    this.show = function () {
        if (!this.broken) {
            for (var i = 0; i < this.w; i+= width * 0.05) {
                if (this.stage < this.strength * 0.25) {
                    image(sprites.ice[0], this.x + i, this.y, width * scl, this.h);
                } else if (this.stage >= this.strength * 0.25 && this.stage < this.strength * 0.5) {
                    image(sprites.ice[1], this.x + i, this.y, width * scl, this.h);
                } else if (this.stage >= this.strength * 0.5 && this.stage < this.strength * 0.75) {
                    image(sprites.ice[2], this.x + i, this.y, width * scl, this.h);
                } else if (this.stage >= this.strength * 0.75 && this.stage < this.strength) {
                    image(sprites.ice[3], this.x + i, this.y, width * scl, this.h);
                }
            }
        }
    };
    this.update = function() {
        if (!this.broken) {
            //Collision detection between character's feet and ground
            if (
                chr.y + chr.h >= this.y && //bottom of feet below or at top surface
                chr.y <= this.y + this.h && // head above bottom of ground (ceiling under)
                chr.x + chr.w >= this.x && // right side of chr right of most left point
                chr.x <= this.x + this.w // left side of chr left of most right point
            ) {
                // If character is above the top half of the ground (as opposed to jumping into it from below or side)
                if (chr.y + chr.h <= this.y + this.h/2) {
                    // Skid more
                    chr.skidFactor = 0.1;
                    // Damage the ice more if freefalling onto it
                    if (chr.freeFallTime > 30) {
                        this.stage += 10;
                    }
                    // Switching this boolean to true automatically takes care of gravity and freefall damage - see Character function
                    chr.grounded = true;
                    // Ice starts to break the more you stand on it
                    this.stage++;
                }
                // If right side of character hits left side of ground
                if (
                    chr.y + chr.h > this.y + this.h/3 &&
                    chr.x + chr.w >= this.x &&
                    chr.x + chr.w <= this.x + chr.w
                ) {
                    chr.x -= width * 0.012;
                    chr.grounded = false; // // Overrides above boolean change to stop clinging to sides
                }
                // If left side of character hits right side of ground
                if (
                    chr.y + chr.h > this.y + this.h/3 &&
                    chr.x <= this.x + this.w &&
                    chr.x >= this.x + this.w - chr.w
                ) {
                    chr.x += width * 0.012;
                    chr.grounded = false; // Overrides above boolean change to stop clinging to sides
                }
                // If the chracter is sunk into the ground part way, bring him/her to the surface
                if (chr.y + chr.h > this.y + 1) {
                    chr.y--;
                }
            }
            // Collision detection between chracter's head on bottom of ground
            if (
                chr.fallingSpeed < 1 &&
                chr.y <= this.y + this.h &&
                chr.y >= this.y /* + this.h - 8 */ &&
                chr.x + chr.w >= this.x &&
                chr.x <= this.x + this.w
            ) {
                chr.fallingSpeed = height * 0.002;
            }
            if (this.stage >= this.strength) {
                this.broken = true;
            }
        }
    }
}

function SolidIce(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.show = function () {
        for (var i = 0; i < this.w; i+= width * 0.05) {
            image(sprites.ice[4], this.x + i, this.y, width * scl, this.h);
        }
    };
    this.update = function() {
        //Collision detection between character's feet and ground
        if (
            chr.y + chr.h >= this.y && //bottom of feet below or at top surface
            chr.y <= this.y + this.h && // head above bottom of ground (ceiling under)
            chr.x + chr.w >= this.x && // right side of chr right of most left point
            chr.x <= this.x + this.w // left side of chr left of most right point
        ) {
            // If character is above the top half of the ground (as opposed to jumping into it from below or side)
            if (chr.y + chr.h <= this.y + this.h/2) {
                // Skid more
                chr.skidFactor = 0.1;
                // Switching this boolean to true automatically takes care of gravity and freefall damage - see Character function
                chr.grounded = true;
            }
            // If right side of character hits left side of ground
            if (
                chr.y + chr.h > this.y + this.h/3 &&
                chr.x + chr.w >= this.x &&
                chr.x + chr.w <= this.x + chr.w
            ) {
                chr.x -= width * 0.012;
                chr.grounded = false; // // Overrides above boolean change to stop clinging to sides
            }
            // If left side of character hits right side of ground
            if (
                chr.y + chr.h > this.y + this.h/3 &&
                chr.x <= this.x + this.w &&
                chr.x >= this.x + this.w - chr.w
            ) {
                chr.x += width * 0.012;
                chr.grounded = false; // Overrides above boolean change to stop clinging to sides
            }
            // If the chracter is sunk into the ground part way, bring him/her to the surface
            if (chr.y + chr.h > this.y + 1) {
                chr.y--;
            }
        }
        // Collision detection between chracter's head on bottom of ground
        if (
            chr.fallingSpeed < 1 &&
            chr.y <= this.y + this.h &&
            chr.y >= this.y /* + this.h - 8 */ &&
            chr.x + chr.w >= this.x &&
            chr.x <= this.x + this.w
        ) {
            chr.fallingSpeed = height * 0.002;
        }
    }
}

function Treadmill(x, y, w, h, dir) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dir = dir;
    this.show = function () {

    };
    this.update = function () {

    };
}