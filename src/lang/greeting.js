/** Time-of-day greeting: [Vietnamese, English]. */

export function greeting() {
  const h = new Date().getHours();
  if (h < 11) return ["Chào buổi sáng!", "Good morning!"];
  if (h < 13) return ["Chào buổi trưa!", "Good midday!"];
  if (h < 18) return ["Chào buổi chiều!", "Good afternoon!"];
  return ["Chào buổi tối!", "Good evening!"];
}
