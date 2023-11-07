export default function getQueryParams(
  name,
  url = window.location.href,
) {
  const regexedName = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp(`[?&]${regexedName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
