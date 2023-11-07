import secondstoHoursMinutes from "./secondstoHoursMinutes";

export default function formatLearningHours(seconds) {
  const {
    hours: h,
    minutes: m,
    seconds: s,
  } = secondstoHoursMinutes(seconds);
  let result = "";

  // if (h > 0) {
  //   result += `${h} Jam `;
  // }

  result += `${h.toString().padStart(2, "0")} Jam ${m
    .toString()
    .padStart(2, "0")} Menit `;

  return result;
}
