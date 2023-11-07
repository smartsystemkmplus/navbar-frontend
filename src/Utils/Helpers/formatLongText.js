export default function formatLongText(string, maxLength = 500) {
  if (string.length > maxLength) {
    return `${string.substring(0, maxLength)}...`;
  }
  return string;
}
