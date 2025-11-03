const statusClasses = {
  applied: {
    text: "text-blue-500",
    bg: "bg-blue-700/40",
    badge: "bg-blue-200/10",
  },
  accepted: {
    text: "text-green-500",
    bg: "bg-green-700/40",
    badge: "bg-green-200/10",
  },
  pending: {
    text: "text-yellow-500",
    bg: "bg-yellow-700/40",
    badge: "bg-yellow-200/10",
  },
  rejected: {
    text: "text-red-700",
    bg: "bg-red-400/40",
    badge: "bg-red-200/10",
  },
  "": {
    text: "text-gray-500",
    bg: "bg-gray-700/40",
    badge: "bg-gray-200/10",
  },
} as const;

export function getStatusColor(status: "applied" | "accepted" | "pending" | "rejected" | "") {
  return statusClasses[status] || statusClasses.accepted;
}
