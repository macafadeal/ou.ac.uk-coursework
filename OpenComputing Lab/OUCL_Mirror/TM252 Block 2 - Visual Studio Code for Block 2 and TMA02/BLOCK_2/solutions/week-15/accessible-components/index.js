function setupSubmitAssessmentDialog(portal) {
    const triggers = document.querySelectorAll("button[aria-label='Submit this assessment']");
    for (const trigger of triggers) {
        trigger.addEventListener("click", () => {
            for (const child of document.querySelector("body").children) {
                if (child !== portal) {
                    child.setAttribute("inert", "");
                }
            }

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

            function close() {
                for (const child of document.querySelector("body").children) {
                    if (child.hasAttribute("inert")) {
                        child.removeAttribute("inert");
                    }
                }
                overlay.remove();
                dialog.remove();
                trigger.focus();
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

            const focusTarget = dialog.querySelector("input");
            focusTarget.focus();
        });
    }
}

function setupNoticeBoardSwitch() {
    const modules = document.querySelector("#modules");
    const notices = document.querySelector("#notices");
    const noticesSwitch = notices.querySelector("button[role=switch]");
    const noticesSwitchToggle = noticesSwitch.children[0];

    noticesSwitch.addEventListener("click", () => {
        const state = noticesSwitch.getAttribute("aria-checked");
        if (state === "false") {
            noticesSwitch.setAttribute("aria-checked", "true");
            noticesSwitch.classList.remove("bg-white");
            noticesSwitch.classList.add("bg-primary");
            noticesSwitchToggle.classList.remove("bg-primary");
            noticesSwitchToggle.classList.add("bg-white");
            noticesSwitchToggle.style.left = "1.4rem";
            notices.querySelector("h2").classList.remove("d-none");
            notices.querySelector("h2").removeAttribute("inert");
            for (const alert of notices.querySelectorAll(".alert")) {
                alert.classList.remove("d-none");
            }
            notices.classList.add("col-3");
            notices.classList.remove("col-1");
            modules.classList.add("col-6");
            modules.classList.remove("col-8");
        } else {
            noticesSwitch.setAttribute("aria-checked", "false");
            noticesSwitch.classList.add("bg-white");
            noticesSwitch.classList.remove("bg-primary");
            noticesSwitchToggle.classList.add("bg-primary");
            noticesSwitchToggle.classList.remove("bg-white");
            noticesSwitchToggle.style.left = "0.5rem";
            notices.querySelector("h2").classList.add("d-none");
            notices.querySelector("h2").setAttribute("inert", "");
            for (const alert of notices.querySelectorAll(".alert")) {
                alert.classList.add("d-none");
            }
            notices.classList.remove("col-3");
            notices.classList.add("col-1");
            modules.classList.remove("col-6");
            modules.classList.add("col-8");
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
                if (idx === 0) {
                    newFocusButton = buttons[buttons.length - 1];
                } else {
                    newFocusButton = buttons[idx - 1];
                }
            } else if (ev.key === "ArrowRight") {
                if (idx < buttons.length - 1) {
                    newFocusButton = buttons[idx + 1];
                } else {
                    newFocusButton = buttons[0];
                }
            } else if (ev.key === "Home") {
                newFocusButton = buttons[0];
            } else if (ev.key === "End") {
                newFocusButton = buttons[buttons.length - 1];
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
        toolbar.addEventListener("keydown", (ev) => {
            if (ev.key === "Home" || ev.key === "End") {
                ev.preventDefault();
            }
        });
    }
}

function setupToolbars() {
    for (const toolbar of document.querySelectorAll("[role=toolbar]")) {
        setupToolbar(toolbar);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const portal = document.createElement("div");
    document.querySelector("body").appendChild(portal);

    setupSubmitAssessmentDialog(portal);
    setupNoticeBoardSwitch();
    setupToolbars();
});
