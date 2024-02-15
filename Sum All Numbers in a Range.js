function sumAll(arr) {
    // Find the minimum and maximum values in the array
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    
    // Initialize a variable to store the sum
    var sum = 0;
    
    // Loop through all the numbers between min and max, inclusive
    for (var i = min; i <= max; i++) {
      sum += i; // Add each number to the sum
    }
    
    return sum; // Return the sum
  }
  
  // Test cases
  console.log(sumAll([1, 4]));   // Output: 10
  console.log(sumAll([4, 1]));   // Output: 10
  console.log(sumAll([5, 10]));  // Output: 45
  