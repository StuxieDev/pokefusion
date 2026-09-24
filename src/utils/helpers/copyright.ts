// Year of StuxieDev's first commit to this fork. The earlier (2020-2023)
// history is SDM0's and Aegide's original work, whose copyright stays theirs.
export const COPYRIGHT_START_YEAR = 2023;

/** "2023–2026", or just "2023" while the start year is the current year. */
export const copyrightYears = (year = new Date().getFullYear()) =>
  COPYRIGHT_START_YEAR < year
    ? `${COPYRIGHT_START_YEAR}\u2013${year}`
    : `${COPYRIGHT_START_YEAR}`;
