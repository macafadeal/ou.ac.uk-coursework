function highlighter(ev) {
    /*
    console.log(ev.target);
    console.log(ev.currentTarget);
    */
    console.log("button");
    ev.stopPropagation();
}

function anyClick(ev) {
    console.log("body");
}

function captureAnyClick(ev) {
    console.log("Capture body")
}
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-group .btn");
    for (const button of buttons) {
        button.addEventListener("click", highlighter);
    }
    document.querySelector("body").addEventListener("click", anyClick);
    document.querySelector("body").addEventListener("click", captureAnyClick, { capture: true });
});