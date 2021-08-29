class Drop {
    constructor(x, y) {
        var options = {
            friction: 0.1,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill('aliceblue');
        ellipseMode(CENTER);
        ellipse(0, 0, 5);
        pop();
    }

    update() {
        if (this.body.position.y > height) {
            Body.setPosition(this.body, { x: random(0, 800), y: random(0, 200) });
        }
    }
}