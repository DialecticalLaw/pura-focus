export function formatTime(seconds: number): string {
  const remainingSeconds = seconds % 60;

  return `${Math.floor(seconds / 60)}:${remainingSeconds.toString().length === 1 ? '0' : ''}${remainingSeconds}`;
}
