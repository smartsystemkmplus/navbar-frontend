function formatDecimalPlaces(
  number,
  maxNumberOfPlaces = 2,
  separator = ".",
  returnString = false,
) {
  const divMultiplier = 10 ** maxNumberOfPlaces;
  const formatted =
    Math.round((number + Number.EPSILON) * divMultiplier) /
    divMultiplier;
  if (!returnString) return formatted;
  const strFormatted = `${formatted}`.split(".").join(separator);
  return strFormatted;
}

export default formatDecimalPlaces;
