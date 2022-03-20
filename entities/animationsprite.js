
class AnimationSprite extends Entity{

    constructor(sheet, area, frames, columns) {
        super();
        this.sheet = document.getElementById('spritesheet');
        this.area = area;
        this.frames = frames;
        this.frame = 0;
        this.columns = columns;
        this.interval = setInterval(this.updateFrame, 1000)
    }

    updateFrame = () => {
        this.frame = ++this.frame % this.frames
    }

    update = () => {

    }

    render = (context) => {
        context.drawImage(
            this.sheet, 
            this.area.getLeft() + (this.frame * this.area.width),
            this.area.getTop() + (this.frame ),
            this.area.width,
            this.area.height,
            0, 0, 100, 100
        )
    }

    process = () => {

    }
}