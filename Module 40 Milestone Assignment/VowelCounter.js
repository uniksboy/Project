function countVowels(name) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            count++;
        }
    }
    console.log(`Number of vowels in ${name}: ${count}`);
}

countVowels("Jonathan"); // Number of vowels in Jonathan: 3
countVowels("Sky"); // Number of vowels in Sky: 0