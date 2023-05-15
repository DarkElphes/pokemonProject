const btnChangeTheme = document.getElementById("btn-change-theme");
const body = document.querySelector("body");
const imgBtnChangeTheme = document.querySelector(".img-btn"); 

btnChangeTheme.addEventListener("click", () => {
    const activateDarkMode = body.classList.contains("dark-mode")
    body.classList.toggle("dark-mode")
    if(activateDarkMode){
        imgBtnChangeTheme.setAttribute("src", "./src/img/sun.png");
    }
    else{
        imgBtnChangeTheme.setAttribute("src", "./src/img/moon.png");
    }
})
