const errMessage = (message) => {
  const err = {
    response: {
      data: {
        message,
      },
    },
  };

  return err;
};

export default errMessage;
