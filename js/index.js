/**
 * Assignment (Mathematical Shapes):
 */

// a. Write a JavaScript program to find the diagonal of a square where the length of each
// side is 9.
const sideA = 9;
const sideB = 9;
/**
 * Calculate the diagonal of a squere of given sides 'a and b' length
 * @param {int} a
 * @param {int} b
 * @returns {number} that representes the diagonal of a square
 */
const getDiagonalOfSquare = (a, b) => {
  return Math.sqrt(a * a + b * b);
};

try {
  console.log('====== Exercise A ======');
  console.log(
    `The Diagonal of a square with sides ${sideA} and ${sideB} is = ` +
      getDiagonalOfSquare(sideA, sideB).toFixed(2)
  );
} catch (error) {
  console.log(`Only numbers are accepted, try again. ${error}`);
}

// b. Write a JavaScript program to find the area of a triangle where lengths of the three of its
// sides are 5, 6 and 7.
const triangleSideA = 5;
const triangleSideB = 6;
const triangleSideC = 7;

/**
 * Calculates the area of a triangle using the Heron's formula
 * @param {int} a -> side A of the triangle
 * @param {int} b -> side B of the triangle
 * @param {int} c -> side C of the triangle
 * @returns {number} The area of the triangle
 */
const getAreaOfTriangle = (a, b, c) => {
  return 0.25 * Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c));
};

try {
  let result = getAreaOfTriangle(triangleSideA, triangleSideB, triangleSideC);
  console.log('====== Exercise B ======');
  console.log(
    `The area of a triangle of sizes ${triangleSideA}, ${triangleSideB}, ${triangleSideC} is = ${result.toFixed(
      2
    )}`
  );
} catch (error) {
  console.log(`Error calculating the area of the triangle: ${error}`);
}

// c. Write a JavaScript program to find the circumference and surface area of a circle whose
// radius is 4.
// i. When trying to find these values, you will need to use PI. Remember constants?
const radius = 4;

/**
 * Returns a string representation of the circumference and area of a circle
 * @param {int} radius 
 * @returns {string} with the value of circumference and area of a circle
 */
const getCircumferenceAndArea = (radius) => {
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;
  return `Circumference = ${circumference.toFixed(2)}, Area = ${area.toFixed(2)}`;
};
try {
  console.log('====== Exercise C ======');
  console.log(getCircumferenceAndArea(radius));
} catch (error) {
  console.log(`Error calculating the area or circumference of the circle: ${error}`);
}
