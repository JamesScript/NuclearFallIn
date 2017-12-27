var data = [];
var tiles = [];
var strArr = [];
var finalStr = [];
var scl = 0.05;
var spamStop = 0;
var sprites = {
    background: [],
    chr: [],
    ground: [],
    ice: [],
    movingGround: [],
    walls: [],
    lava: [],
    turrets: []
};

function setup () {
    createCanvas(600, 2000);
    for (var i = 0; i < 80; i ++) {
        data[i] = [];
        for (var j = 0; j < 20; j++) {
            data[i][j] = 0;
            tiles.push(new Tile(j * (width * scl), i * (500 * scl), j, i));
        }
    }
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
    sprites.turrets[0] = loadImage("turretL.png");
    sprites.turrets[1] = loadImage("turretR.png");
}

function draw() {
    background(120, 120, 0);
    grid();
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].show();
    }
    if (keyIsDown(13)) {
        strArr = [];
        finalStr = [];
        makeText();
        for (var i = 0; i < strArr.length; i++) {
            finalStr[i] = strArr[i] + "<br>";
        }
        document.getElementById("content").innerHTML = finalStr.join(" ").toString();
    }
    if (keyIsDown(83) && spamStop === 0) {
        var json = {};
        var d = new Date();
        json.data = data;
        saveJSON(json, 'NFLevelDesign_' + d.getDate() + "_" + d.getHours() + "_" + d.getMinutes());
        spamStop = 20;
    }
    if (spamStop > 0) {
        spamStop--;
    }
}

function grid() {
    noFill();
    stroke(255);
    for (var i = 0; i < 80; i ++) {
        for (var j = 0; j < 20; j++) {
            if (data[i][j] === 1) {
                image(sprites.ground[2], j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
            } else if (data[i][j] === 2) {
                image(sprites.ground[1], j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
            } else if (data[i][j] === 10) {
                image(sprites.lava[0], j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
            } else if (data[i][j] === 20) {
                image(sprites.walls[0], j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
            } else if (data[i][j] === 30) {
                image(sprites.turrets[1], j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
            } else if (data[i][j] === 31) {
                image(sprites.turrets[0], j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
            } else if (data[i][j] === 40) {
                image(sprites.movingGround[0], j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
            } else if (data[i][j] === 50) {
                image(sprites.ice[0], j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
            } else if (data[i][j] === 51) {
                image(sprites.ice[4], j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
            } else {
                noFill();
            }
            rect(j * (width * scl), i * (500 * scl), width * scl, 500 * scl);
        }
    }
    stroke(0);
}

function Tile(x, y, xID, yID) {
    this.x = x;
    this.y = y;
    this.xID = xID;
    this.yID = yID;
    this.selected = false;
    this.show = function () {
        if (mouseX > this.x && mouseX < this.x + width * scl && mouseY > this.y && mouseY < this.y + 500 * scl) {
            this.selected = true;
            noStroke();
            fill(255, 0, 0, 100);
            rect(this.x, this.y, width * scl, 500 * scl);
            stroke(0);
            if (mouseIsPressed || keyIsDown(49)) {
                data[this.yID][this.xID] = 1;
            }
            if (keyIsDown(48)) {
                data[this.yID][this.xID] = 0;
            }
            if (keyIsDown(50)) {
                data[this.yID][this.xID] = 2;
            }
            // L for lava
            if (keyIsDown(76)) {
                data[this.yID][this.xID] = 10;
            }
            // W for wall
            if (keyIsDown(87)) {
                data[this.yID][this.xID] = 20;
            }
            // . (>) for right facing turret
            if (keyIsDown(190)) {
                data[this.yID][this.xID] = 30;
            }
            // , (<) for left facing turret
            if (keyIsDown(188)) {
                data[this.yID][this.xID] = 31;
            }
            // M for moving ground
            if (keyIsDown(77)) {
                data[this.yID][this.xID] = 40;
            }
            // I for ice breakable
            if (keyIsDown(73)) {
                data[this.yID][this.xID] = 50;
            }
            // J for solid ice
            if (keyIsDown(74)) {
                data[this.yID][this.xID] = 51;
            }

            // Shifting everything up by one
            if (keyIsDown(38) && spamStop === 0) {
                data.shift();
                data.push([]);
                for (var i = 0; i < 20; i++) {
                    data[79][i] = 0;
                }
                spamStop = 20;
            }

            // Shifting everything down by one
            if (keyIsDown(40) && spamStop === 0) {
                data.pop();
                data.unshift([]);
                for (var i = 0; i < 20; i++) {
                    data[0][i] = 0;
                }
                spamStop = 20;
            }
        }
    }
}

function makeText() {
    var beginX;
    var beginY;
    var blockW;
    var blockType;
    var strX = "";
    var strY = "";
    var strW = "";
    var strType = "";
    var strExtra = "";
    for (var i = 0; i < 80; i++) {
        for (var j = 0; j < 20; j++) {
            if (data[i][j] !== 0) {
                blockType = data[i][j];
                beginX = j;
                beginY = i;
                for (var k = 1; k <= 20 - j; k++) {
                    if (data[i][j + k] !== blockType || data[i][j + k] === undefined) {
                        blockW = k;
                        var flX = Math.floor(beginX * scl * 100) / 100;
                        var flY = Math.floor(beginY * scl * 100) / 100;
                        var flW = Math.floor(blockW * scl * 100) / 100;
                        strX = "width * " + flX;
                        strY = "startY + height * " + flY;
                        strW = "width * " + flW;
                        strType = makeStr(blockType);
                        strExtra = makeExtra(blockType, strX, strY);
                        strArr.push(strType + "(" + strX + ", " + strY + ", " + strW + ", height * 0.05" + strExtra + "));");
                        j += k - 1;
                        break;
                    }
                }
            }
        }
    }
}

function makeStr(bt) {
    switch (bt) {
        case 1:
            return "ground.push( new Ground";
        case 2:
            return "ground.push( new Ground";
        case 10:
            return "lava.push( new Lava";
        case 20:
            return "walls.push( new Wall";
        case 30:
            return "turrets.push( new Turret";
        case 31:
            return "turrets.push( new Turret";
        case 40:
            return "movingGround.push( new MovingGround";
        case 50:
            return "ground.push( new Ice";
        case 51:
            return "ground.push( new SolidIce ";
    }
}

function makeExtra (bt, stX, stY) {
    // startX and startY only needed for movingGround
    var startX = stX;
    var startY = stY;
    switch (bt) {
        case 1:
            return " ";
        case 2:
            return ", 1";
        case 10:
            return " ";
        case 20:
            return " ";
        case 30:
            return ", width * 0.005, 100";
        case 31:
            return ", -width * 0.005, 100";
        case 40:
            return ", " + startX + ", " + startY + ", 100";
        case 50:
            return ", 40";
        case 51:
            return " ";
        default:
            return " ";
    }
}

/*
KEY FOR DATA
0 - nothing (important for determining width of objects)
1 - ground normal, undefined skin
2 - ground[1] - usually used under normal ground
10 - lava
20 - wall
30 - right facing turret
31 - left facing turret
40 - moving wall (set parameters in formationLibrary.js)
50 - ice breakable
51 - ice solid
 */