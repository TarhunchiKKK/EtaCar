export function formatTime(date: Date): string {
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    if (minutes === 0) {
        return `${hours}:00`;
    }
    return `${hours}:${minutes}`;
}
