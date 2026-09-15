document.addEventListener("DOMContentLoaded", () => {
    /*
    const searchForm = document.querySelector("#search-form");
    searchForm.classList.add("highlight");
    */

    const searchForm = document.getElementById("search-form");
    if (searchForm !== null) {
        searchForm.classList.add("highlight");
    }

    const badge = document.querySelector("#calendar a.badge");
    if (badge !== null) {
        badge.classList.add("highlight");
    }

    const teaching = document.querySelector("#m269-24j .card");
    if (teaching !== null) {
        teaching.classList.add("highlight");
    }

    const notice = document.querySelector("#notices > .alert:nth-child(3)");
    if (notice !== null) {
        notice.classList.add("highlight");
    }

    const seeMore = document.querySelector("#notices > .alert:nth-child(4) a ");
    if (seeMore !== null) {
        seeMore.classList.add("highlight");
    }

    const notices = document.querySelectorAll("#notices .blabla button");
    for (const notice of notices) {
        notice.classList.add("highlight");
    }
    console.log(notices.length);

    const badges = document.querySelectorAll("#calendar a.badge");
    for (const badge of badges) {
        badge.classList.add("highlight");
    }

    const assessments = document.querySelectorAll("#tm252-25b .col:nth-child(2) .card, #m269-24j .col:nth-child(2) .card");
    for (const assessment of assessments) {
        assessment.classList.add("highlight");
    }

    const forums = document.querySelectorAll(".col:nth-child(1) .card button:nth-child(2)");
    for (const forum of forums) {
        forum.classList.add("highlight");
    }
});
