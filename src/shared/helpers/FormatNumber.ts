export function formatNumber(num: number | string, fractionDigits: number): string {
    return (+num).toFixed(fractionDigits);
}
