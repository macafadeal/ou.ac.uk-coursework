document.addEventListener("DOMContentLoaded", () => {
    const notices = document.querySelector("#notices");
    const newNotice = document.createElement("div");
    notices.appendChild(newNotice);
    newNotice.classList.add("alert");
    newNotice.classList.add("alert-success");
    newNotice.innerHTML = '<div class="position-absolute top-0 end-0"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><p>TMA01 marks now available</p><div class="text-end"><a href="#" class="alert-link">See more...</a></div></div>';

    const parent = document.querySelector("#tm129-22d > .card-body > .row");
    const col = document.createElement("div");
    parent.appendChild(col);
    col.classList.add("col");
    col.innerHTML = '<div class="card"><h4 class="card-header">Module Results</h4><div class="card-body"><table class="table"><thead><tr><th>Element</th><th>Marks</th></tr></thead><tbody><tr><td>TMA01</td><td>71</td></tr><tr><td>TMA02</td><td>68</td></tr><tr><td>TMA03</td><td>70</td></tr><tr><td>EMA</td><td>72</td></tr></div></div>';

    const m269 = document.querySelector("#m269-24j");
    m269.remove();

    const badges = document.querySelectorAll("#calendar .badge");
    for (const badge of badges) {
        badge.remove();
    }
});
