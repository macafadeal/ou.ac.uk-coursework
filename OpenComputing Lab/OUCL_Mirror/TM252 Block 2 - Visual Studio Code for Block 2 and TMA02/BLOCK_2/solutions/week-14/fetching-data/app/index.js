async function loadNotices() {
    const response = await fetch("api/notices");
    const data = await response.json();
    const notices = document.querySelector("#notices");
    for (const item of data) {
        const notice = document.createElement("div");
        notice.classList.add("alert");
        if (item.category === "upcoming") {
            notice.classList.add("alert-success");
        } else if (item.category === "information") {
            notice.classList.add("alert-info");
        } else {
            notice.classList.add("alert-primary")
        }
        notice.setAttribute("aria-live", "polite");
        notice.innerHTML =
            '<div class="position-absolute top-0 end-0"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>' +
            '<p>' + item.text + '</p>' +
            '<div class="text-end"><a href="#" class="alert-link">See more...</a></div>';
        notices.appendChild(notice);
    }
    for (const placeholder of notices.querySelectorAll(".placeholder-glow")) {
        placeholder.remove();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadNotices();
});
