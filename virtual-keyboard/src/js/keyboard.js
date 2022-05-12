export class Keyboard {
  #swichEl;
  #fontSelectEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#swichEl = document.getElementById("switch");
    this.#fontSelectEl = document.getElementById("font");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", (evnet) => {
      document.documentElement.setAttribute(
        "theme",
        evnet.target.checked ? "dark-mode" : ""
      );
      console.log(evnet.target.checked);
    });

    this.#fontSelectEl.addEventListener("change", (event) => {
      document.body.style.fontFamily = event.target.value;
    });
  }
}
