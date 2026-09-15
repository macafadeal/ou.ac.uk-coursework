function highlighter(ev) {
    ev.currentTarget.parentElement.classList.toggle("highlight");
}

function mouseenter(ev) {
    ev.currentTarget.parentElement.classList.add("highlight");
}

function mouseleave(ev) {
    ev.currentTarget.parentElement.classList.remove("highlight");
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-group .btn");
    for (const button of buttons) {
        button.addEventListener("click", highlighter);
        button.addEventListener("mouseenter", mouseenter);
        button.addEventListener("mouseleave", mouseleave);
    }
});