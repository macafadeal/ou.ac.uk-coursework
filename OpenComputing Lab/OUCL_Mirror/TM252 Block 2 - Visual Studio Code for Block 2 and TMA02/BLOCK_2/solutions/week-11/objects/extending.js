let fullName = "Meredith Jones";

function slugify(text) {
    return text.toLowerCase().replace(" ", "-");
}

console.log(slugify(fullName));

String.prototype.slugify = function() {
    return this.toLowerCase().replace(" ", "-");
};

console.log(fullName.slugify());
