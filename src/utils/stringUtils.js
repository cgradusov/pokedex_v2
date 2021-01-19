export const capitalizeString = (str) => {
    return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

export const formatNumber = (str, len=3) => ('0'.repeat(len - str.length) + str)
