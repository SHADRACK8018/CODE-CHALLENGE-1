function StudentGradingSystem() {
    let marks = prompt('Enter student grade');
    if (marks < 0 || marks > 100) {
        console.log("Invalid input");
    } else if (marks >= 80 && marks <= 100) {
        console.log('A');
    } else if (marks >= 60 && marks < 80) {
        console.log('B');
    } else if (marks >= 50 && marks < 60) {
        console.log('C');
    } else if (marks >= 40 && marks < 50) {
        console.log('D');
    } else {
        console.log('E');
    }
}

StudentGradingSystem(60);