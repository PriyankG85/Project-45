const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var thunder;
var thunderImg1, thunderImg2, thunderImg3, thunderImg4;
var drops = [];

function preload() {
    thunderImg1 = loadImage('images/thunderbolt/1.png');
    thunderImg2 = loadImage('images/thunderbolt/2.png');
    thunderImg3 = loadImage('images/thunderbolt/3.png');
    thunderImg4 = loadImage('images/thunderbolt/4.png');
}

function setup() {
    createCanvas(600, 500);
    engine = Engine.create();
    world = engine.world;
    // world.gravity.y = 1;

    umbrella = new Umbrella(width / 2 - 20, 400);
}

function draw() {
    background(0);
    Engine.update(engine);

    umbrella.display();

    if (frameCount % 100 === 0 && frameCount <= 1000) {
        var x = random([500, 100, 300]);
        var img = random([thunderImg1, thunderImg2, thunderImg3, thunderImg4]);
        thunder = createSprite(x, 100, 20, 20);
        thunder.addImage(img);
        thunder.scale = 0.3;
        thunder.lifetime = 20;

        // var thunderFrame = 0;
        // console.log(frameCount);
    }

    // if (thunderFrame + 200 === frameCount && thunder) {
    //     thunder.destroy();
    //     console.log('remove the thunder');
    // }

    drawSprites();

    for (i = 0; i < drops.length; i++) {
        drops[i].display();
        drops[i].update();
    }

    for (var i = 0; i < 1; i++) {
        drops.push(new Drop(random(0, 600), random(0, 100)));
    }

}

