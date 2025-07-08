// 1️⃣ Function that returns cubic value
function getCube(number) {
  return number * number * number;
}

// 2️⃣ Loop from 1 to 20 and print cubic values
for (let i = 1; i <= 20; i++) {
  console.log(`Cube of ${i} is ${getCube(i)}`);
}
