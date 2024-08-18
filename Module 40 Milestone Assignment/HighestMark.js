function highestMarks(marks) {
    let highest = marks[0];
    for (let i = 1; i < marks.length; i++) {
        highest = marks[i] > highest ? marks[i] : highest;
    }
    console.log(`Highest marks: ${highest}`);
}

const marks = [85, 92, 88, 76, 95];
highestMarks(marks); // Highest marks: 95

function capitalizeName(name) {
    return name.charAt(0) === name.charAt(0).toLowerCase()
        ? name.charAt(0).toUpperCase() + name.slice(1)
        : name;
}

console.log(capitalizeName("Ram")); // Ram
console.log(capitalizeName("Shyam")); // Shyam