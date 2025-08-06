console.log(document.getElementsByClassName("class1"));
console.log(document.getElementsByClassName("class3"));

const listItems = document.querySelectorAll("li");
const listItems2 = document.getElementsByClassName("class3")[0].childNodes[1].querySelectorAll("li");

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
