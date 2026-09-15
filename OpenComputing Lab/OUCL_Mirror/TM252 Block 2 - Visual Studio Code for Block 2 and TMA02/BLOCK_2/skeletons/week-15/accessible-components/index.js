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

            function close() {
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

document.addEventListener("DOMContentLoaded", () => {
    const portal = document.createElement("div");
    document.querySelector("body").appendChild(portal);

    setupSubmitAssessmentDialog(portal);
});
