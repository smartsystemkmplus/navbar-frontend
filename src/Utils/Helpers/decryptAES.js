import { AES, enc } from "crypto-js";

/**
 * Decrypt AES to string
 * @param {string} payload
 */

export default function decryptAES(payload) {
  const decData = enc.Base64.parse(payload).toString(enc.Utf8);
  const dec = AES.decrypt(decData, import.meta.env.VITE_JWT_KEY);
  const decString = dec.toString(enc.Utf8);
  return decString;
}
