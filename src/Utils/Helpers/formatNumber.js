export default function formatNumber(number, isBigNumber = false) {
  if (isBigNumber) {
    if (number > 999) {
      return `${(number / 1000).toFixed(1)}k`;
    }
    if (number > 999999) {
      return `${(number / 1000000).toFixed(1)}m`;
    }
  } else if (number > 25) {
    return "25+";
  }
  return number;
}
