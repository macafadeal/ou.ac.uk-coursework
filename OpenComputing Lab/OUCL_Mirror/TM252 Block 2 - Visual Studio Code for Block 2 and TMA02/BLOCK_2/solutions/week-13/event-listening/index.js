function badgeClickHandler(ev) {
    ev.preventDefault();
    alert("Clicked!");
    ev.currentTarget.removeEventListener("click", badgeClickHandler);
}

function highlighter(ev) {
    ev.currentTarget.classList.add("highlight");
}

document.addEventListener("DOMContentLoaded", () => {
    const badges = document.querySelectorAll("#calendar .badge");
    for (const badge of badges) {
        badge.addEventListener("click", badgeClickHandler);
    }

    const buttons = document.querySelectorAll(".btn-group .btn");
    for (const button of buttons) {
        button.addEventListener("click", highlighter);
    }
});
