document.addEventListener("DOMContentLoaded", () => {
    /*
    const notice = document.querySelector("#notices > .alert:nth-child(3)");
    if (notice !== null) {
        notice.classList.add("highlight");
        const noticeBoard = notice.parentElement;
        noticeBoard.classList.add("highlight");
    }

    const button = document.querySelector("#tm252-25b .col:nth-child(1) button");
    button.parentElement.classList.add("highlight");

    
    const buttonGroup = document.querySelector("#tm252-25b .col:nth-child(1) .btn-group");
    for (const button of buttonGroup.children) {
        for (const svg of button.children) {
            svg.classList.add("highlight");
        }
    }
    
    const buttonGroup = document.querySelector("#tm252-25b .col:nth-child(1) .btn-group");
    for (const svg of buttonGroup.querySelectorAll("svg")) {
        svg.classList.add("highlight");
    }

    const firstCard = document.querySelector("#tm252-25b")
    const cards = firstCard.parentElement.querySelectorAll(":scope > .card");
    for (const card of cards) {
        const teachingCard = card.querySelector(".col:nth-child(1) .card");
        teachingCard.classList.add("highlight");
    }
    */

    const notice = document.querySelector("#notices > .alert:nth-child(3)");
    if (notice !== null) {
        if (notice.nextElementSibling !== null && notice.nextElementSibling.classList.contains("alert")) {
            notice.nextElementSibling.classList.add("highlight");
        }
    }

    const button = document.querySelector("#tm252-25b .col:nth-child(1) button");
    button.nextElementSibling.nextElementSibling.classList.add("highlight");
});
