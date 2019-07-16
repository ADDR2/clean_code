// Bad
Array.prototype.diff = function (comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
};

// Good
class SuperArray extends Array {
    constructor(...params) {
        super(...params);

        this.currentIndex = 0;
    }

    diff(comparisonArray) {
        const hash = new Set(comparisonArray);
        return this.filter(elem => !hash.has(elem));
    }

    next() {
        const nextPosition = (this.currentIndex++) % this.length;
        return !isNaN(nextPosition) ? this[nextPosition] : undefined;
    }
}