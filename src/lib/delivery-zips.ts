/** Representative NYC ZIP coverage by borough — confirm fee/window with ZIP checker at checkout. */
export type ZipBorough = {
  borough: string;
  slug: string;
  feeFrom: number;
  zips: string[];
  note: string;
};

export const deliveryZipGroups: ZipBorough[] = [
  {
    borough: "Queens",
    slug: "queens",
    feeFrom: 12,
    note: "Includes nearby Queens neighborhoods.",
    zips: [
      "11101", "11102", "11103", "11104", "11105", "11106",
      "11354", "11355", "11358", "11361", "11364", "11365",
      "11367", "11368", "11369", "11370", "11372", "11373",
      "11374", "11375", "11377", "11378", "11379", "11385",
      "11415", "11418", "11421", "11432", "11435",
    ],
  },
  {
    borough: "Manhattan",
    slug: "manhattan",
    feeFrom: 18,
    note: "Lobby and doorman handoffs supported with clear recipient notes.",
    zips: [
      "10001", "10002", "10003", "10004", "10005", "10006", "10007",
      "10009", "10010", "10011", "10012", "10013", "10014", "10016",
      "10017", "10018", "10019", "10021", "10022", "10023", "10024",
      "10025", "10026", "10027", "10028", "10029", "10036", "10038",
      "10065", "10075", "10128",
    ],
  },
  {
    borough: "Brooklyn",
    slug: "brooklyn",
    feeFrom: 16,
    note: "Brownstones, walk-ups, and loft buildings—add buzzer details.",
    zips: [
      "11201", "11205", "11206", "11209", "11211", "11215", "11216",
      "11217", "11218", "11221", "11222", "11225", "11226", "11231",
      "11233", "11237", "11238",
    ],
  },
  {
    borough: "The Bronx",
    slug: "bronx",
    feeFrom: 18,
    note: "Confirm gate/buzzer access for Riverdale and loft buildings.",
    zips: [
      "10451", "10452", "10453", "10454", "10455", "10456", "10457",
      "10458", "10461", "10462", "10463", "10465", "10467", "10468",
      "10471", "10472", "10473",
    ],
  },
  {
    borough: "Staten Island",
    slug: "staten-island",
    feeFrom: 24,
    note: "Same-day most weekdays; next-day often smoother on peak weekends.",
    zips: [
      "10301", "10302", "10303", "10304", "10305", "10306", "10307",
      "10308", "10309", "10310", "10312", "10314",
    ],
  },
];
