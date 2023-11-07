export default function preventNonNumericalInput(e) {
  e = e || window.event;
  const charCode =
    typeof e.which === "undefined" ? e.keyCode : e.which;
  const charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/) && charCode !== 8)
    e.preventDefault();
}
