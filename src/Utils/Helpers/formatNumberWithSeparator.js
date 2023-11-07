export default function formatNumberWithSeparator(
  num,
  separator = ".",
) {
  return num
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, separator);
}
