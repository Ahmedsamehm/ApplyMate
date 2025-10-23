const statusClasses = {
  Accepted: {
    text: "text-green-500",
    bg: "bg-green-700/40",
    badge: "bg-green-200/10",
  },
  Pending: {
    text: "text-yellow-500",
    bg: "bg-yellow-700/40",
    badge: "bg-yellow-200/10",
  },
  Rejected: {
    text: "text-red-700",
    bg: "bg-red-400/40",
    badge: "bg-red-200/10",
  },
} as const;

export function getStatusColor(status: "Accepted" | "Pending" | "Rejected") {
  return statusClasses[status] || statusClasses.Accepted;
}
