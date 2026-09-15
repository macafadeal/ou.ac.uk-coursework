class Student {
    constructor(studentId, name, currentModule) {
        this.studentId = studentId;
        this.name = name;
        this.currentModule = currentModule;
    }
}

let jerome = new Student("abc123", "Jerome", "TM252");
console.log(jerome.studentId, jerome.name, jerome.currentModule);

let amelia = new Student("xyz987", "Amelia", "TM352");
console.log(amelia.studentId, amelia.name, amelia.currentModule);
