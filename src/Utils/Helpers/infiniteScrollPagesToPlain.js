const infiniteScrollPagesToPlain = (data, field) => {
  const results = [];
  data?.pages?.forEach((page) =>
    page?.[field]?.forEach((item) => {
      results.push(item);
    }),
  );
  return results;
};

export default infiniteScrollPagesToPlain;
