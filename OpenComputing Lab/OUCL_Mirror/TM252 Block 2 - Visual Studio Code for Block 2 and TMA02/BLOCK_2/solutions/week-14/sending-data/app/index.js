async function loadNotices() {
    const notices = document.querySelector("#notices");
    const response = await fetch("api/notices");
    const data = await response.json();
    console.log(data);
    for (const placeholder of notices.querySelectorAll(".placeholder-glow")) {
        placeholder.remove();
    }
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
        notice.querySelector("button").addEventListener("click", async () => {
            await fetch("api/notices/seen/" + item.id, {
                method: "POST",
            });
        });
    }
}

async function runSearch(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const response = await fetch("api/search", {
        method: "POST",
        body: formData,
    });
    const data = await response.text()
    alert(data);
}

document.addEventListener("DOMContentLoaded", () => {
    loadNotices();
    document.querySelector("#search-form").addEventListener("submit", runSearch);
});
