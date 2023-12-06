document.getElementById("btn").addEventListener("click", () => {
  const text = document.getElementById("phrase").innerHTML;
  navigator.clipboard.writeText(text);
  console.log(text);
});
