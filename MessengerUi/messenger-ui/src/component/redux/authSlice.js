import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {instance, setTokenToRequests} from "../api/authInstance";
import {message} from "antd";

export const login = createAsyncThunk("user", async ({email, password}) => {

  const body = {
    email: email, password: password
  }
  const token = btoa(login + ':' + password);
  setTokenToRequests(token);
  let resData = null
  await instance.post("/user/in-login", body)
  .then(data =>  resData = data);
  return {token, email};
});

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuthorized: false,
    email: '',
    token: '',
    pending: false,
    error: false,
  },
  reducers: {
    logout: () => {
      return {
        pending: false,
        error: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, (state) => {
      state.pending = true;
      state.isAuthorized = false;
    })
    .addCase(login.fulfilled, (state, {payload}) => {
      state.pending = false;
      state.isAuthorized = true;
      state.token = payload.token;
      state.email = payload.email;
    })
    .addCase(login.rejected, (state) => {
      message.error('Неправильный логин или пароль');
      state.pending = false;
      state.error = true;
      state.isAuthorized = false;
      state.token = '';
      state.email = '';
    });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
