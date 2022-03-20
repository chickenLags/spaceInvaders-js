
class StartScreen extends Scene {

    entities = [];
    background;

    constructor() {
        super();
        this.entities = [
            new List(
                new Position(window.innerWidth / 2, window.innerHeight / 2),
                [
                    new Button("Start", () => game.scene = new Level()),
                    new Button("high scores", () => game.scene = new HighScores()),
                    new Button("quit", () => window.close()),
                ]
            ),
            new AnimationSprite(
                "spritesheet", 
                new Area(
                    new Position(0, 0), 
                    150, 
                    100
                ), 
                2
            )
        ];

        this.background = new Background("intro-background");
    }

    update() {
        this.entities.forEach(entity => entity.update());
    }

    render(context) {
        this.background.render(context);
        this.entities.forEach(entity => entity.render(context));
    }

    process(input) {
        this.entities.forEach(ent => ent.process(input));
    }
}