import { Types } from "../constants/types";

const initState = {
  user: {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
    phone: "",
    profileImage: "",
    address: "",
    country: "",
    gender: "",
    dob: "",
  },
  formErrors: { username: "", email: "", password: "", confirm: "" },
  usernameValid: false,
  emailValid: false,
  passwordValid: false,
  confirmValid: false,
  formValid: false,
  submitted: false,
  signedin: false,
  emailConfirm: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      console.log("user login details", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case Types.ADD_USER:
      console.log("user signup details", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case Types.LOGOUT_USER:
      console.log("user logout details", action.payload);
      return {
        ...state,
        user: action.payload,
        signedin: false,
      };
    case Types.UPDATE_USER:
      console.log("update user details", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case Types.DELETE_USER:
      console.log("delete user details", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case Types.FORM_SUBMIT:
      console.log("user form submisiion", action.payload);
      return {
        ...state,
        submitted: action.payload,
      };
    case Types.SIGNED_IN:
      console.log("Signin details", action.payload);
      return {
        ...state,
        signedin: action.payload,
      };
    case Types.FORGOT_PASSWORD:
      console.log("Forgot password details", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case Types.RESET_PASSWORD:
      console.log("Forgot password details", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case Types.VALIDATE_FORM:
      console.log("Form validation details", action.payload);
      const {fieldValidationErrors, usernameValid, emailValid, passwordValid, confirmValid, formValid} = action.payload.status
      return {
        ...state,
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmValid: confirmValid,
        formValid: formValid,
      };
    case Types.CONFIRM_EMAIL:
        console.log("Email confirmation details", action.payload)
        return {
          ...state,
          emailConfirm: action.payload
        }
    default:
      return state;
  }
};

export default userReducer;
