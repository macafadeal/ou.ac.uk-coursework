class Student {
    constructor(studentId, name) {
        this.studentId = studentId;
        this.name = name;
        this.currentModule = null;
    }

    register(newModule) {
        this.currentModule = newModule;
    }

    deregister() {
        this.currentModule = null;
    }
}

let jerome = new Student("abc123", "Jerome");

console.log(jerome.studentId, jerome.name);

console.log(jerome.currentModule);

jerome.register("TM252");

console.log(jerome.currentModule);

jerome.deregister();

console.log(jerome.currentModule);