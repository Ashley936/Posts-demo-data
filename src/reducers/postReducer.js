export const posts = (post = [], action) => {
  /* if (action.type === "FETCH_POST") {
    return action.payload.data;
  } */
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    default:
      return post;
  }
};
