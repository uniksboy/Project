function invertedTrianglePattern(i) {
    for (let row = i; row > 0; row--) {
        console.log('*'.repeat(row));
    }
}

invertedTrianglePattern(6);
/*
******
*****
****
***
**
*/