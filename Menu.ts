import leia = require("readline-sync");
import keyPress from "./utils/keyPress.js";
import Fogao from "./models/Fogao.js";
import Televisao from "./models/Televisao.js";
import Produto from "./models/Produto.js";
import ProdutoController from "./controller/ProdutoCrontroller.js";
const produtosController = new ProdutoController();

const fogao = new Fogao(produtosController.gerarId(), "Fogão", 2000, 1, 5);
const televisao = new Televisao(
  produtosController.gerarId(),
  "Televisão",
  3000,
  2,
  55
);

produtosController.cadastrar(fogao);
produtosController.cadastrar(televisao);

function menu() {
  let input, id, nome, tipo, preco, polegadas, bocas;
  let tipoProduto = ["Fogão", "Televisão"];

  do {
    console.log(`
[1] - Listar todos os Produtos
[2] - Listar Produto pelo ID
[3] - Cadastrar Produto
[4] - Atualizar Produto
[5] - Deletar Produto
[0] - Sair
  `);

    input = leia.questionInt("Escolha uma opção: ");
    console.log("\n");
    if (input < 0 || input > 5) {
      console.log("Opção inválida\n");
    }
  } while (input < 0 || input > 5);

  if (input == 0) {
    console.log("Volte sempre.");
    process.exit(0);
  }

  switch (input) {
    case 1:
      console.log("Listar todos os Produtos");
      produtosController.listarTodos();
      break;
    case 2:
      console.log("Listar Produto pelo ID");
      id = leia.questionInt("Digite o ID do produto: ");
      produtosController.procurarPorId(id);
      break;
    case 3:
      console.log("Cadastrar Produto");
      nome = leia.question("Digite o Nome do Produto: ");
      tipo = leia.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
      preco = leia.questionFloat("Digite o preço: ");

      if (tipo == 1) {
        bocas = leia.questionInt("Digite o número de bocas: ");
        produtosController.cadastrar(
          new Fogao(produtosController.gerarId(), nome, preco, tipo, bocas)
        );
        break;
      } else if (tipo == 2) {
        polegadas = leia.questionInt("Digite o número de polegadas: ");
        produtosController.cadastrar(
          new Televisao(
            produtosController.gerarId(),
            nome,
            preco,
            tipo,
            polegadas
          )
        );
        break;
      }

      break;
    case 4:
      id = leia.questionInt("Digite o Id do Produto: ");

      let produto = produtosController.buscarNaLista(id);
      if (produto !== null) {
        nome = leia.question("Digite o Novo nome do Produto: ");
        tipo = produto.tipo;
        preco = leia.questionFloat("Digite o preco: ");

        switch (tipo) {
          case 1:
            bocas = leia.questionInt("Digite o número de bocas: ");
            produtosController.atualizar(
              new Fogao(id, nome, preco, tipo, bocas)
            );

            break;
          case 2:
            polegadas = leia.questionInt("Digite o número de polegadas: ");
            produtosController.atualizar(
              new Televisao(id, nome, preco, tipo, polegadas)
            );
            break;
        }
      } else console.log("Produto não Encontrado!");
      break;
    case 5:
      id = leia.questionInt("Digite o Id do Produto: ");
      produtosController.deletar(id);
      break;
  }

  keyPress();
}

while (true) {
  menu();
}
