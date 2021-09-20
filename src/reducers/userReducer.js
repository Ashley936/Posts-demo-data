export const users = (users = [], action) => {
  if (action.type === "FETCH_USER") return [...users, action.payload];
  return users;
};