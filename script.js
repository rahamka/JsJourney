let btn = document.getElementById("btn");
let paraElement = document.getElementById("para");
let h1 = document.createElement("h1");
h1.innerText = "Lexical and Block Scope";
h1.setAttribute("id", "para");

let deleteVal = true;

btn.addEventListener("click", () => {
  if (deleteVal == true) {
    document.body.firstElementChild.remove();
    deleteVal = false;
    btn.innerText = "Undo";
  } else {
    document.body.prepend(h1);
    btn.innerText = "Delete Element";
    deleteVal = true;
  }
});
