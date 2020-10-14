class Paralelogramo{
    private "_lado1": number
    private "_lado2": number

// constructor

constructor (_lado1: number, _lado2: number){

    // métodos del constructor

    this.set_lado1(_lado1);
    this.set_lado2(_lado2);
    }

// Sets

public set_lado1(_lado1: number) : void{
    this._lado1 = _lado1;
}

public set_lado2(_lado2: number) : void{
    this._lado2 = _lado2;
}

// Gets

public get_lado1(): number {
    return this._lado1;
}

public get_lado2(): number {
    return this._lado2;
}

public area() : number {
    return ( this._lado1() * this._lado2() );
}

public perimetro() : number {
    return ( (2 * this._lado1()) + (2 * this._lado2()) );
}
}