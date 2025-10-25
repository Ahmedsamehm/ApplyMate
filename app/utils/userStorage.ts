export const getUser = () => {
  const user = localStorage.getItem("name");
  return user ? user : "Guest";
};
