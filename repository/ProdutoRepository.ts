import Produto from "../models/Produto.js";

export interface ProdutoRepository {
  // Métodos do CRUD ( Create, Read, Update, Delete)
  procurarPorId(id: number): void;
  listarTodos(): void;
  cadastrar(produto: Produto): void;
  atualizar(produto: Produto): void;
  deletar(id: number): void;
}
