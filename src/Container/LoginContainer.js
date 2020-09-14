import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";

const LoginContaier = () => {
  const reduxDispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const {
    userEmail,
    password,
    userEmailError,
    passwordError,
    loginButton,
    userdetails,
  } = reduxState;

  const axois = (event) => {
    reduxDispatch({
      type: `SET_${event.target.name.toUpperCase()}`,
      payload: event.target.value,
    });
  };

  const loginDetails = { userEmail, password };
  const validateData = Yup.object().shape({
    userEmail: Yup.string()
      .email("Email must be in a valid Email")
      .required("Email-id is Required"),
    password: Yup.string()
      .min(
        7,
        "Password is too short - should be 8 chars minimum and must contain numbers."
      )
      .required("Password is Required"),
  });

  return <LoginComponent />;
};
