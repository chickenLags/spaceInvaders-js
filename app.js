
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let game = new Game();
let input = new InputHandler();

function step() {
    game.update();
    game.render(context);
    game.process(input);
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);