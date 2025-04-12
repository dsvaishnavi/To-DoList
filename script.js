var text = document.getElementById("input-box");
var list = document.getElementById("list-container");

function enterTodo() {
  if (text.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li"); //html elememt of li
    li.innerHTML = text.value; //li contain the value enter in text
    list.appendChild(li);
    text.value = ""; //clear the value after done
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";       //for x icon
    li.appendChild(span);
  }
}

list.addEventListener( "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },false);

