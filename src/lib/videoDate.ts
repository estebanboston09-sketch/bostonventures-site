// Google wants a full date-time with a timezone for VideoObject.uploadDate.
// Our data only stores "YYYY-MM" (or "YYYY-MM-DD"), so fill in the rest in Cancún time.
export function isoUploadDate(d?: string): string | undefined {
  if (!d) return undefined;
  const m = d.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?/);
  if (!m) return undefined;
  return `${m[1]}-${m[2]}-${m[3] ?? '01'}T12:00:00-05:00`;
}
