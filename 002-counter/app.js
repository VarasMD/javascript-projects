let count = 0;

const btns = document.querySelectorAll(".btn");
const number = document.querySelector("#value");

btns.forEach((btn) => {
    btn.addEventListener("click", (element) => {
        const styles = element.currentTarget.classList;

        setCount(styles);
        setColorNumber(count);

        number.textContent = count;
    })
})

function setCount(styles) {
    if(styles.contains("decrease")) {
        count--;
    } else if (styles.contains("increase")){
        count++;
    } else {
        count = 0;
    }
}

function setColorNumber(count) {
    if(count > 0) {
        number.style.color = "green";
    } else if (count < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }
}



