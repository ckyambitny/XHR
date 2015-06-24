if (!Array.prototype.includes) {
    Array.prototype.includes = function (x) {
        return this.indexOf(x) >= 0;
    };
}
