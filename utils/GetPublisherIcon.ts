export const GetPublisherIcon = (publisher: string) => {
  const name = publisher.toLowerCase();
  if (name.includes("linkedin")) return "💼";
  if (name.includes("indeed")) return "🔍";
  if (name.includes("glassdoor")) return "🏢";
  if (name.includes("dice")) return "🎲";
  if (name.includes("ziprecruiter")) return "📮";
  if (name.includes("monster")) return "👾";
  if (name.includes("jooble")) return "🌐";
  if (name.includes("adzuna")) return "📊";
  return "🔗";
};
