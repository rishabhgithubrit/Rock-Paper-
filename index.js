const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerpoints = document.querySelector(".computerpoints");
const playerpoints = document.querySelector(".playerpoints");
const options = document.querySelectorAll(".option button");
options.forEach(options => {
    options.addEventListener("click",()=>{
        computer.classList.add("shakecomputer");
        computer.classList.add("shakecomputer");
    })
});