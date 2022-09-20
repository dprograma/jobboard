import { Types } from "../constants/types";
import axios from "axios";

export const loadPage = () => {
  return (dispatch) => {
  axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
    console.log(res.data.slice(1, 10));
    dispatch(loadData(res.data.slice(1, 10)));
  });
  }
}

const loadData = (data) => {
  return { type: Types.ADD_HOME_PAGE, payload: data };
}

