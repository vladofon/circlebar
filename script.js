let params = new URLSearchParams(document.location.search);
let project = params.get("project");
let total = parseInt(params.get("total"), 10);
let used = parseInt(params.get("used"), 10);

var content = Math.ceil(used * 100 / total);
document.getElementById("progress-content").textContent = content;
document.getElementById("project").textContent = project;

if(content <= 50) {
  document.getElementById("progress").classList.add("less")
  console.log("workingg")
}
console.log(content)
document.documentElement.style.setProperty('--i', content);

console.log(style.getPropertyValue('--i'))
