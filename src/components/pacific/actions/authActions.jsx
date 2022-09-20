import {Types} from "../constants/types";
export const userAction = {
  login_user: (user) => ({ type: Types.LOGIN_USER, payload: { user } }),
  add_user: (user) => ({ type: Types.ADD_USER, payload: { user } }),
  logout_user: (user) => ({ type: Types.LOGOUT_USER, payload: { user } }),
  update_user: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),
  delete_user: (user) => ({ type: Types.DELETE_USER, payload: { user } }),
  formsubmission: (status) => ({ type: Types.FORM_SUBMIT, payload: status }),
  forgot_password: (user) => ({ type: Types.FORGOT_PASSWORD, payload: {user} }),
  reset_password: (user) => ({ type: Types.RESET_PASSWORD, payload: {user} }),
  signedin: (status) => ({ type: Types.SIGNED_IN,  payload: status }),
  validate_form: (status) => ({ type: Types.VALIDATE_FORM, payload: {status} }),
  confirm_email: (status) => ({ type: Types.CONFIRM_EMAIL, payload: {status} }),
};
