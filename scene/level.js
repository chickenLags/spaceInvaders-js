
class Level extends Scene {

    entities = [];
    player;
    background;

    constructor() {
        super();
        this.entities = []; //???
        this.player = new Player();

        this.background = new Background("level2-background");
    }

    update() {
        this.entities.forEach(entity => entity.update());
    }

    render(context) {
        this.background.render(context);
        this.entities.forEach(entity => entity.render(context));
    }

    process(input) {
        // this.entities.forEach(ent => ent.process(input));
    }
}