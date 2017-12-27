function FormationLibrary() {
    // Note: Make all forms at least a bit bigger than height * 1 so it's easier to generate new blocks
    this.form = [];
    //FORM 1 - very easy
    this.form[1] = function(startY) {
        walls.push(new Wall(width * 0.1, startY, width * 0.05, height * 0.4));
        ground.push(
            new Ground(width * 0.1, startY + height * 0.4, width * 0.3, height * 0.05, 2)
        );
        ground.push(
            new Ground(width * 0.4, startY + height * 0.7, width * 0.25, height * 0.05, 2)
        );
        ground.push(
            new Ground(width * 0.4, startY + height * 0.75, width * 0.2, height * 0.05, 1)
        );
        lava.push(
            new Lava(0, startY + height * 0.75, width * 0.45, height * 0.05)
        );
        ground.push(
            new Ground(0, startY + height * 0.8, width * 0.55, height * 0.05, 1)
        );
        ground.push(
            new Ground(width * 0.7, startY + height * 1.1, width * 0.2, height * 0.05, 2)
        );
        walls.push(new Wall(width * 0.85, startY, width * 0.05, height * 1.1));
        depthGenerated += height * 1.3;
        lastFormation = 1;
    };
    //FORM 2 - fairly easy
    this.form[2] = function(startY) {
        ground.push(
            new Ground(width * 0.7, startY, width * 0.05, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.4, startY + height * 0.05, width * 0.2, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.6, startY + height * 0.05, width * 0.4, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.55, startY + height * 0.1, width * 0.45, height * 0.05, 1)
        );
        ground.push(
            new Ground(width * 0.2, startY + height * 0.4, width * 0.1, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.45, width * 0.6, height * 0.05)
        );
        ground.push(
            new Ground(0, startY + height * 0.5, width * 0.6, height * 0.05, 1)
        );
        ground.push(
            new Ground(width * 0.75, startY + height * 0.5, width * 0.08, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.6, startY + height * 0.7, width * 0.05, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.4, startY + height * 0.9, width * 0.05, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.1, startY + height * 1.2, width * 0.05, height * 0.05)
        );
        depthGenerated += height * 1.5;
        lastFormation = 2;
    };
    //FORM 3 - fairly hard
    this.form[3] = function(startY) {
        ground.push(
            new Ground(0, startY, width * 0.4, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.5, startY, width * 0.5, height * 0.05)
        );
        walls.push(
            new Wall(width * 0.06, startY + height * 0.05, width * 0.1, height * 1.25)
        );
        walls.push(
            new Wall(width * 0.87, startY + height * 0.05, width * 0.1, height * 0.95)
        );
        lava.push(
            new Lava(0, startY + height * 0.1, width * 0.4, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.5, startY + height * 0.1, width * 0.5, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.2, width * 0.4, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.53, startY + height * 0.2, width * 0.5, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.3, width * 0.4, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.55, startY + height * 0.3, width * 0.45, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.4, width * 0.45, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.6, startY + height * 0.4, width * 0.4, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.5, width * 0.4, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.62, startY + height * 0.5, width * 0.4, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.6, width * 0.45, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.65, startY + height * 0.6, width * 0.35, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.7, width * 0.45, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.7, startY + height * 0.7, width * 0.3, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 0.8, width * 0.5, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.75, startY + height * 0.8, width * 0.25, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.4, startY + height * 1, width * 0.6, height * 0.05)
        );
        walls.push(
            new Wall(width * 0.92, startY + height * 1.05, width * 0.05, height * 0.5)
        );
        turrets.push(
            new Turret(width * 0.87, startY + height * 1.25, undefined, undefined, -width * 0.005, 85)
        );
        ground.push(
            new Ground(0, startY + height * 1.3, width * 0.7, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.25, startY + height * 1.1, width * 0.05, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.55, startY + height * 1.55, width * 0.45, height * 0.05)
        );
        depthGenerated += height * 1.8;
        lastFormation = 3;
    };
    // FORM 4 - fairly easy
    this.form[4] = function(startY) {
        ground.push(
            new Ground(0, startY, width * 0.25, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.45, startY, width * 0.55, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.3, startY + height * 0.2, width * 0.3, height * 0.05)
        );
        walls.push(
            new Wall(width * 0.55, startY + height * 0.05, width * 0.04, height * 0.15)
        );
        movingGround.push(
            new MovingGround(width * 0.02, startY + height * 0.4, width * 0.15, height * 0.05, width * 0.60, startY + height * 0.4, 100)
        );
        lava.push(
            new Lava(0, startY + height * 0.5, width * 0.75, height * 0.05)
        );
        walls.push(
            new Wall(width * 0.75, startY + height * 0.3, width * 0.05, height * 0.28, "left")
        );
        ground.push(
            new Ground(0, startY + height * 0.55, width * 0.8, height * 0.05, 1)
        );
        turrets.push(
            new Turret(0, startY + height * 0.6, undefined, undefined, width * 0.005, 100)
        );
        ground.push(
            new Ground(width * 0.9, startY + height * 0.5, width * 0.1, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.6, startY + height * 0.8, width * 0.4, height * 0.05)
        );
        movingGround.push(
            new MovingGround(width * 0.5, startY + height * 0.9, width * 0.1, height * 0.05, width * 0.2, startY + height * 1.15, 100)
        );
        lava.push(
            new Lava(0, startY + height * 1.2, width * 0.7, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.7, startY + height * 1.2, width * 0.08, height * 0.05)
        );
        ground.push(
            new Ground(0, startY + height * 1.25, width * 0.78, height * 0.05, 1)
        );
        ground.push(
            new Ground(width * 0.9, startY + height * 1.3, width * 0.08, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.5, startY + height * 1.5, width * 0.5, height * 0.05)
        );
        depthGenerated += height * 1.75;
        lastFormation = 4;
    };
    // Form 5 fairly hard and frustrating
    this.form[5] = function(startY) {
        ground.push(
            new Ground(width * 0.15, startY, width * 0.85, height * 0.05)
        );
        movingGround.push(
            new MovingGround(0, startY + height * 0.06, width * 0.1, height * 0.06, width * 0.4, startY + height * 0.06, 100)
        );
        movingGround.push(
            new MovingGround(width * 0.9, startY + height * 0.06, width * 0.1, height * 0.06, width * 0.5, startY + height * 0.06, 100)
        );
        walls.push(
            new Wall(width * 0.20, startY + height * 0.07 + chr.h, width * 0.05, height * 0.18)
        );
        walls.push(
            new Wall(width * 0.35, startY + height * 0.07 + chr.h, width * 0.05, height * 0.18)
        );
        walls.push(
            new Wall(width * 0.50, startY + height * 0.07 + chr.h, width * 0.05, height * 0.18)
        );
        walls.push(
            new Wall(width * 0.65, startY + height * 0.07 + chr.h, width * 0.05, height * 0.18)
        );
        walls.push(
            new Wall(width * 0.80, startY + height * 0.07 + chr.h, width * 0.05, height * 0.18)
        );
        turrets.push(
            new Turret(width * 0.95, startY + height * 0.25, undefined, undefined, -width * 0.005, 150)
        );
        // Ground underneath all the walls
        ground.push(
            new Ground(0, startY + height * 0.3, width * 0.85, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.85, startY + height * 0.6, width * 0.15, height * 0.05)
        );
        walls.push(
            new Wall(width * 0.87, startY + height * 0.65, width * 0.04, height * 0.2)
        );
        ground.push(
            new Ground(width * 0.6, startY + height * 0.7, width * 0.15, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.35, startY + height * 0.85, width * 0.6, height * 0.05, 1)
        );
        ground.push(
            new Ground(width * 0.1, startY + height * 0.9, width * 0.3, height * 0.05, 1)
        );
        ground.push(
            new Ground(0, startY + height * 1.1, width * 0.1, height * 0.05)
        );
        lava.push(
            new Lava(0, startY + height * 1.3, width * 0.85, height * 0.05)
        );
        ground.push(
            new Ground(0, startY + height * 1.35, width * 0.9, height * 0.05, 1)
        );
        movingGround.push(
            new MovingGround(width * 0.05, startY + height * 1.25, width * 0.15, height * 0.05, width * 0.8, startY + height * 1.25, 150)
        );
        movingGround.push(
            new MovingGround(width * 0.8, startY + height * 1.15, width * 0.15, height * 0.05, width * 0.05, startY + height * 1.15, 150)
        );
        // wall that knocks you off into lava
        walls.push(
            new Wall(width * 0.8, startY + height * 0.9, width * 0.1, height * 0.25)
        );
        ground.push(
            new Ground(width * 0.75, startY + height * 1.7, width * 0.25, height * 0.05)
        );
        depthGenerated += height * 1.9;
        lastFormation = 5;
    };
    // Form 6 - hard but quick, falling through diagonal lava ting
    this.form[6] = function(startY) {
        ground.push(
            new Ground(width * 0.3, startY + height * 0.1, width * 0.3, height * 0.05)
        );
        ground.push(
            new Ground(0, startY + height * 0.4, width * 0.9, height * 0.05)
        );
        for (var i = 1; i < 20; i++) {
            lava.push(
                new Lava(0, startY + height * 0.4 + (height * 0.05) * i, width * 0.9 - (width * 0.05) * i, height * 0.05)
            );
            if (i % 4 === 0) {
                turrets.push(
                    new Turret(width * 0.9 - (width * 0.05) * i ,startY + height * 0.4 + (height * 0.05) * i,undefined, undefined, width * 0.005, 140)
                );
            }
            if (i < 15) {
                lava.push(
                    new Lava(width - (width * 0.05) * i, startY + height * 0.65 + (height * 0.1) * i, width * 0.1 + (width * 0.05) * i, height * 0.1)
                );
            }
        }
        ground.push(
            new Ground(width * 0.5, startY + height * 1.15, width * 0.05, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.5, startY + height * 1.6, width * 0.05, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.25, startY + height * 2, width * 0.1, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.25, startY + height * 2.05, width * 0.05, height * 0.05, 1)
        );
        ground.push(
            new Ground(width * 0.25, startY + height * 2.1, width * 0.05, height * 0.05, 1)
        );
        ground.push(
            new Ground(width * 0.25, startY + height * 2.15, width * 0.75, height * 0.05, 1)
        );
        ground.push(
            new Ground(0, startY + height * 2.4, width * 0.4, height * 0.05)
        );
        depthGenerated += height * 2.7;
        lastFormation = 6;
    };
    // Form 7
    this.form[7] = function(startY) {
        ground.push(
            new Ground(0, startY, width * 0.4, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.6, startY, width * 0.4, height * 0.05)
        );
        movingGround.push(
            new MovingGround(width * 0.4, startY + height * 0.15, width * 0.2, height * 0.05, width * 0.4, startY + height * 0.3, 80)
        );
        lava.push(
            new Lava(width * 0.25, startY + height * 0.4, width * 0.5, height * 0.05)
        );
        ground.push(
            new Ground(width * 0.25, startY + height * 0.45, width * 0.5, height * 0.05, 1)
        );
        walls.push(
            new Wall(width * 0.45, startY + height * 0.5, width * 0.1, height * 0.35)
        );
        turrets.push(
            new Turret(width * 0.4, startY + height * 0.5,undefined, undefined, -width * 0.005, 110)
        );
        turrets.push(
            new Turret(width * 0.55, startY + height * 0.5,undefined, undefined, width * 0.005, 110)
        );
        movingGround.push(
            new MovingGround(width * 0.1, startY + height * 0.3, width * 0.1, height * 0.05, width * 0.1, startY + height * 0.85, 110)
        );
        movingGround.push(
            new MovingGround(width * 0.8, startY + height * 0.85, width * 0.1, height * 0.05, width * 0.8, startY + height * 0.3, 110)
        );
        turrets.push(
            new Turret(width * 0.4, startY + height * 0.8,undefined, undefined, -width * 0.005, 110)
        );
        turrets.push(
            new Turret(width * 0.55, startY + height * 0.8,undefined, undefined, width * 0.005, 110)
        );
        movingGround.push(
            new MovingGround(width * 0.2, startY + height * 1, width * 0.1, height * 0.05, width * 0.7, startY + height * 1, 110)
        );
        lava.push(
            new Lava(0, startY + height * 1.15, width * 0.45, height * 0.05)
        );
        lava.push(
            new Lava(width * 0.55, startY + height * 1.15, width * 0.45, height * 0.05)
        );
        ground.push(
            new Ground(0, startY + height * 1.2, width * 0.45, height * 0.05, 1)
        );
        ground.push(
            new Ground(width * 0.55, startY + height * 1.2, width * 0.45, height * 0.05, 1)
        );
        ground.push(
            new Ground(width * 0.3, startY + height * 1.4, width * 0.4, height * 0.05)
        );
        depthGenerated += height * 1.6;
        lastFormation = 7;
    };
    // Form 8 - Test form for level designer
    this.form[8] = function(startY) {
        ground.push( new Ground (width * 0.55, startY + height * 0.05, width * 0.45, height * 0.05) );
        ground.push( new Ground (width * 0, startY + height * 0.1, width * 0.35, height * 0.05) );
        ground.push( new Ground (width * 0.2, startY + height * 0.35, width * 0.35, height * 0.05) );
        ground.push( new Ground (width * 0.35, startY + height * 0.4, width * 0.45, height * 0.05) );
        ground.push( new Ground (width * 0, startY + height * 0.6, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0.85, startY + height * 0.6, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0.1, startY + height * 0.65, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0.75, startY + height * 0.65, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0.2, startY + height * 0.7, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0.65, startY + height * 0.7, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0.2, startY + height * 0.95, width * 0.6, height * 0.05) );
        ground.push( new Ground (width * 0, startY + height * 1.2, width * 0.25, height * 0.05) );
        ground.push( new Ground (width * 0.2, startY + height * 1.25, width * 0.2, height * 0.05) );
        ground.push( new Ground (width * 0.35, startY + height * 1.3, width * 0.2, height * 0.05) );
        ground.push( new Ground (width * 0.65, startY + height * 1.3, width * 0.35, height * 0.05) );
        depthGenerated += height * 1.6;
        lastFormation = 8;
    };
    // Form 9 - Another test
    this.form[9] = function(startY) {
        ground.push( new Ground (width * 0, startY + height * 0, width * 0.45, height * 0.05) );
        ground.push( new Ground (width * 0.65, startY + height * 0.2, width * 0.35, height * 0.05) );
        ground.push( new Ground (width * 0, startY + height * 0.35, width * 0.35, height * 0.05) );
        ground.push( new Ground (width * 0.55, startY + height * 0.45, width * 0.45, height * 0.05) );
        ground.push( new Ground (width * 0.25, startY + height * 0.7, width * 0.2, height * 0.05) );
        ground.push( new Ground (width * 0.6, startY + height * 0.7, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0.1, startY + height * 0.9, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0.75, startY + height * 0.9, width * 0.1, height * 0.05) );
        ground.push( new Ground (width * 0.6, startY + height * 1.1, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0, startY + height * 1.15, width * 0.1, height * 0.05) );
        ground.push( new Ground (width * 0.25, startY + height * 1.35, width * 0.1, height * 0.05) );
        ground.push( new Ground (width * 0.5, startY + height * 1.65, width * 0.15, height * 0.05) );
        ground.push( new Ground (width * 0.05, startY + height * 1.9, width * 0.2, height * 0.05) );
        ground.push( new Ground (width * 0.7, startY + height * 2, width * 0.2, height * 0.05) );
        depthGenerated += height * 2.3;
        lastFormation = 9;
    };
    // Form 10 - Test with two types of ground, very usable
    this.form[10] = function(startY) {
        ground.push( new Ground(width * 0, startY + height * 0, width * 0.4, height * 0.05 ));
        ground.push( new Ground(width * 0, startY + height * 0.05, width * 0.3, height * 0.05, 1));
        ground.push( new Ground(width * 0, startY + height * 0.1, width * 0.25, height * 0.05, 1));
        ground.push( new Ground(width * 0, startY + height * 0.15, width * 0.1, height * 0.05, 1));
        ground.push( new Ground(width * 0.15, startY + height * 0.15, width * 0.1, height * 0.05, 1));
        ground.push( new Ground(width * 0, startY + height * 0.2, width * 0.1, height * 0.05, 1));
        ground.push( new Ground(width * 0.2, startY + height * 0.2, width * 0.05, height * 0.05, 1));

        turrets.push( new Turret(width * 0.95, startY + height * 0.1,undefined, undefined, -width * 0.005, 120));
        turrets.push( new Turret(width * 0.95, startY + height * 0.15,undefined, undefined, -width * 0.005, 80));

        ground.push( new Ground(width * 0.35, startY + height * 0.2, width * 0.65, height * 0.05 ));
        ground.push( new Ground(width * 0, startY + height * 0.25, width * 0.05, height * 0.05, 1));
        ground.push( new Ground(width * 0.15, startY + height * 0.25, width * 0.1, height * 0.05, 1));
        ground.push( new Ground(width * 0.5, startY + height * 0.25, width * 0.5, height * 0.05, 1));
        ground.push( new Ground(width * 0, startY + height * 0.3, width * 0.1, height * 0.05, 1));
        ground.push( new Ground(width * 0.15, startY + height * 0.3, width * 0.1, height * 0.05, 1));
        ground.push( new Ground(width * 0.65, startY + height * 0.3, width * 0.35, height * 0.05, 1));
        ground.push( new Ground(width * 0, startY + height * 0.35, width * 0.1, height * 0.05, 1));
        ground.push( new Ground(width * 0.15, startY + height * 0.35, width * 0.1, height * 0.05, 1));
        ground.push( new Ground(width * 0, startY + height * 0.4, width * 0.3, height * 0.05, 1));
        ground.push( new Ground(width * 0, startY + height * 0.45, width * 0.35, height * 0.05, 1));
        ground.push( new Ground(width * 0.5, startY + height * 0.6, width * 0.15, height * 0.05 ));
        ground.push( new Ground(width * 0, startY + height * 0.75, width * 0.1, height * 0.05 ));
        ground.push( new Ground(width * 0, startY + height * 0.8, width * 0.1, height * 0.05, 1));
        ground.push( new Ground(width * 0.15, startY + height * 0.8, width * 0.2, height * 0.05 ));
        ground.push( new Ground(width * 0.8, startY + height * 0.8, width * 0.2, height * 0.05 ));
        ground.push( new Ground(width * 0, startY + height * 0.85, width * 0.3, height * 0.05, 1));
        ground.push( new Ground(width * 0.85, startY + height * 0.85, width * 0.15, height * 0.05, 1));
        ground.push( new Ground(width * 0.4, startY + height * 1.05, width * 0.15, height * 0.05 ));
        depthGenerated += height * 1.3;
        lastFormation = 10;
    };
    // Form 11 - quite difficult
    this.form[11] = function(startY) {
        ground.push( new Ground(width * 0, startY + height * 0, width * 0.25, height * 0.05 ));
        ground.push( new Ground(width * 0.65, startY + height * 0, width * 0.35, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.05, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.2, startY + height * 0.05, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.65, startY + height * 0.05, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.05, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.1, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.2, startY + height * 0.1, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.25, startY + height * 0.1, width * 0.1, height * 0.05 ));
        ground.push( new Ice(width * 0.35, startY + height * 0.1, width * 0.2, height * 0.05, 40));
        ground.push( new Ground(width * 0.55, startY + height * 0.1, width * 0.1, height * 0.05 ));
        walls.push( new Wall(width * 0.65, startY + height * 0.1, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.1, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.15, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.15, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.2, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.2, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.25, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.25, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.3, width * 0.05, height * 0.05 ));
        ground.push( new Ice(width * 0.2, startY + height * 0.3, width * 0.25, height * 0.05, 40));
        walls.push( new Wall(width * 0.95, startY + height * 0.3, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.35, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.35, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.4, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.4, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.45, width * 0.05, height * 0.05 ));
        turrets.push( new Turret(width * 0.05, startY + height * 0.45, width * 0.05, height * 0.05, width * 0.005, 100));
        walls.push( new Wall(width * 0.95, startY + height * 0.45, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.5, width * 0.05, height * 0.05 ));
        ground.push( new Ice(width * 0.45, startY + height * 0.5, width * 0.25, height * 0.05, 40));
        walls.push( new Wall(width * 0.95, startY + height * 0.5, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.55, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.55, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.6, width * 0.05, height * 0.05 ));
        lava.push( new Lava(width * 0.75, startY + height * 0.6, width * 0.2, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.6, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.65, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.55, startY + height * 0.65, width * 0.05, height * 0.05 ));
        lava.push( new Lava(width * 0.6, startY + height * 0.65, width * 0.2, height * 0.05 ));
        ground.push( new Ground(width * 0.8, startY + height * 0.65, width * 0.15, height * 0.05, 1));
        walls.push( new Wall(width * 0.95, startY + height * 0.65, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.7, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.55, startY + height * 0.7, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.6, startY + height * 0.7, width * 0.35, height * 0.05, 1));
        walls.push( new Wall(width * 0.95, startY + height * 0.7, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0, startY + height * 0.75, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.05, startY + height * 0.75, width * 0.1, height * 0.05 ));
        ground.push( new Ice(width * 0.15, startY + height * 0.75, width * 0.1, height * 0.05, 40));
        walls.push( new Wall(width * 0.95, startY + height * 0.75, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 0.8, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.8, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 0.85, width * 0.05, height * 0.05 ));
        turrets.push( new Turret(width * 0.9, startY + height * 0.85, width * 0.05, height * 0.05, -width * 0.005, 100));
        walls.push( new Wall(width * 0.95, startY + height * 0.85, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 0.9, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 0.9, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 0.95, width * 0.05, height * 0.05 ));
        ground.push( new Ice(width * 0.4, startY + height * 0.95, width * 0.05, height * 0.05, 40));
        walls.push( new Wall(width * 0.95, startY + height * 0.95, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 1, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 1.05, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.05, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 1.1, width * 0.05, height * 0.05 ));
        turrets.push( new Turret(width * 0.15, startY + height * 1.1, width * 0.05, height * 0.05, width * 0.005, 100));
        walls.push( new Wall(width * 0.95, startY + height * 1.1, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 1.15, width * 0.05, height * 0.05 ));
        ground.push( new Ice(width * 0.65, startY + height * 1.15, width * 0.1, height * 0.05, 40));
        walls.push( new Wall(width * 0.95, startY + height * 1.15, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 1.2, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.2, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.1, startY + height * 1.25, width * 0.05, height * 0.05 ));
        lava.push( new Lava(width * 0.15, startY + height * 1.25, width * 0.25, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.25, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.1, startY + height * 1.3, width * 0.25, height * 0.05, 1));
        lava.push( new Lava(width * 0.35, startY + height * 1.3, width * 0.05, height * 0.05 ));
        ground.push( new Ice(width * 0.9, startY + height * 1.3, width * 0.05, height * 0.05, 40));
        walls.push( new Wall(width * 0.95, startY + height * 1.3, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.1, startY + height * 1.35, width * 0.15, height * 0.05, 1));
        ground.push( new Ground(width * 0.3, startY + height * 1.35, width * 0.05, height * 0.05, 1));
        lava.push( new Lava(width * 0.35, startY + height * 1.35, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.35, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.15, startY + height * 1.4, width * 0.2, height * 0.05, 1));
        lava.push( new Lava(width * 0.35, startY + height * 1.4, width * 0.2, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.4, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.2, startY + height * 1.45, width * 0.3, height * 0.05, 1));
        lava.push( new Lava(width * 0.5, startY + height * 1.45, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.45, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.25, startY + height * 1.5, width * 0.25, height * 0.05, 1));
        lava.push( new Lava(width * 0.5, startY + height * 1.5, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.5, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.25, startY + height * 1.55, width * 0.15, height * 0.05, 1));
        ground.push( new Ground(width * 0.45, startY + height * 1.55, width * 0.05, height * 0.05, 1));
        lava.push( new Lava(width * 0.5, startY + height * 1.55, width * 0.3, height * 0.05 ));
        walls.push( new Wall(width * 0.8, startY + height * 1.55, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.55, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.3, startY + height * 1.6, width * 0.35, height * 0.05, 1));
        lava.push( new Lava(width * 0.65, startY + height * 1.6, width * 0.15, height * 0.05 ));
        walls.push( new Wall(width * 0.8, startY + height * 1.6, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.6, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.3, startY + height * 1.65, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.35, startY + height * 1.65, width * 0.45, height * 0.05, 1));
        walls.push( new Wall(width * 0.8, startY + height * 1.65, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.65, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.3, startY + height * 1.7, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.4, startY + height * 1.7, width * 0.4, height * 0.05, 1));
        walls.push( new Wall(width * 0.8, startY + height * 1.7, width * 0.05, height * 0.05 ));
        ground.push( new Ice(width * 0.85, startY + height * 1.7, width * 0.05, height * 0.05, 40));
        walls.push( new Wall(width * 0.95, startY + height * 1.7, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.3, startY + height * 1.75, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.55, startY + height * 1.75, width * 0.25, height * 0.05, 1));
        walls.push( new Wall(width * 0.8, startY + height * 1.75, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.75, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.3, startY + height * 1.8, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.65, startY + height * 1.8, width * 0.15, height * 0.05, 1));
        walls.push( new Wall(width * 0.8, startY + height * 1.8, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.8, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.3, startY + height * 1.85, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.7, startY + height * 1.85, width * 0.1, height * 0.05, 1));
        walls.push( new Wall(width * 0.8, startY + height * 1.85, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.85, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.3, startY + height * 1.9, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.9, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.3, startY + height * 1.95, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.95, startY + height * 1.95, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.3, startY + height * 2, width * 0.05, height * 0.05 ));
        turrets.push( new Turret(width * 0.35, startY + height * 2, width * 0.05, height * 0.05, width * 0.005, 100));
        walls.push( new Wall(width * 0.95, startY + height * 2, width * 0.05, height * 0.05 ));
        walls.push( new Wall(width * 0.3, startY + height * 2.05, width * 0.05, height * 0.05 ));
        ground.push( new Ground(width * 0.5, startY + height * 2.05, width * 0.45, height * 0.05 ));
        ground.push( new Ground(width * 0.95, startY + height * 2.05, width * 0.05, height * 0.05, 1));
        ground.push( new Ground(width * 0.25, startY + height * 2.3, width * 0.25, height * 0.05 ));
        depthGenerated += height * 2.6;
        lastFormation = 11;
    }
}