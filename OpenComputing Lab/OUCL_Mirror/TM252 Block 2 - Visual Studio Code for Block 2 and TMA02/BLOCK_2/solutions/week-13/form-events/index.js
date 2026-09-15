function searchSubmit(ev) {
    ev.preventDefault();
    const searchTerm = ev.target.querySelector("input");
    alert("Searching for " + searchTerm.value);
}

function searchInputChanged(ev) {
    alert("Changed to " + ev.target.value);
}

const SUGGESTIONS = [
    "tm252",
    "m269",
    "tm129",
]

function suggest(ev) {
    let value = ev.target.value;
    if (value !== "" && ev.key !== "Backspace") {
        for (let suggestion of SUGGESTIONS) {
            if (suggestion.startsWith(value)) {
                ev.target.value = suggestion;
                ev.target.setSelectionRange(value.length, ev.target.value.length);
                break
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", searchSubmit);
    const searchInput = searchForm.querySelector("input");
    searchInput.addEventListener("change", searchInputChanged);
    searchInput.addEventListener("keyup", suggest);
});
