import dayjs from "dayjs";

export default function getClassStatus(startDate, endDate) {
  const isStarted =
    dayjs(startDate).isToday() || dayjs().isAfter(startDate);
  const isFinished = dayjs().isAfter(endDate);

  const status = (() => {
    if (isFinished) return "FINISHED";
    if (isStarted) return "ONGOING";
    return "NOT_STARTED";
  })();
  return status;
}
