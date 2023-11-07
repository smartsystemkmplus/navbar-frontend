const getHoursMinutesSecondsFromSeconds = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  const seconds = totalSeconds - hours * 3600 - minutes * 60;

  return { hours, minutes, seconds };
};

export default getHoursMinutesSecondsFromSeconds;
