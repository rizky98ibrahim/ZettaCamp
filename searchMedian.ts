// Expected Result = 7
// Direction: Find the median of this array
const inputArray: number[] = [8, 7, 7, 9, 5, 4, 2, 9];

function findMedian(input: number[]): number {
  const sortedArray: number[] = [...input].sort((a, b) => a - b);

  if (sortedArray.length % 2 === 0) {
    // If the array has an even number of elements
    const middleIndex = sortedArray.length / 2;
    return (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2;
  } else {
    // If the array has an odd number of elements
    const middleIndex = Math.floor(sortedArray.length / 2);
    return sortedArray[middleIndex];
  }
}

console.log(findMedian(inputArray)); // Output: 7
