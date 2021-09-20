import { combineReducers } from "redux";
import { posts } from "./postReducer";
import { users } from "./userReducer";

export default combineReducers({ posts,users });

// working fine but for project structure done in another file
/* const posts = (post = [], action) => {
  if (action.type === "FETCH_POST") {
    return action.payload.data;
  }
  return post;
}; */

//Reducers are pure => reducer should not move out of itself during return
/* ex: return document.querySelector("#id") //bad
    return axios.get(url) // bad*/

// Reducers should not mutate state (we can but we shouldn't) why?
/* Ans: if prvious value is equal to new value.... component won't re-render */