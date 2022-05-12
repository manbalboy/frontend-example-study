export class Keyboard {
  #swichEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#swichEl = document.getElementById("switch");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", (evnet) => {
      document.documentElement.setAttribute(
        "theme",
        evnet.target.checked ? "dark-mode" : ""
      );
      console.log(evnet.target.checked);
    });
  }
}
