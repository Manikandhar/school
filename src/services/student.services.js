export const studentService = {
    attendance,
    exams
};

function attendance() {
    return [
        { x: 'January', y: 28 },
        { x: 'February', y: 12 },
        { x: 'March', y: 23 },
        { x: 'April', y: 22 },
        { x: 'May', y: 26 },
        { x: 'June', y: 24 },
        { x: 'July', y: 28 },
        { x: 'August', y: 23 },
        { x: 'September', y: 26 },
        { x: 'October', y: 27 },
        { x: 'November', y: 28 },
        { x: 'December', y: 20 },
    ];
};

function exams() {
    return [
        { x: 'Telugu', y: 78 },
        { x: 'Hindi', y: 67 },
        { x: 'English', y: 89 },
        { x: 'Maths', y: 98 },
        { x: 'Science', y: 90 },
        { x: 'Social', y: 87 },
    ]
}