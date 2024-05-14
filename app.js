let a = document.getElementById("text")
let b = document.getElementById("btn")
flag = 0;


b.addEventListener("click", function change() {
    if (flag == 0) {
        b.innerHTML = `CLICK TO UNBUY`
        a.innerHTML = `YOU SELECTED THIS CAR`
        b.style = "none"
        flag = 1
    }
    else {
        b.style.backgroundColor = "red"
        b.innerHTML = `CLICK TO BUY`
        a.innerHTML = `CLICK TO BUY BELOW`
        flag = 0;
    }



})