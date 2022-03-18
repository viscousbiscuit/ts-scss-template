document.getElementById("mainbtn").addEventListener("click", clickFunction);

function clickFunction() {
  const menu = document.getElementById("menu-array");
  const list = document.createElement("li");
  const img = document.createElement("img");
  img.src = "images/b7e.jpg";

  list.appendChild(img);
  menu.appendChild(list);
  console.log("click");
}
