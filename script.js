let form = document.querySelector("form");
let number = document.querySelector("input");
let text = document.querySelectorAll("input")[1];
let container = document.querySelector(".results");
let div = document.createElement("div");
let section = document.createElement("section");
form.onsubmit = apply;
function apply(e) {
  e.preventDefault();
  container.innerHTML = "";
  let type = document.querySelector("select").value;
  let content = text.value;
  div.textContent = content;
  section.textContent = content;
  div.classList.add("box");
  div.classList.add("box");
  section.setAttribute("class", "box");
  div.setAttribute("title", "Element");
  section.setAttribute("title", "Element");
  if (type === "Div") {
    for (let i = 1; i <= number.value; i++) {
      container.appendChild(div.cloneNode(true));
      let id = `id-${i}`;
      div.setAttribute("id", id);
    }
  } else if (type === "Section") {
    for (let i = 1; i <= number.value; i++)
      container.appendChild(section.cloneNode(true));
  }
}
