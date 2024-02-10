import { setValue } from "../utils/functions";
import { data } from "../constants/data";

async function main() {
  const startButton = createButton();
  document.body.appendChild(startButton);
  startButton.addEventListener("click", startProcessing);
}

function startProcessing() {
  const inputsInPage = document.querySelectorAll("input");
  const selectInPage = document.querySelectorAll("select");
  inputsInPage.forEach((input) => {
    setValue(input, data[input.name]);
  });

  selectInPage.forEach((select) => {
    setValue(select, data[select.name]);
  });
}

function createButton() {
  const btnEl = document.createElement("button");
  btnEl.classList.add("_simplegovautofill_button");
  btnEl.textContent = "🔋";

  return btnEl;
}

main();