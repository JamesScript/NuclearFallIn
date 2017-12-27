function Turret(x, y, w, h, dir, fireSpeed) {
    this.x = x;
    this.y = y;
    this.w = width * 0.05;
    this.h = height * 0.05;
    this.dir = dir;
    this.fireSpeed = fireSpeed;
    this.bullets = [];
    this.frame = 0;
    this.show = function() {
        for (var i = this.bullets.length - 1; i > 0; i--) {
            this.bullets[i].show();
            this.bullets[i].update();
            // DELETE BULLETS
            if ((this.bullets[i].x <= 0 && this.dir < 0) || (this.bullets[i].x >= width - this.bullets[i].w && this.dir > 0))  {
                this.bullets.splice(i, 1);
            }
            // if bullet hits character
            else if (
                chr.x + chr.w * 0.8 > this.bullets[i].x && // Right of chr is past left of bullet
                chr.x + chr.w * 0.2 < this.bullets[i].x + this.bullets[i].w && // Left of chr is past right of bullet
                chr.y + chr.h > this.bullets[i].y && // Feet of chr below top of bullet
                chr.y < this.bullets[i].y + this.bullets[i].w // Top of chr above bottom of bullet, bullet's height = its width
            ) {
                chr.hp -= 12;
                this.bullets.splice(i, 1);
            }
        }
        // fill(125);
        // rect(this.x, this.y, this.w, this.h);
        if (this.dir < 0) {
            image(sprites.turrets[0], this.x, this.y, this.w, this.h);
        } else {
            image(sprites.turrets[1], this.x, this.y, this.w, this.h);
        }
    };
    this.update = function() {
        if (this.frame === 0) {
            this.bullets.push(new Bullet(this.x + width * 0.02, this.y + height * 0.02, this.dir));
        }
        this.frame++;
        if (this.frame >= this.fireSpeed) {
            this.frame = 0;
        }

        // COLLISION DETECTION COPIED FROM GROUND CONSTRUCTOR

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
    };
}

function Bullet(x, y, dir) {
    this.x = x;
    this.y = y;
    this.w = width * 0.01;
    this.dir = dir;
    this.show = function() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.w);
    };
    this.update = function() {
        this.x += this.dir;
    }
}