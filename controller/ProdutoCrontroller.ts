import Produto from "../models/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export default class ProdutoController implements ProdutoRepository {
  private listaProdutos = new Array<Produto>();
  private id = 0;
  // CRUD
  procurarPorId(id: number): void {
    let buscaproduto = this.buscarNaLista(id);

    if (buscaproduto !== null) buscaproduto.visualizar();
    else console.log("\nproduto não foi Encontrado! ❌");
  }
  listarTodos(): void {
    if (this.listaProdutos.length == 0) {
      console.log(
        "\nA lista de produtos está vazia. 😭 Adicione um produto na opção 3."
      );
      return;
    }
    for (const p of this.listaProdutos) {
      p.visualizar();
    }
  }
  cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log("Produto foi adicionado! ✅");
  }
  atualizar(produto: Produto): void {
    let buscaProduto = this.buscarNaLista(produto.id);

    if (buscaProduto !== null) {
      this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
      console.log(
        `A produto número ${produto.id} foi Atualizado com êxito! ✅`
      );
    } else console.log("\nProduto não foi Encontrado! ❌");
  }
  deletar(id: number): void {
    let buscaProduto = this.buscarNaLista(id);

    if (buscaProduto !== null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
      console.log(`A produto número ${id} foi Excluído com êxito! 🗑️`);
    } else console.log("\nProduto não foi Encontrado! ❌");
  }

  // Utils
  gerarId() {
    return ++this.id;
  }

  buscarNaLista(id: number): Produto | null {
    for (let produto of this.listaProdutos) {
      if (produto.id === id) return produto;
    }

    return null;
  }
}
