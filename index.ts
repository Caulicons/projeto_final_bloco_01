import menu from "./utils/menu";
import logo from "./utils/logo";

async function main() {
  await logo();
  while (true) {
    menu();
  }
}

main();
