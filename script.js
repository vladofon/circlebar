var style = window.getComputedStyle(document.body)
console.log(style.getPropertyValue('--i'))

var content = document.getElementById("progress-content").textContent.slice(0, -1);
if(content <= 50) {
  document.getElementById("progress").classList.add("less")
  console.log("workingg")
}
console.log(content)
document.documentElement.style.setProperty('--i', content);

console.log(style.getPropertyValue('--i'))
