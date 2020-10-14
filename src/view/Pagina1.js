"use strict";
class Paralelogramo {
    // constructor
    constructor(_lado1, _lado2) {
        // métodos del constructor
        this.set_lado1(_lado1);
        this.set_lado2(_lado2);
    }
    // Sets
    set_lado1(_lado1) {
        this._lado1 = _lado1;
    }
    set_lado2(_lado2) {
        this._lado2 = _lado2;
    }
    // Gets
    get_lado1() {
        return this._lado1;
    }
    get_lado2() {
        return this._lado2;
    }
    area() {
        return (this._lado1() * this._lado2());
    }
    perimetro() {
        return ((2 * this._lado1()) + (2 * this._lado2()));
    }
}
