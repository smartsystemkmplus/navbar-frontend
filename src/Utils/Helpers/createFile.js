const createFile = (bits, name, options) => {
  try {
    return new File(bits, name, options);
  } catch (e) {
    const myBlob = new Blob(bits, options || {});
    myBlob.lastModified = new Date();
    myBlob.name = name;
    return myBlob;
  }
};

export default createFile;
