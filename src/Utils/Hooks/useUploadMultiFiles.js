import { postFile } from "../../Networks/Repository/Post";
import showErrorDialog from "../Helpers/showErrorDialog";

export default function useUploadMultiFiles(
  options = {
    withAxiosConfigs: false,
    showDialogOnError: true,
  },
) {
  const { mutateAsync: uploadFile, isLoading } = postFile(
    options?.withAxiosConfigs,
  );
  const upload = (() => {
    if (options?.withAxiosConfigs) {
      return async ({ files, axiosConfigs, isHLS }) => {
        const promises = files.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file, file?.name);
          return uploadFile({ formData, axiosConfigs, isHLS })
            .then((res) => res)
            .catch((err) =>
              options?.showDialogOnError
                ? showErrorDialog(err)
                : null,
            );
        });
        return Promise.all(promises).then((res) => res);
      };
    }
    return async (files) => {
      const promises = files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file, file?.name);
        return uploadFile(formData)
          .then((res) => res)
          .catch((err) =>
            options?.showDialogOnError ? showErrorDialog(err) : null,
          );
      });
      return Promise.all(promises).then((res) => res);
    };
  })();

  return { isLoading, upload };
}
