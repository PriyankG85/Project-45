class Umbrella {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 70, { isStatic: true });
        this.img = loadImage('images/Walking Frame/walking_1.png');
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        imageMode(CENTER);
        // ellipse(0, 0, 150);
        image(this.img, 0, 0, 200, 200);
        pop();
    }
}