function remoteRequest() {
    const notices = document.querySelector("#notices");
    const processing = document.createElement("div");
    processing.setAttribute("class", "alert alert-warning");
    processing.setAttribute("aria-live", "polite");
    processing.innerHTML = "<p>Loading...</p>";
    notices.appendChild(processing);

    let counter = 100;
    function step() {
        if (counter > 0) {
            const endTime = new Date().getTime() + 100;
            while (new Date().getTime() < endTime) {
            }
            counter = counter - 1;
            setTimeout(step, 0);
        } else {
            processing.remove();
        }        
    }

    setTimeout(step, 0);
}

document.addEventListener("DOMContentLoaded", () => {
    // remoteRequest();
    /*
    setTimeout(() => {
        console.log("One");
    }, 5000);
    setTimeout(() => {
        console.log("Two");
    }, 2000);
    setTimeout(() => {
        console.log("Three");
    }, 7000);
    */
});

/*
setTimeout(() => {
    const notices = document.querySelectorAll("#notices .alert");
    for (let notice of notices) {
        notice.remove();
    }
}, 10000);
*/

setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
    }, 0);
    queueMicrotask(() => {
        console.log("C");
    });
}, 2000);
