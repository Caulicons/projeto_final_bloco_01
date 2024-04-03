import Produto from "./Produto.js";

export default class Televisao extends Produto {
  private _polegadas: number;
  constructor(
    id: number,
    nome: string,
    preco: number,
    tipo: number,
    polegadas: number
  ) {
    super(id, nome, preco, tipo);
    this._polegadas = polegadas;
  }

  public get polegadas(): number {
    return this._polegadas;
  }

  public set polegadas(polegadas: number) {
    this._polegadas = polegadas;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Polegadas: ${this._polegadas}`);
  }
}
