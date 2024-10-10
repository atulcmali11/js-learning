
const a = [1, 1, 1, 2, 3, 3, 4, 5];

// 1,2,1,1,3,3,4,5

let p2 = 1;
let p1 = 0;
while (p2 < a.length) {
    if (a[p2] != a[p1]) {
        //p1++;
        a[++p1] = a[p2];
    }
    p2++;
}
console.log(a)
for (let k = 0; k < p1 + 1; k++) {
    console.log(a[k])
}
