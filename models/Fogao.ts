import Produto from "./Produto";

export default class Fogao extends Produto {
  private _bocas: number;
  constructor(
    id: number,
    nome: string,
    preco: number,
    tipo: number,
    bocas: number
  ) {
    super(id, nome, preco, tipo);
    this._bocas = bocas;
  }

  public get bocas(): number {
    return this._bocas;
  }

  public set bocas(bocas: number) {
    this._bocas = bocas;
  }
  public visualizar(): void {
    super.visualizar();
    console.log(`Bocas: ${this._bocas}`);
  }
}
