
class Area {
    start;
    width;
    height;

    constructor(start, width, height) {
        this.start = start;
        this.width = width;
        this.height = height;
    }

    getLeft = () => this.start.x;
    getTop = () => this.start.y;
    getRight = () => this.getLeft() + this.width;
    getBottom = () => this.getTop() + this.height;
    getCenterX = () => this.getLeft() + (this.width / 2); 
    getCenterY = () => this.getTop() + (this.height / 2);

    intersects = (position) => {
        return (
            position.x > this.getLeft() &&
            position.x < this.getRight() &&
            position.y > this.getTop() &&
            position.y < this.getBottom()
        )
    }
}