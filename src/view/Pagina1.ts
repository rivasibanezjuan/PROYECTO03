export class Paralelogramo{
    private _lado1: number
    private _lado2: number

// constructor

constructor (_lado1: number, _lado2: number){

    // métodos del constructor

    this._lado1 = _lado1
    this._lado2 = _lado2
    }

// Sets

set lado1(_lado1: number){
    this._lado1 = _lado1;
}

set lado2(_lado2: number){
    this._lado2 = _lado2;
}

// Gets

get lado1(): number {
    return this._lado1;
}

get lado2(): number {
    return this._lado2;
}

area = () => this._lado1 * this._lado2

perimetro = () => 2 * this._lado1 + 2 * this._lado2

}