export const setUserEmail = (data) => ({
  type: "SET_USEREMAIL",
  payload: data,
});

export const setPassword = (data) => ({
  type: "SET_PASSWORD",
  payload: data,
});

export const setUserEmailError = (data) => ({
  type: "SET_USEREMAILERROR",
  payload: data,
});

export const setPasswordError = (data) => ({
  type: "SET_PASSWORDERROR",
  payload: data,
});

export const setLoginButton = (data) => ({
  type: "SET_LOGINBUTTON",
  payload: data,
});

export const setUserDetails = (data) => ({
  type: "SET_USERDETAILS",
  payload: data,
});
