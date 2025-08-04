const listItems = document.querySelectorAll("li");
const listItems2 = document.getElementsByClassName("old-websites")[0].childNodes[1].querySelectorAll("li");

console.log(document.getElementsByClassName("big-ul"));
console.log(document.getElementsByClassName("old-websites"));

function toggleDone(e) {
  // console.log(e);
  // console.log(e.target.className);
  
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

console.log("listItems2[0].innerHTML: " + listItems2[0].innerHTML);

listItems2.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
