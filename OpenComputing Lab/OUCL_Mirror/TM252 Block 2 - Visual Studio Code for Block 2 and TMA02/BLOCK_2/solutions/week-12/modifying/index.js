document.addEventListener("DOMContentLoaded", () => {
    /*
    const button = document.querySelector("#tm252-25b .col:nth-child(1) button:nth-child(2)");
    button.classList.remove("btn-outline-primary");
    button.classList.add("btn-outline-secondary");


    const notice = document.querySelector("#notices > .alert:nth-child(3)");
    notice.classList.remove("alert-success");
    notice.classList.add("alert-danger");

    const heading = document.querySelector("h1");
    heading.classList.toggle("visually-hidden");
    
    const headings = document.querySelectorAll("h1, h2, h3, h4");
    for (const heading of headings) {
        heading.classList.toggle("visually-hidden");
    }

    const button = document.querySelector("#tm252-25b .col:nth-child(1) button:nth-child(2)");
    button.classList.remove("btn-outline-primary");
    button.classList.add("btn-outline-secondary");
    button.setAttribute("disabled", "");

    const notice = document.querySelector("#notices > .alert:nth-child(3)");
    notice.classList.remove("alert-success");
    notice.classList.add("alert-danger");
    notice.setAttribute("aria-live", "polite");
    */

    const notice = document.querySelector("#notices > .alert:nth-child(3)");
    notice.classList.remove("alert-success");
    notice.classList.add("alert-danger");
    notice.setAttribute("aria-live", "polite");
    const para = notice.querySelector("p");
    para.innerHTML = "TMA02 due in <strong>8 days</strong>";

    const tma02Para = document.querySelector("#tm252-25b > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)");
    tma02Para.innerHTML = "TMA02 is due on the <strong>28<sup>th</sup></strong> May 2025 at 12:00 noon";
});
