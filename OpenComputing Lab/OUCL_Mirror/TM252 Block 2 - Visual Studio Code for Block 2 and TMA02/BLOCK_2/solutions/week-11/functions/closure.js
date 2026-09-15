function hideIt() {
    let hiddenValue = 42;

    return function() {
        return hiddenValue;
    }
}

let revealHidden = hideIt();
console.log(revealHidden());
