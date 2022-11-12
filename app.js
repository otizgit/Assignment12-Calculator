const tab = document.querySelector(".tab");
const contents = Array.from(document.getElementsByClassName("content"));


contents.map((content) => {
  content.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        tab.innerText = "";
        tab.classList.remove("animate");
        break;
      case "←":
        if (tab.innerText) {
          tab.innerText = tab.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          tab.innerText = eval(tab.innerText);
        } catch {
          tab.innerText = "ERROR!";
          tab.classList.add("animate");
        }
        break;
      case "Trig.":
        tab.innerText = "";
        break;
      case "Back":
        tab.innerText = "";
        break;
      default:
        tab.innerText += e.target.innerText;
    }
  });
});
