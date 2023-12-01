// It needs to wait until the thing loads, find the thing, add a click, and copy to clipboard onclick.

// NONE OF THESE WORK; I tried them in this order:
// #1:
// document.getElementById('btn').addEventListener('click', copyVague()); getElement returns null.
// #2:
// document.querySelector("#btn").addEventListener("click", copyVague()); querySelector returns null.
// #3:
// document.addEventListner("DOMContentLoaded", function() {
//   document.querySelector("#btn").addEventListener("click", copyVague());
// }); says document.addEventListener is not a function.  (document is null probably?)
// #4:
// document.addEventListner("DOMContentLoaded", function() {
//     document.getElementById('btn').addEventListener("click", copyVague());
//   }); same old same.

document.getElementById("btn").addEventListener("click", () => {
  const text = document.getElementById("phrase").innerHTML;
  navigator.clipboard.writeText(text);
  console.log(text);
});
