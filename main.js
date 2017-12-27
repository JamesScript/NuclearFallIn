// For finished project have the canvas ratio be 6:5, based on dimensions of window
const cnv = {
    x: 600,
    y: 500
};
const scl = 0.05;
var gameStarted = false;
var gameOver = false;
var chr; // Protagnoist
var finalScore;
var radiation;
var depthGenerated;
var bgDepthGen;
var parallax = 0.9;
var lastFormation = 0;
var ground = [];
var movingGround = [];
var walls = [];
var lava = [];
var turrets = [];
var enemies = [];
var fl; // Formation library
var bg = [];
var spamStop = 0;
var retroFont;
var sprites = {
    background: [],
    chr: [],
    ground: [],
    ice: [],
    movingGround: [],
    walls: [],
    lava: [],
    turrets: [],
    surface: [],
    menu: []
};

function preload() {
    sprites.background[0] = loadImage("background-3.png");
    sprites.background[1] = loadImage("background-4.png");
    sprites.background[2] = loadImage("background-5.png");
    sprites.background[3] = loadImage("background-6.png");
    sprites.background[4] = loadImage("background-3 2.png");
    sprites.background[5] = loadImage("background-4 2.png");
    sprites.background[6] = loadImage("background-5 2.png");
    sprites.background[7] = loadImage("background-6 2.png");
    sprites.chr[0] = loadImage("chr-1.png");
    sprites.chr[1] = loadImage("chr-2.png");
    sprites.chr[2] = loadImage("chr-3.png");
    sprites.chr[3] = loadImage("chr-4.png");
    sprites.chr[4] = loadImage("chr-5.png");
    sprites.chr[5] = loadImage("chr-R1.png");
    sprites.chr[6] = loadImage("chr-R2.png");
    sprites.chr[7] = loadImage("chr-R3.png");
    sprites.chr[8] = loadImage("chr-R4.png");
    sprites.chr[9] = loadImage("chr-R5.png");
    sprites.ground[0] = loadImage("ground1.png");
    sprites.ground[1] = loadImage("ground2.png");
    sprites.ground[2] = loadImage("ground3.png");
    sprites.ice[0] = loadImage("ice-1.png");
    sprites.ice[1] = loadImage("ice-2.png");
    sprites.ice[2] = loadImage("ice-3.png");
    sprites.ice[3] = loadImage("ice-4.png");
    sprites.ice[4] = loadImage("ice-5.png"); // Solid ice
    sprites.movingGround[0] = loadImage("movingGround-1.png");
    sprites.movingGround[1] = loadImage("movingGround-2.png");
    sprites.walls[0] = loadImage("wall.png");
    sprites.lava[0] = loadImage("lava-1.png");
    sprites.lava[1] = loadImage("lava-2.png");
    sprites.lava[2] = loadImage("lava-3.png");
    sprites.lava[3] = loadImage("lava-4.png");
    sprites.lava[4] = loadImage("spikes-1.png"); // spikes
    sprites.turrets[0] = loadImage("turretL.png");
    sprites.turrets[1] = loadImage("turretR.png");
    sprites.surface[0] = loadImage("house.png");
    sprites.surface[1] = loadImage("startingShot.png");
    sprites.menu[0] = loadImage("rads.png");
    retroFont = loadFont('manaspace.ttf');
}

function setup() {
    createCanvas(cnv.x, cnv.y);
    ellipseMode(CORNER); // FOR MANAGING BULLETS EASIER, WILL NOT BE NEEDED WHEN SPRITES ARE MADE
    fl = new FormationLibrary();
    textFont(retroFont);
}

function draw() {
    if (gameStarted) {
        commenceGame();
        if (chr.hp <= 0) {
            finalScore = (Math.floor(chr.y / (height * 0.05)) - 8) - chr.freeFallTime;
            gameOver = true;
            gameStarted = false;
            ground = [];
            movingGround = [];
            walls = [];
            lava = [];
            turrets = [];
            enemies = [];
        }
    } else if (gameOver) {
        gameOverScreen();
    } else {
        gameMenu();
    }
    if (spamStop > 0) {
        spamStop--;
    }
}

function mySetup(mode) {
    chr = new Character(width / 2, height / 3);
    depthGenerated = height * 0.5;
    for (var i = 0; i < 12; i++) {
        bg[i] = new BGSeg(height * 0.4 + i * (height * 0.08));
    }
    bgDepthGen = height * 0.4 + 12 * (height * 0.08);
    // The surface where the game begins
    ground[0] = new Ground(
        0,
        height * 0.5,
        width * 0.3,
        height * 0.05,
        2 // grass
    );
    ground[1] = new Ground(
        width * 0.45,
        height * 0.5,
        width * 0.55,
        height * 0.05,
        2 //grass
    );
    fl.form[1](depthGenerated);

    if (mode === "noRads") {
        radiation = new Rads(-height * 10, false);
    } else {
        radiation = new Rads(-height * 10, true);
    }

    gameStarted = true;
}

function commenceGame() {
    background(102, 50, 0);
    push();
    translate(0, -chr.y * parallax + height / 3);
    for (var i = 0; i < bg.length; i++) {
        bg[i].show();
    }
    pop();
    // This translucent rectangle makes the background colours less offensive
    fill(102, 50, 0, 100);
    rect(0, 0, width, height);
    // Darkness which gets more pertinent the lower you go
    var darkness = map(chr.y, 0, 20000, 0, 220);
    darkness = constrain(darkness, 0, 220);
    fill(0, darkness);
    rect(0, 0, width, height);
    // Camera follows the character
    push();
    translate(0, -chr.y + height / 3);
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

    for (var i = 0; i < lava.length; i++) {
        lava[i].show();
        lava[i].update();
    }

    for (var i = 0; i < walls.length; i++) {
        walls[i].show();
        walls[i].update();
    }

    for (var i = 0; i < ground.length; i++) {
        ground[i].show();
        ground[i].update();
    }

    for (var i = 0; i < movingGround.length; i++) {
        movingGround[i].show();
        movingGround[i].update();
        movingGround[i].move();
    }

    for (var i = 0; i < turrets.length; i++) {
        turrets[i].show();
        turrets[i].update();
    }

    radiation.update();

    pop();
    //Anything under this pop will appear on the canvas as normal and not in relation to the chracter
    fill(255);
    textSize(20);
    text("HP = " + chr.hp, width * 0.1, 20);
    // text("Freefall = " + chr.freeFallTime, width * 0.3, 20);
    // text("chr.x = " + floor(chr.x), width * 0.55, 20);
    // text("chr.y = " + floor(chr.y), width * 0.75, 20);
    text((Math.floor(chr.y / (height * 0.05)) - 8) + "m", width * 0.75, 20);
    // text("Depth Generated = " + depthGenerated, width * 0.1, 50);
    // text("chr.grounded = " + chr.grounded, width * 0.5, 50);
    // Delete objects that are off the screen
    delObjects();
    formGen();
    // grid();
}

function gameMenu() {
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("Nuclear Fall In", width * 0.5, height * 0.2);
    image(sprites.menu[0], width * 0.4, height * 0.3, width * 0.2, width * 0.2);
    textSize(20);
    text("Press enter to begin", width * 0.5, height * 0.7);
    if (keyIsDown(13) && spamStop === 0) {
        mySetup();
    }
    if (keyIsDown(32) && spamStop === 0) {
        mySetup("noRads");
    }
}

function gameOverScreen() {
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("GAME OVER", width * 0.5, height * 0.2);
    textSize(20);
    text("Press enter to go back to menu", width * 0.5, height * 0.5);
    text("Final score: " + finalScore, width * 0.5, height * 0.8);
    if (keyIsDown(13)) {
        gameOver = false;
        spamStop = 10;
    }
}

function delObjects() {
    var deletionHeight = chr.y - height;
    for (var i = 0; i < ground.length; i++) {
        if (ground[i].y + ground[i].h < deletionHeight) {
            ground.splice(i, 1);
        }
    }
    for (var i = 0; i < walls.length; i++) {
        if (walls[i].y + walls[i].h < deletionHeight) {
            walls.splice(i, 1);
        }
    }
    for (var i = 0; i < lava.length; i++) {
        if (lava[i].y + lava[i].h < deletionHeight) {
            lava.splice(i, 1);
        }
    }
    for (var i = 0; i < turrets.length; i++) {
        if (turrets[i].y + turrets[i].h < deletionHeight) {
            //turrets[i].bullets.splice(turrets[i].bullets.length-1); // Maybe leave this out as bullets will disappear automatically
            turrets.splice(i, 1);
        }
    }
    for (var i = 0; i < movingGround.length; i++) {
        if (movingGround[i].y + movingGround[i].h < deletionHeight) {
            movingGround.splice(i, 1);
        }
    }

    // Background waves
    for (var i = 0; i < bg.length; i++) {
        if (bg[i].y < chr.y * parallax - height) {
            bg.splice(i, 1);
        }
    }
}

function formGen() {
    if (chr.y > depthGenerated - height) {
        var rnd = floor(random(2, fl.form.length)); // total number of forms
        if (rnd === lastFormation) {
            formGen();
        } else {
            fl.form[rnd](depthGenerated);
        }
    }
    // Background
    if (chr.y * parallax > bgDepthGen - height) {
        bg.push(new BGSeg(bgDepthGen));
        bgDepthGen += height * 0.12;
    }
}

function Rads(y, active) {
    this.y = y;
    this.speed = height * 0.004;
    this.thickness = 80;
    this.active = active;
    this.damageFreq = 0;
    this.update = function () {
        if (this.active) {
            // Green cloud display
            noStroke();
            fill(0, 255, 0);
            rect(0, this.y - height, width, height + this.thickness);
            this.y+= this.speed;
            for (var i = 0; i < 75; i++) {
                var alpha = map(i, 0, 50, 255, 0);
                fill(0, 255, 0, alpha);
                rect(0, this.y + i * this.thickness, width, this.thickness);
            }
            stroke(0);
            // Damage to chr (might change to damage maxHP too)
            if (chr.y < this.y + 50 * this.thickness) {
                if (chr.y < this.y) {
                    chr.hp--;
                } else if (chr.y < this.y + 40 * this.thickness && chr.y >= this.y + 30 * this.thickness && this.damageFreq === 0) {
                    chr.hp--;
                    this.damageFreq = 10;
                } else if (chr.y < this.y + 30 * this.thickness && this.damageFreq === 0) {
                    chr.hp--;
                    this.damageFreq = 5;
                } else if (this.damageFreq === 0) {
                    chr.hp--;
                    this.damageFreq = 50;
                }
            }
            if (this.damageFreq > 0) {
                this.damageFreq--;
            }
        }
    }
}

function BGSeg(y) {
    this.spr = floor(random(6));
    this.y = y;
    this.h = height * 0.12;
    this.show = function() {
        switch(this.spr) {
            case 0:
                image(sprites.background[0], 0, this.y, width / 2, this.h);
                image(sprites.background[1], width / 2, this.y, width / 2, this.h);
                break;
            case 1:
                image(sprites.background[1], 0, this.y, width, this.h);
                image(sprites.background[2], width / 2, this.y, width / 2, this.h);
                break;
            case 2:
                image(sprites.background[2], 0, this.y, width, this.h);
                image(sprites.background[3], width / 2, this.y, width / 2, this.h);
                break;
            case 3:
                image(sprites.background[3], 0, this.y, width, this.h);
                image(sprites.background[4], width / 2, this.y, width / 2, this.h);
                break;
            case 4:
                image(sprites.background[4], 0, this.y, width, this.h);
                image(sprites.background[5], width / 2, this.y, width / 2, this.h);
                break;
            case 5:
                image(sprites.background[5], 0, this.y, width, this.h);
                image(sprites.background[0], width / 2, this.y, width / 2, this.h);
                break;
        }
    }
}

function sky() {
    noStroke();
    fill(173, 216, 230);
    rect(0, -height * 0.5, width, height * 1.025);
    image(sprites.surface[0], width * 0.6, height * 0.425, width * 0.075, height * 0.075);
    stroke(0);
}

function grid() {
    noFill();
    stroke(255);
    for (var i = 0; i < width; i+= width * 0.05) {
        for (var j = 0; j < height; j+= height * 0.05) {
            rect(i, j, width * 0.05, height * 0.05);
        }
    }
    stroke(0);
}
