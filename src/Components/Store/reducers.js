import { setUserData } from "./actions";

const initialState = {
  userData: {
    username: "",
    password: ""
  },

  errors: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...action.payload
      };
    case "GET_USER_DATA":
      return {
        ...state
      };
  }
};

export default reducer;
