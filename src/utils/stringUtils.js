export const capitalizeString = (str) => str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

export const formatNumber = (str, len = 3) => ('0'.repeat(len - str.length) + str);

export const getIdFromUrl = (str) => { const res = /\/([0-9]+)\//g.exec(str); return Number.parseInt(res[1], 10); };
