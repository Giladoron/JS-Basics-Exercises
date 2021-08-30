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
  
  let haldOfGradesLength = grades.length / 2;
 grades.splice(0, haldOfGradesLength);
let max2 = Math.max(...grades);
let min2 = Math.min(...grades);
let halfRange = max2 - min2;

  console.log(halfRange)

console.log('Stats:\n\tRange: ' + range + '\n\tMedian:' + medianGrades + '\n\tHalf Range:' + halfRange);
