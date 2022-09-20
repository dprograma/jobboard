import { Types } from "../constants/types";

const initState = {
  post: [],
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.ADD_HOME_PAGE:
      console.log("home page data: ", action.payload);
      return {
        ...state,
        post: action.payload,
      };
    default:
        return state;
  }
};

export default homeReducer;
