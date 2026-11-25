// Overall score: Esteban's own number if he gave one (older reviews); otherwise the average of his category scores (default from Nov 2026).
export function overallScore(review: any): number | null {
  if (!review) return null;
  if (typeof review.overall === 'number') return review.overall;
  const s = review.scores ?? [];
  if (s.length < 4) return null;
  return Math.round((s.reduce((a: number, x: any) => a + x.value, 0) / s.length) * 10) / 10;
}
