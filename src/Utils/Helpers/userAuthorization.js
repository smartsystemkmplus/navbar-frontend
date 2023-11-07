import Cookies from "js-cookie";

export default function userAuthorization() {
  const userCookie = Cookies.get("user");
  if (!userCookie) {
    return false;
  }

  const user = JSON.parse(userCookie.replace(/^j:/, ""));

  if (user.expire_token < new Date() / 1000) {
    return false;
  }

  return true;
}
