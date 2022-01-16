

class Game {
    scene;

    constructor() {
        this.scene = new StartScreen()
    }

    update() {
        this.scene.update();
    }

    render(context) {
        this.scene.render(context);
    }

    process(input) {
        this.scene.process(input);
    }
}