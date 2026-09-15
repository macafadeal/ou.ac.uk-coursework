function willBeDone() {
    return "done";
}

function promiseWillBeDone() {
    return new Promise((resolve, reject) => {
        console.log("C");
        resolve("done");
        console.log("D");
    })
}

async function asyncWillBeDone() {
    return "async done";
}

async function promiseTest() {
    // const value1 = willBeDone();
    // console.log(value1);
    console.log("A");
    const value2 = promiseWillBeDone();
    console.log(value2);
    value2.then((result) => {
        console.log(result);
    });
    console.log("B");
    const value3 = await asyncWillBeDone();
    console.log(value3);
    console.log("E");
}

document.addEventListener("DOMContentLoaded", () => {
    promiseTest();
});
