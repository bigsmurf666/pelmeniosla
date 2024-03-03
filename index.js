// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Example usage
  const exampleNumber = 17;
  
  if (isPrime(exampleNumber)) {
    console.log(`${exampleNumber} is a prime number.`);
  } else {
    console.log(`${exampleNumber} is not a prime number.`);
  }
  