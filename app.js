window.onload = function() {
  let content = document.querySelector("h1");
  let input = document.querySelector("#color");
  let butn = document.querySelector("button");
  butn.addEventListener("click", () => (content.style.color = input.value));
};
