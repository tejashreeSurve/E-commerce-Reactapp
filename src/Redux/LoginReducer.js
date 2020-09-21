export const initialState = {
  userEmail: "",
  password: "",
  userEmailError: "",
  passwordError: "",
  loginButton: false,
  womenProduct: [],
  menProduct: [],
  userdetails: {},
  chooseOption: [],
  chooseProduct: {},
  noOfItems: 0,
  cartList: [],
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
    case "SET_WOMENPRODUCTLIST":
      return { ...state, womenProduct: action.payload };
    case "SET_MENPRODUCTLIST":
      return { ...state, menProduct: action.payload };
    case "SET_USERDETAILS":
      return { ...state, userdetails: action.payload };
    case "SET_CHOOSEOPTION":
      return { ...state, chooseOption: action.payload };
    case "SET_CHOOSEPRODUCT":
      return { ...state, chooseProduct: action.payload };
    case "SET_NOOFITEMS":
      return { ...state, noOfItems: action.payload };
    case "SET_CARTLIST":
      return { ...state, cartList: [...state.cartList, action.payload] };
    default:
      return state;
  }
};

export default LoginReducer;
