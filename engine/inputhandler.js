

class KeyboardEvent {
    action; // down, up, pressed
    keyCode; // "a, b, c, etc"

    constructor(keyboardEvent) {
        this.action = 0;
    }
}

class KeyState {
    static DOWN = 0;
    static UP = 1;
}

class InputHandler {
    mousePosition = new Position(0,0);
    mouse = []; 
    keyboard = [];

    constructor() {
        canvas.addEventListener("mousedown", this.setMouseDown);
        canvas.addEventListener("mouseup", this.setMouseUp);
        canvas.addEventListener("mousemove", this.setMouseMove);
        canvas.addEventListener("keydown", this.setKeyDown);
        canvas.addEventListener("keyup", this.setKeyUp);
    }

    setMouseDown = (mEvent) => 
    {
        this.mouse[mEvent.button] = KeyState.DOWN;
        console.log(this.mouse, mEvent);

    }
    setMouseUp = (mEvent) => this.mouse[mEvent.button] = KeyState.UP;
    setMouseMove = (mEvent) => {
        this.mousePosition.x = mEvent.offsetX; 
        this.mousePosition.y = mEvent.offsetY;
    }
    

    setKeyDown = (keyboardEvent) => { this.keyboard[keyboardEvent.key] = KeyState.UP; }
    setKeyUp = (keyboardEvent) => this.keyboard[keyboardEvent.key] = KeyState.DOWN;
    
    getKeyDown = (key) => this.keyboard[key] === KeyState.DOWN;
    getKeyUp = (key) => this.keyboard[key] === KeyState.UP;

    getMousePos = ()  => this.mousePosition;
    getMouseUp = (btn) => this.mouse[btn] === KeyState.UP;
    getMouseDown = (btn) => this.mouse[btn] === KeyState.DOWN;
}