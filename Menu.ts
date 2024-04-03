import leia = require("readline-sync");

export default function menu() {
  let input, id, nome, tipo, preco, polegadas, bocas;
  let tipoProduto = ["Fogao 🫙", "Televisao 📺"];

  do {
    console.log(`
1️⃣  - Listar todos os Produtos
2️⃣  - Listar Produto pelo ID
3️⃣  - Cadastrar Produto
4️⃣  - Atualizar Produto
5️⃣  - Deletar Produto
0️⃣  - Sair
  `);

    input = leia.questionInt("Escolha uma opcoe: ");
    console.log("\n");
    if (input < 0 || input > 5) {
      console.log("Opção inválida\n");
    }
  } while (input < 0 || input > 5);

  if (input == 0) {
    console.log("Volte sempre.👋");
    process.exit(0);
  }

  switch (input) {
    case 1:
      console.log("Listar todos os Produtos");

      break;
    case 2:
      console.log("Listar Produto pelo ID");

      break;
    case 3:
      console.log("Cadastrar Produto");

      break;
    case 4:
      console.log("Atualizar Produto");
      break;
    case 5:
      console.log("Deletar Produto");
      break;
  }
}
