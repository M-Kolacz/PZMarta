export class CustomError extends Error {
    constructor(message?: string, public statusCode?: number) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);
    }
}
