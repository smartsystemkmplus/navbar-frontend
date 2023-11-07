export default function axiosOnDownloadProgress(
  e,
  callback = () => {},
) {
  const { loaded, total } = e;
  const progress = (loaded / total) * 100;
  callback(parseInt(progress, 10), loaded, total);
}
