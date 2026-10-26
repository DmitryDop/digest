const MONTHS_SHORT = [
  "янв",
  "фев",
  "мар",
  "апр",
  "мая",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

const MONTHS_FULL = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

function parseUtc(iso: string) {
  const date = new Date(iso);
  return {
    day: date.getUTCDate(),
    month: date.getUTCMonth(),
    year: date.getUTCFullYear(),
  };
}

export function formatShortDate(iso: string) {
  const { day, month, year } = parseUtc(iso);
  return `${day} ${MONTHS_SHORT[month]} ${year}`;
}

export function formatLongDate(iso: string) {
  const { day, month, year } = parseUtc(iso);
  return `${day} ${MONTHS_FULL[month]} ${year}`;
}

export function formatNumericDate(iso: string) {
  const { day, month, year } = parseUtc(iso);
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${pad(day)}.${pad(month + 1)}.${year}`;
}

export function pluralizeMaterials(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} материал`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} материала`;
  }
  return `${count} материалов`;
}
