function setupSubmitAssessmentDialog(portal) {
    const triggers = document.querySelectorAll("button[aria-label='Submit this assessment']");
    for (const trigger of triggers) {
        trigger.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.setAttribute("class", "position-fixed top-0 start-0 vw-100 vh-100 z-3 bg-secondary bg-opacity-75")
            portal.appendChild(overlay);
            const dialog = document.createElement("div");
            dialog.setAttribute("id", "submit-assessment-dialog");
            dialog.setAttribute("role", "dialog");
            dialog.setAttribute("aria-labelledby", "submit-assessment-dialog-title");
            dialog.setAttribute("aria-modal", "true");
            dialog.setAttribute("class", "position-fixed top-50 start-50 z-3 translate-middle bg-white rounded overflow-hidden border border-primary shadow");
            dialog.innerHTML = '<h2 id="submit-assessment-dialog-title" class="px-4 py-2 border-bottom border-primary">Submit your assessment</h2>' +
                '<form action="#" class="px-4 py-2"><label><span class="d-block fw-bold">Select the file to submit</span><input type="file"/></label>' +
                '<div class="pt-4 pb-2 text-end"><button type="button" class="btn btn-secondary me-4">Don\'t submit</button>' +
                '<button type="submit" class="btn btn-success">Submit now</button></div></form>';
            portal.appendChild(dialog);

            trigger.setAttribute("aria-controls", "submit-assessment-dialog");

            function close() {
                overlay.remove();
                dialog.remove();
                trigger.focus();
                for (const child of document.querySelector("body").children) {
                    if (child.hasAttribute("inert")) {
                        child.removeAttribute("inert");
                    }
                }
                trigger.removeAttribute("aria-controls");
            }

            const form = dialog.querySelector("form");
            form.addEventListener("submit", (ev) => {
                ev.preventDefault();
                close();
            });

            const dontSubmit = dialog.querySelector("button[type='button']");
            dontSubmit.addEventListener("click", () => {
                close();
            });

            overlay.addEventListener("click", () => {
                close();
            });

            dialog.addEventListener("keyup", (ev) => {
                if (ev.key === "Escape") {
                    close();
                }
            });

            for (const child of document.querySelector("body").children) {
                if (child !== portal) {
                    child.setAttribute("inert", "");
                }
            }
            const focusTarget = dialog.querySelector("input");
            focusTarget.focus();
        });
    }
}


function setupNoticeBoardSwitch() {
    const modules = $("#modules");
    const notices = $("#notices");
    const noticesSwitch = notices.find("button[role=switch]");
    const noticesSwitchToggle = noticesSwitch.children().first();

    noticesSwitch.click(() => {
        const state = noticesSwitch.attr("aria-checked");
        if (state === "false") {
            noticesSwitch
                .attr("aria-checked", "true")
                .removeClass("bg-white")
                .addClass("bg-primary");
            noticesSwitchToggle
                .removeClass("bg-primary")
                .addClass("bg-white")
                .css("left", "1.4rem");
            notices.find("h2")
                .removeClass("d-none")
                .removeAttr("inert");
            notices.find(".alert").removeClass("d-none");
            notices
                .addClass("col-3")
                .removeClass("col-1")
            modules
                .addClass("col-6")
                .removeClass("col-8");
        } else {
            noticesSwitch
                .attr("aria-checked", "false")
                .addClass("bg-white")
                .removeClass("bg-primary");
            noticesSwitchToggle
                .addClass("bg-primary")
                .removeClass("bg-white")
                .css("left", "0.5rem");
            notices.find("h2")
                .addClass("d-none")
                .attr("inert", "");
            notices.find(".alert")
                .addClass("d-none");
            notices
                .removeClass("col-3")
                .addClass("col-1");
            modules
                .removeClass("col-6")
                .addClass("col-8");
        }
    });
}

function setupToolbar(toolbar) {
    const buttons = toolbar.querySelectorAll("button");
    let focusButton = null;
    for (let idx = 0; idx < buttons.length; idx++) {
        const button = buttons[idx];
        if (idx === 0) {
            button.setAttribute("tabindex", "0");
            focusButton = button;
        } else {
            button.setAttribute("tabindex", "-1");
        }
        button.addEventListener("keyup", (ev) => {
            let newFocusButton = null;
            if (ev.key === "ArrowLeft") {
                newFocusButton = _.nth(buttons, idx - 1);
            } else if (ev.key === "ArrowRight") {
                newFocusButton = _.nth(buttons, idx + 1);
                if (newFocusButton === undefined) {
                    newFocusButton = _.head(buttons);
                }
            } else if (ev.key === "Home") {
                newFocusButton = _.head(buttons);
            } else if (ev.key === "End") {
                newFocusButton = _.last(buttons);
            }
            if (newFocusButton !== null) {
                if (focusButton !== null) {
                    focusButton.setAttribute("tabindex", "-1");
                }
                focusButton = newFocusButton;
                focusButton.focus();
                focusButton.setAttribute("tabindex", "0");
            }
        });
    }
    toolbar.addEventListener("keydown", (ev) => {
        if (ev.key === "Home" || ev.key === "End") {
            ev.preventDefault();
        }
    });
}

function setupToolbars() {
    for (const toolbar of document.querySelectorAll("[role=toolbar]")) {
        setupToolbar(toolbar);
    }
}

function updateCountdowns() {
    let soon = false;
    const countdowns = document.querySelectorAll("[data-countdown]");
    for (const countdown of countdowns) {
        if (dateFns.isFuture(countdown.getAttribute("datetime"))) {
            countdown.innerHTML = dateFns.formatDistanceToNow(countdown.getAttribute("datetime"), { includeSeconds: true });
            if (dateFns.differenceInMinutes(countdown.getAttribute("datetime"), new Date()) <= 1) {
                soon = true;
            }
        } else {
            countdown.innerHTML = "the past";
            countdown.removeAttribute("data-countdown");
        }
    }
    if (soon) {
        setTimeout(updateCountdowns, 1000);
    } else {
        setTimeout(updateCountdowns, 10000);
    }
}

$(() => {
    const portal = document.createElement("div");
    document.querySelector("body").appendChild(portal);

    setupSubmitAssessmentDialog(portal);
    setupNoticeBoardSwitch();
});

$(() => {
    setupToolbars();
    updateCountdowns();
});