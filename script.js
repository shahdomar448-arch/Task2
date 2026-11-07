class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    calculateAverage() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    getFinalResult() {
        const average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

const studentsList = [
    new Student(2026101, "Youssef Omar", [45, 40, 50], 80),
    new Student(2026102, "Ahmed Mohamed", [80, 85, 90], 95),
    new Student(2026103, "Omar Ali", [48, 45, 45], 90),
    new Student(2026104, "Mahmoud Hassan", [60, 70, 75], 70)
];

const strugglingStudents = studentsList.filter(student => {
    const average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

const mercyStudents = strugglingStudents.map(student => {
    const oldAverage = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: oldAverage + 5
    };
});

const totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

const mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

console.log("===== University Students Report =====");

studentsList.forEach(student => {
    const average = student.calculateAverage();

    console.log("-----------------------------");
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Average:", average.toFixed(2));
    console.log("Grade:", student.getGrade(average));
    console.log("Result:", student.getFinalResult());
});

console.log("===== Mercy Committee Report =====");
console.table(mercyStudents);
console.log("Mercy Students Count:", mercyStudents.length);
console.log("Average After Mercy:", mercyAverage.toFixed(2));
