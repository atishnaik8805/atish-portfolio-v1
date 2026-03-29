export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

export function formatDuration(start: Date, end: Date | string): string {
  const endObj = typeof end === 'string' ? new Date() : end;
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const endYear = endObj.getFullYear();
  const endMonth = endObj.getMonth();

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);

  return parts.length > 0 ? parts.join(' ') : 'Less than a month';
}
