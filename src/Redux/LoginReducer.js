export const initialState = {
  userEmail: "",
  password: "",
  userEmailError: "",
  passwordError: "",
  loginButton: false,
  userdetails: {},
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USEREMAIL":
      return { ...state, userEmail: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_USEREMAILERROR":
      return { ...state, userEmailError: action.payload };
    case "SET_PASSWORDERROR":
      return { ...state, passwordError: action.payload };
    case "SET_LOGINBUTTON":
      return { ...state, loginButton: action.payload };
    case "SET_USERDETAILS":
      return { ...state, userdetails: action.payload };
    default:
      return state;
  }
};

export default LoginReducer;
