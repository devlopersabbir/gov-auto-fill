import { data } from "../constants/data";

function setValue(element, value) {
  let lastValue = element.value;
  element.value = value;
  let event = new Event("input", { target: element, bubbles: true });
  // React 15
  event.simulated = true;
  // React 16
  let tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  element.dispatchEvent(event);
}

async function main() {
  const startButton = createButton();
  document.body.appendChild(startButton);

  startButton.addEventListener("click", startProcessing);
}

function startProcessing() {
  const inputsInPage = document.querySelectorAll("input");
  const selectInPage = document.querySelectorAll("select");
  inputsInPage.forEach((input) => {
    if (input.name === "dateOfBirth") {
      Array.from(data["dateOfBirth"]).forEach((item, i) => {
        if (i === 1) {
          setValue(document.querySelector('select[name="dateOfBirth"]'), item);
        }
        setValue(input, item);
      });
    }
    setValue(input, data[input.name]);
  });

  selectInPage.forEach((select) => {
    setValue(select, data[select.name]);
  });
}

function createButton() {
  const btnEl = document.createElement("button");
  btnEl.classList.add("__simple__gov__auto__fill__button");
  btnEl.textContent = "🔋";

  return btnEl;
}

main();
