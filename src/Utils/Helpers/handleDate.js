export default function calculateDifference(
  dateStart,
  dateEnd = undefined,
) {
  const start = new Date(dateStart);
  const end = dateEnd ? new Date(dateEnd) : new Date(Date.now());
  const diff = end.getTime() - start.getTime();
  const diffMonths = Math.round(diff / (1000 * 3600 * 24 * 30));
  const diffYears = Math.round(diff / (1000 * 3600 * 24 * 365));

  if (diffMonths >= 12) {
    const monthsInYear = diffMonths - 12 * diffYears;
    const result = `${diffYears} yrs ${
      monthsInYear > 0 ? `${monthsInYear} mos` : ""
    }`;
    return result;
  }

  if (diffMonths === 0) {
    return `1 mos`;
  }

  return `${diffMonths} mos`;
}
