import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../utils/fetch";
import { types } from "./../types/types";

export const Login = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken("auth", { email, password }, "POST");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);

      dispatch(
        typeLogin({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const typeLogin = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const Register = (email, password, name) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      "auth/register",
      { email, password, name },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);

      dispatch(
        typeLogin({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const Checking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken("auth/renew");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);

      dispatch(
        typeLogin({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      dispatch(check());
    }
  };
};

const check = () => ({ type: types.authChecking });

export const Logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch({ type: types.authLogout });
  };
};
