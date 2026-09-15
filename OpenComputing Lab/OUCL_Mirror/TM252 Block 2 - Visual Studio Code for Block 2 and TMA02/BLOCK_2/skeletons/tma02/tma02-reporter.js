class TMA02Reporter {
  totalTests = 0;
  passedTests = 0;
  studentId = "unknown";
  totalFail = false;
  marks = {};

  onBegin(config, suite) {
    console.log("Assessing TM252 25B TMA02 Part 1");
  }

  onTestBegin(test, result) {
    console.log(`\nTesting that ${test.title}`);
  }

  onTestEnd(test, result) {
    // Extract the student-id, if set by the test
    for (const annotation of test.annotations) {
      if (annotation.type === "student-id") {
        this.studentId = annotation.description;
      }
    }
    let taskId = null;
    if (test.parent.type === "describe") {
      let taskMarks = null;
      let taskTitle = null;
      let taskOrder = null;
      for (let tag of test.parent._tags) {
        if (tag.startsWith("@tma02/q1/id/")) {
          taskId = tag.substring(13);
        } else if (tag.startsWith("@tma02/q1/marks/")) {
          taskMarks = Number.parseInt(tag.substring(16));
        } else if (tag.startsWith("@tma02/q1/title/")) {
          taskTitle = tag.substring(16);
        } else if (tag.startsWith("@tma02/q1/order/")) {
          taskOrder = Number.parseInt(tag.substring(16));
        }
      }
      if (taskId !== null && taskMarks !== null && !this.marks[taskId]) {
        this.marks[taskId] = { "marks": taskMarks, "achieved": 0, "maximum": 0, "title": taskTitle, "order": taskOrder };
      }
    }
    // Count this test
    if (test.tags.indexOf("@tma02/q1/no-count") < 0 && taskId !== null) {
      this.marks[taskId].maximum = this.marks[taskId].maximum + 1;
    }
    if (result.status === "passed") {
      if (test.tags.indexOf("@tma02/q1/no-count") < 0 && taskId !== null) {
        this.marks[taskId].achieved = this.marks[taskId].achieved + 1;
      }
      console.log("\u2713 Passed :-)");
    } else {
      console.log("\u274c Failed :-(");
      if (test.tags.indexOf("@tma02/q1/complete-fail") >= 0 || test.parent._tags.indexOf("@tma02/q1/complete-fail") >= 0) {
        this.totalFail = true;
      }
      let hasURLs = false;
      for (const annotation of test.annotations) {
        if (annotation.type === "feedback") {
          console.log(annotation.description);
        } else if (annotation.type === "url") {
          hasURLs = true;
        }
      }
      if (hasURLs) {
        console.log("You may find helpful information at the following URLs:")
        for (const annotation of test.annotations) {
          if (annotation.type === "url") {
            console.log(annotation.description);
          }
        }
      }
    }
  }

  onEnd(result) {
    if (this.totalFail) {
      console.log("\nThe basic structure of the 'index.html' has been modified, which means none of the tests can be completed. You receive 0 marks for Part 1.\nTo fix this, reset the 'index.html' back to the version from the resources, and add your student identifier to the title as described in the TMA document. Then, rerun the tests.");
    } else {
      const sections = Object.values(this.marks);
      sections.sort((a, b) => {
        return a.order - b.order;
      });
      let total = 0;
      for (const section of sections) {
        total = total + Math.ceil(section.marks * section.achieved / section.maximum);
      }
      console.log(`\nMarking completed for ${this.studentId}. You receive ${total} marks for Part 1. The detailed breakdown of marks is:`);
      for (const section of sections) {
        console.log(`${section.title}: ${Math.ceil(section.marks * section.achieved / section.maximum)} marks`);
      }
    }
  }
}

export default TMA02Reporter;
