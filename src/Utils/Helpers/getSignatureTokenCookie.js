import Cookies from "js-cookie";

export default function getSignatureTokenCookie() {
  const userCookie = Cookies.get("sigToken");
  const token = (userCookie?.split(" ") || [
    undefined,
    undefined,
  ])?.[1];
  return token;
}
