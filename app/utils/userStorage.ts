export const getUser = () => {
  if (typeof window === "undefined") return "Guest";

  const user = localStorage.getItem("name");
  return user ? user : "Guest";
};
