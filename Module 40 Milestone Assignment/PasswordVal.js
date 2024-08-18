function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

validatePassword("mypassword", "mypassword"); // Password Matched. Password validation Successful.
validatePassword("mypassword", "wrongpassword"); // Password didn't match. Password validation unsuccessful.