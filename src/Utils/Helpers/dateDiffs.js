const dateDiffs = (date1, date2) => {
  const diffMs = date2 - date1; // milliseconds between now & date2
  const diffDays = Math.floor(diffMs / 86400000); // days
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  const diffMins = Math.round(
    ((diffMs % 86400000) % 3600000) / 60000,
  ); // minutes

  return {
    diffDays,
    diffHrs,
    diffMins,
  };
};

export default dateDiffs;
