export default function baseURL(url) {
  return url; // Uncomment this line if you are developing with module federation

  if (import.meta.env.DEV) {
    return url;
  }

  if (!import.meta.env.VITE_API_GATEWAY_URL) {
    const envKey = url.split("/")[2].toUpperCase().replace(/-/g, "_");
    return import.meta.env[`VITE_API_${envKey}_SERVICE_URL`];
  }
  return import.meta.env.VITE_API_GATEWAY_URL;
}
