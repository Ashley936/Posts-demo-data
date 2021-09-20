import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
export const fetchPost = () => async (dispatch, getState) => {
  //request
  const res = await jsonPlaceholder.get("/posts");

  //dispatch
  dispatch({ type: "FETCH_POST", payload: res.data });
};

export const fetchUser = (id) => async (dispatch, getState) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: res.data });
};

export const fetchPostsandUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());
  
  //fetchPost  will return a function => that will be invoked by redux-thunk => that will dispatch the action-creater
  //so to call an action creaer inside an action creater we hv to dispatch it
  //async await does not work for forEach
  const ids = _.uniq(_.map(getState().posts, 'userId'))
  ids.forEach((id) => dispatch(fetchUser(id)))
};

//redux-thunk invokes the function and pass disatch and getState functions as arguments to it.
//This way we can manually dispatch the action after request is completed.
