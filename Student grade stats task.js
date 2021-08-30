const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];



let max = Math.max(...grades);
let min = Math.min(...grades);
let range = max - min;


console.log(range)

const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }

  console.log(median(grades));
  