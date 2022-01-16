
class NoAreaImplementedError extends Error {
    constructor() {
        super();
        this.message = "area was not set/implemented on entity";
    }
}