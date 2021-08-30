let solutionA, solutionB;

let a = 1;
let b = 5;
let c = 6;


solutionA = (-b + Math.sqrt(b**2 - 4*a*c)) / (2 * a);
solutionB = (-b - Math.sqrt(b**2 - 4*a*c)) / (2 * a);


console.log(solutionA, solutionB);