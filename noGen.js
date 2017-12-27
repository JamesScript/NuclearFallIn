/**
 * Created by James on 22/12/2017.
 */
// For finished project have the canvas ratio be 6:5, based on dimensions of window
const cnv = {
    x: 600,
    y: 500
};
var chr; // Protagnoist
var depthGenerated;
var ground = [];
var walls = [];
var lava = [];
var enemies = [];
var fl; // Formation library

function setup() {
    createCanvas(cnv.x, cnv.y);
    fl = new FormationLibrary();
    chr = new Character(width / 2, 0);
    depthGenerated = height * 0.5;
    // The surface where the game begins
    ground[0] = new Ground(
        0,
        height * 0.5,
        width * 0.3,
        height * 0.05
    );
    ground[1] = new Ground(
        width * 0.45,
        height * 0.5,
        width * 0.55,
        height * 0.05
    );
    fl.form1(depthGenerated);
    fl.form2(depthGenerated);
    fl.form3(depthGenerated);
}

function draw() {
    push();
    translate(0, -chr.y + height / 2);
    background(102, 50, 0);
    sky();
    chr.show();
    chr.controls();
    chr.update();
    chr.grounded = false; // This is here as a default which gets overridden in ground[i].update(); if standing on ground

    for (var i = 0; i < enemies.length; i++) {
        enemies[i].show();
        enemies[i].update();
        enemies[i].grounded = false;
    }

    for (var i = 0; i < walls.length; i++) {
        walls[i].show();
        walls[i].update();
    }

    for (var i = 0; i < lava.length; i++) {
        lava[i].show();
        lava[i].update();
    }

    for (var i = 0; i < ground.length; i++) {
        ground[i].show();
        ground[i].update();
    }
    pop();
    //Anything under this pop will appear on the canvas as normal and not in relation to the chracter
    fill(255);
    textSize(20);
    text("HP = " + chr.hp, width * 0.1, 20);
    text("Freefall = " + chr.freeFallTime, width * 0.3, 20);
    text("chr.x = " + floor(chr.x), width * 0.55, 20);
    text("chr.y = " + floor(chr.y), width * 0.75, 20);
    text("Depth Generated = " + depthGenerated, width * 0.1, 50);
    // Delete objects that are off the screen
    delObjects();
    //formGen();
}

function Character(x, y) {
    this.x = x;
    this.y = y;
    this.w = width / 30;
    this.h = height / 15;
    this.xSpeed = 0.008; // in relation to width of canvas
    this.fallingSpeed = 0;
    this.freeFallTime = 0;
    this.hp = 100;
    this.grounded = false;
    this.show = function() {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    };
    this.update = function() {
        // Unless chracter is on the ground, fall. Falling speed increases as it approaches freefall speed
        if (!this.grounded) {
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
        this.y += this.fallingSpeed;
        this.x = constrain(this.x, 0, width - chr.w);
    };
    this.controls = function() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= width * this.xSpeed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += width * this.xSpeed;
        }
        if (keyIsDown(UP_ARROW) || keyIsDown(32)) {
            if (this.grounded) {
                this.fallingSpeed = -height * 0.016;
            }
        }
    };
}

function Ground(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.show = function() {
        fill(0);
        rect(this.x, this.y, this.w, this.h);
    };
    this.update = function() {
        //Collision detection between chracter's feet and ground
        if (
            chr.y + chr.h >= this.y &&
            chr.y + chr.h <= this.y + this.h &&
            chr.x + chr.w >= this.x &&
            chr.x <= this.x + this.w
        ) {
            chr.grounded = true;
            // If the chracter is sunk into the ground part way, bring him/her to the surface
            if (chr.y + chr.h > this.y + 1) {
                chr.y--;
            }
        }
        // Collision detection between chracter's head on bottom of ground
        if (
            chr.fallingSpeed < 1 &&
            chr.y <= this.y + this.h &&
            chr.y >= this.y + this.h - 8 &&
            chr.x + chr.w >= this.x &&
            chr.x <= this.x + this.w
        ) {
            chr.fallingSpeed = 1;
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

function Wall(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.show = function() {
        fill(64);
        rect(this.x, this.y, this.w, this.h);
    };
    this.update = function() {
        //Collision detection with character
        if (
            chr.x <= this.x + this.w &&
            chr.x + chr.w >= this.x &&
            chr.y + chr.h >= this.y &&
            chr.y <= this.y + this.h
        ) {
            // If character is on the right, push to the right
            if (chr.x + chr.w / 2 >= this.x + this.w / 2) {
                chr.x += width * 0.03;
            } else {
                chr.x -= width * 0.03;
            }
        }
    };
}

function Lava(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.show = function() {
        stroke(255, 153, 51);
        fill(200, 0, 0);
        rect(this.x, this.y, this.w, this.h);
        stroke(0);
    };
    this.update = function() {
        //Collision detection with character
        if (
            chr.x <= this.x + this.w &&
            chr.x + chr.w >= this.x &&
            chr.y + chr.h >= this.y &&
            chr.y <= this.y + this.h
        ) {
            // Can't just say chr.grounded = true here because it checks ground[i] afterwards, this is easiest way I can tell albiet a little messy.
            if (chr.freeFallTime > 80) {
                chr.hp -= (chr.freeFallTime - 80);
            }
            chr.freeFallTime = 0;
            chr.hp-= 10;
            chr.fallingSpeed = -height * 0.02;
        }
    };
}

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

function FormationLibrary() {
    // Note: Make all forms at least a bit bigger than height so it's easier to generate new blocks
    //FORM 1 - very easy
    this.form1 = function(startY) {
        walls.push(new Wall(width * 0.1, startY, width * 0.05, height * 0.4));
        ground.push(
            new Ground(width * 0.1, startY + height * 0.4, width * 0.3, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.4, startY + height * 0.7, width * 0.2, height * 0.1)
        );
        lava.push(new Lava(0, startY + height * 0.75, width * 0.45, height * 0.049));
        ground.push(
            new Ground(width * 0.7, startY + height * 1.1, width * 0.2, height * 0.05)
        );
        walls.push(new Wall(width * 0.85, startY, width * 0.05, height * 1.1));
        depthGenerated += height * 1.3;
    };
    //FORM 2 - fairly easy
    this.form2 = function(startY) {
        ground.push(
            new Ground(width * 0.4, startY, width * 0.2, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.6, startY, width * 0.4, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.2, startY + height * 0.4, width * 0.1, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.45, width * 0.6, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.75, startY + height * 0.5, width * 0.08, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.6, startY + height * 0.7, width * 0.06, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.4, startY + height * 0.9, width * 0.06, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.1, startY + height * 1.2, width * 0.04, height * 0.05)
        );
        depthGenerated += height * 1.5;
    }
    //FORM 3 - hard
    this.form3 = function(startY) {
        ground.push(
            new Ground(0, startY, width * 0.4, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.5, startY, width * 0.5, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.1, width * 0.4, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.51, startY + height * 0.1, width * 0.49, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.15, width * 0.41, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.53, startY + height * 0.15, width * 0.49, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.2, width * 0.43, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.55, startY + height * 0.2, width * 0.45, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.25, width * 0.44, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.58, startY + height * 0.25, width * 0.42, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.3, width * 0.43, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.62, startY + height * 0.3, width * 0.38, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.35, width * 0.45, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.65, startY + height * 0.35, width * 0.35, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.4, width * 0.47, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.68, startY + height * 0.4, width * 0.32, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.45, width * 0.51, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.75, startY + height * 0.45, width * 0.25, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.5, width * 0.53, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.79, startY + height * 0.5, width * 0.21, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.55, width * 0.55, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.82, startY + height * 0.55, width * 0.18, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.4, startY + height * 0.7, width * 0.6, height * 0.05)
        );
        ground.push(
            new Ground(0, startY + height * 0.85, width * 0.6, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.45, startY + height * 1.1, width * 0.55, height * 0.05)
        );
        depthGenerated += height * 1.4;
    }
}

function delObjects() {
    for (var i = 0; i < ground.length; i++) {
        if (ground[i].y + ground[i].h < chr.y - height) {
            ground.splice(i, 1);
        }
    }
    for (var i = 0; i < walls.length; i++) {
        if (walls[i].y + walls[i].h < chr.y - height) {
            walls.splice(i, 1);
        }
    }
    for (var i = 0; i < lava.length; i++) {
        if (lava[i].y + lava[i].h < chr.y - height) {
            lava.splice(i, 1);
        }
    }
}

function formGen() {
    if (chr.y > depthGenerated - height) {
        var rnd = floor(random(2)); // total number of forms
        switch (rnd) {
            case 0:
                fl.form1(depthGenerated);
                break;
            case 1:
                fl.form2(depthGenerated);
        }
    }
}

function sky() {
    noStroke();
    fill(173, 216, 230);
    rect(0, -height * 0.5, width, height);
    stroke(0);
}