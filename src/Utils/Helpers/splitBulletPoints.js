export default function splitBulletPoints(text) {
  return (text || "")?.split("•" || "\n•")?.slice(1);
}
