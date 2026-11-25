// Picks the best image for a hotel: Esteban's photo → his YouTube video thumbnail → none (illustration).
export function hotelImage(d: any): { src: string; alt: string } | null {
  if (d.photos?.length) return d.photos[0];
  if (d.review?.videoId) return { src: `https://i.ytimg.com/vi/${d.review.videoId}/hqdefault.jpg`, alt: `${d.name} — from my video review` };
  return null;
}
