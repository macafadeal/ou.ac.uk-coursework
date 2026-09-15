let amelia = {
    id: "xyz987",
    name: "Amelia",
    currentModule: {
        code: "TM252",
        title: "Web technologies"
    }
};

console.log(amelia);
console.log(amelia.currentModule.code);

amelia.currentModule.code = "TM352";
console.log(amelia.currentModule.code);
