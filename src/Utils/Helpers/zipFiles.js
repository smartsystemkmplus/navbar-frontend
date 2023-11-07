import { saveAs } from "file-saver";
import JSZip from "jszip";

export default function zipFiles(files, outputName) {
  const zip = new JSZip();
  for (let file = 0; file < files.length; file += 1) {
    zip.file(files[file].name, files[file]);
  }
  zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, `${outputName}.zip`);
  });
}
