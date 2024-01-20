/**
 * 0-masala:
 *  for (let i = 1; i <= 100; i++) {
       document.write(i + "<br>");
    }
 * 
    1-masala:
    let n = +prompt("please enter your number  ");
for (let i = 1; i <= n; i++) {
  document.write(i + "<br>");
} 2-MASALA:
let num = +prompt("please enter your favourite number");
let result = 0;

for (let i = 1; i <= num; i++) {
  result += i;
}
console.log("Yigindisi: ", result);
  
 3-masala:
let num = +prompt("please enter your favourite number");
let result = 0;

for (let i = 1; i <= num; i++) {
  if (i % 2 != 0) {
    result += i;
  }
}
console.log("Yigindisi: ", result);
 4-masala:
let a = +prompt("please enter your a number");
let b = +prompt("please enter your b number");
let result = 0;

for (let i = a; i <= b; i += 1) {
  if (i % 2 == 0) {
    result += i;
  }
}
console.log("Kopaytmasi: ", result);


5-masala:
let a = +prompt("please enter your a number");
let b = +prompt("please enter your b number");
let result = 0;

for (let i = a; i <= b; i += 1) {
  if (i % 3 == 0 || i % 5 == 0) {
    result += i;
  }
}
console.log("yigindisi: ", result);

6-masala:
let a = +prompt("please enter your a number");

let result = 0;

for (let i = 1; i <= a; i += 1) {
  if (a % i == 0) {
    result++;
  }
}
console.log("Bo'luvchilar soni: ", result);


7-masala:
let Number$ = +prompt("Ixtiyoriy sonni kiriting");

let tubmi = true;

if (Number$ <= 1) {
  tubmi = false;
} else {
  for (let k = 2; k < Number$; k++) {
    if (Number$ % k === 0) {
      tubmi = false;
      break;
    }
  }
}

if (tubmi) {
  console.log(${Number$} tub son.);
} else {
  console.log(${Number$} tub emas.);
}


 */

// let num = +prompt("please enter your favourite number");
// let result = 1;

// for (let i = 1; i <= num; i++) {
//   if (i % 2 == 0) {
//     result *= i;
//   }
// }
// console.log("Ko'paytmasi: ", result);
