function validateURL(url) {
    const regex = /^(http:\/\/|https:\/\/)[\w\d\-_]+\.[\w\d]+$/;
    if (regex.test(url)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
    }
}

validateURL("https://pwskill.com");

