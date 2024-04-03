import leia = require("readline-sync");

export default function keyPress() {
  leia.question("\nPressione <Enter> para continuar...", {
    hideEchoBack: true,
    mask: "",
  });
}
