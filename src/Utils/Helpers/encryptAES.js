import { AES, enc } from "crypto-js";

/**
 * Encrypt string with AES algorithm
 * @param {string} payload
 */

export default function encryptAES(payload) {
  const stringified = JSON.stringify(payload);
  const encJson = AES.encrypt(
    stringified,
    import.meta.env.VITE_JWT_KEY,
  ).toString();
  const encData = enc.Base64.stringify(enc.Utf8.parse(encJson));
  return encData;
}
