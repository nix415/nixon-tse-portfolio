/**
 * Degrees conferred at UC Santa Barbara, 2013-14 through 2022-23.
 *
 * Source: UCSB Office of Budget & Planning. Reported in "UCSB academic
 * departments have seen growth in undergraduate degrees conferred in recent
 * years," Daily Nexus, 16 May 2024.
 *
 * `null` marks a year the program did not exist or was not reported
 * separately — Statistics & Data Science begins in 2019-20, and Psychological
 * & Brain Sciences begins in 2017-18 after replacing the B.A. in Psychology.
 */

export const YEARS = [
  "2013-14",
  "2014-15",
  "2015-16",
  "2016-17",
  "2017-18",
  "2018-19",
  "2019-20",
  "2020-21",
  "2021-22",
  "2022-23",
] as const;

export type Series = {
  name: string;
  values: (number | null)[];
};

/** Chart 1 — totals by college division, shown as stacked bars. */
export const DIVISIONS: Series[] = [
  {
    name: "Letters & Science",
    values: [4951, 4922, 5296, 5405, 5622, 5878, 6577, 6501, 6306, 6557],
  },
  {
    name: "Engineering",
    values: [298, 340, 330, 314, 344, 366, 383, 403, 419, 387],
  },
  {
    name: "Creative Studies",
    values: [90, 98, 98, 99, 99, 87, 106, 110, 126, 117],
  },
];

/** Chart 2 — the fastest-growing majors. */
export const MAJORS: Series[] = [
  {
    name: "Communication",
    values: [380, 352, 408, 389, 403, 445, 517, 461, 582, 620],
  },
  {
    name: "Psychological & Brain Sciences",
    values: [null, null, null, null, 4, 60, 258, 361, 439, 476],
  },
  {
    name: "Economics",
    values: [154, 154, 142, 171, 200, 244, 323, 333, 330, 418],
  },
  {
    name: "Biological Sciences",
    values: [196, 216, 242, 289, 292, 337, 347, 355, 352, 373],
  },
  {
    name: "Statistics & Data Science",
    values: [null, null, null, null, null, null, 124, 232, 287, 354],
  },
  {
    name: "Physics",
    values: [59, 90, 101, 80, 130, 144, 161, 151, 161, 183],
  },
];

/** Chart 3 — the divergence inside the Economics department. */
export const ECONOMICS: Series[] = [
  {
    name: "Economics",
    values: [154, 154, 142, 171, 200, 244, 323, 333, 330, 418],
  },
  {
    name: "Economics & Accounting",
    values: [228, 273, 338, 348, 345, 335, 379, 360, 326, 278],
  },
];
