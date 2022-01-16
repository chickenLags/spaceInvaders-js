

class Background extends Entity {
    htmlId;
    image;
    area;

    constructor(htmlId) {
        super();
        this.htmlId = htmlId;
        this.image = document.getElementById(htmlId);
        this.area = new Area(
            new Position(0, 0),
            window.innerWidth,
             window.innerHeight
        );
    }
    
    update() {
        // pass
    }

    render(context) {
        context.drawImage(this.image, this.area.start.x, this.area.start.y, this.area.width, this.area.height);
    }
}