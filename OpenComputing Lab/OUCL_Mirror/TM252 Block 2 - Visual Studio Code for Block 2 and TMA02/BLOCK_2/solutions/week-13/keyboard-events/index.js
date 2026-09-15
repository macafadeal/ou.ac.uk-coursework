function buttonKeyUp(ev) {
    if (ev.key === "ArrowLeft") {
        if (ev.currentTarget.previousElementSibling) {
            ev.currentTarget.previousElementSibling.focus();
        }
    } else if (ev.key === "ArrowRight") {
        if (ev.currentTarget.nextElementSibling) {
            ev.currentTarget.nextElementSibling.focus();
        }
    } else if (ev.key === "Home") {
        const first = ev.currentTarget.parentElement.querySelector(".btn:first-child");
        if (first) {
            first.focus();
        }
    } else if (ev.key === "End") {
        const last = ev.currentTarget.parentElement.querySelector(".btn:last-child");
        if (last) {
            last.focus();
        }
    }    
}


function buttonKeyDown(ev) {
    if (ev.key === "Home" || ev.key === "End") {
        ev.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-group .btn");
    for (const button of buttons) {
        button.addEventListener("keyup", buttonKeyUp);
        button.addEventListener("keydown", buttonKeyDown);
    }
});
