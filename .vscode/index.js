var num = 2568,
    sum = 0;

while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log(sum);