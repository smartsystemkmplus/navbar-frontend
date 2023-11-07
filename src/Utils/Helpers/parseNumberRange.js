/**
 *
 * @param {[]} numbers
 * @returns {string}
 */
export default function parseNumberRange(numbers = []) {
  numbers.sort((a, b) => a - b);

  let result = "";
  let start = numbers[0];
  let end = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] === end + 1) {
      end = numbers[i];
    } else {
      if (start === end) {
        result += `${start}, `;
      } else {
        result += `${start} - ${end}, `;
      }
      start = numbers[i];
      end = numbers[i];
    }
  }

  if (start === end) {
    result += start;
  } else {
    result += `${start} - ${end}`;
  }

  return result;
}
