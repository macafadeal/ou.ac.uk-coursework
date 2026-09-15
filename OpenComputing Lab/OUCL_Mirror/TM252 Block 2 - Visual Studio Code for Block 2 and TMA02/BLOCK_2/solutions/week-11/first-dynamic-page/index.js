/**
 * Handle the user clicking on the "Enable all features" button.
 */
function enableAllFeatures() {
    const dataPrivacyModal = document.querySelector("#data-privacy-modal");
    dataPrivacyModal.classList.add("d-none");
}

/**
 * Handle the user clicking on the "Disable all features" button.
 */
function disableAllFeatures() {
    const dataPrivacyModal = document.querySelector("#data-privacy-modal");
    dataPrivacyModal.classList.add("d-none");
}

/**
 * Handle the DOM being ready for the data privacy modal.
 */
function showDataPrivacyModal() {
    const privacyEnableButton = document.querySelector("#data-privacy-enable");
    const privacyDisableButton = document.querySelector("#data-privacy-disable");
    const dataPrivacyModal = document.querySelector("#data-privacy-modal");

    privacyEnableButton.addEventListener("click", enableAllFeatures);
    privacyDisableButton.addEventListener("click", disableAllFeatures);

    dataPrivacyModal.querySelector('[tabindex="-1"]').focus();
}

document.addEventListener("DOMContentLoaded", showDataPrivacyModal);