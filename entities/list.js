

class List extends Entity {
    items = [];
    position;

    constructor(position, items) {
        super();
        this.position = position;
        this.setItems(items);
    }

    setItems(items) {
        this.items = items;
        this.items.forEach((item, index) => {
            item.setArea(this.getArea(item, index));
        })
    }

    getArea = (item, index) => {
        let left = this.getLeft() + this.padding;
        let top = this.getTop() + this.padding + (index * (this.padding + this.rowHeight));
        let width = this.getWidth() - (this.padding * 2);
        return new Area( 
            new Position(left, top), 
            width, 
            this.rowHeight
        );
    }

    update() {
        this.items.forEach(item => {
            item.update();
        })
    }

    render(context) {
        context.strokeStyle = "#FF0000";
        context.strokeRect(this.getLeft(), this.getTop(), this.getWidth(), this.getHeight());
        this.items.forEach((item, index) => item.render(context));
    }

    process(input) {
        this.items.forEach(item => item.process(input));
    }

    getLeft = () => this.position.x - (this.getWidth() / 2); 

    getTop = () => this.position.y - (this.getHeight() / 2);

    getHeight = () => this.items.length * (this.rowHeight + this.padding * 2) - this.padding * 2;

    getWidth = () => 300 + (this.padding * 2);

    rowHeight = 60;

    padding = 10;
}