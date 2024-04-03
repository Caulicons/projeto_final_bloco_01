export default abstract class Produto {
  private _id: number;
  private _nome: string;
  private _preco: number;
  private _tipo: number;

  // Tipo 1 - Fogão
  // Tipo 2 - Televisão
  constructor(id: number, nome: string, preco: number, tipo: number) {
    this._id = id;
    this._nome = nome;
    this._preco = preco;
    this._tipo = tipo;
  }

  // Getters -----------------------------------------------------------------------

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get preco(): number {
    return this._preco;
  }

  public get tipo(): number {
    return this._tipo;
  }

  // Setters -----------------------------------------------------------------------

  public set id(id: number) {
    this._id = id;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public set preco(preco: number) {
    this._preco = preco;
  }

  public set tipo(tipo: number) {
    this._tipo = tipo;
  }

  public visualizar(): void {
    console.log(`
****************************************************************    
ID: ${this._id}
Nome: ${this._nome}
Preço: R$ ${this._preco.toFixed(2)}
Tipo: ${this._tipo == 1 ? "Fogão 🫙" : "Televisão 📺"}`);
  }
}
