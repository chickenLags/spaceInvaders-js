

class Button extends Entity {
    label;
    callback;
    area;
    padding = 10;
    backgroundColor = "#FF223377";

    constructor(label, callback) {
        super();
        this.label = label;
        this.callback = callback;
    }

    update() {
        // console.log(`button "${this.label}" update`)
    }

    render(context) {
        if (!this.area) {
            throw new NoAreaImplementedError();
        }

        context.fillStyle = this.backgroundColor;
        context.fillRect(this.area.getLeft(), this.area.getTop(), this.area.width, this.area.height );

        context.fillStyle = "#000000";
        context.font = "50px serif";
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.fillText(this.label, this.area.getCenterX(), this.area.getCenterY());
    }

    process(input) {
        if (!this.area) {
            throw new NoAreaImplementedError();
        }

        if(this.clicked(input)) {
            this.callback();
        }

        if (this.hovers(input)) {
            this.backgroundColor = "#FF2233AA";
            
        } else {
            this.backgroundColor = "#FF223377";
        }
    }

    hovers = (input) => {
        return this.area.intersects(input.getMousePos())
    }

    clicked = () => {
        return input.getMouseDown(0) && this.hovers(input);
    }

    setArea(area) {
        this.area = area;
    }

    onClick() {
        console.log(`button "${this.label}" onClick`)
        this.callback();
    }
}