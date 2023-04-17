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
  const data = await instance.post("/user/in-login", body)
  .then(data => resData = data);

  let username = data.data.username
  let userId = data.data.userId
  let phoneNumber = data.data.phoneNumber
  let gender = data.data.gender
  let image = data.data.image
  let birthDate = data.data.birthDate
  let createdDate = data.data.createdDate
  let isActive = data.data.isActive
  return {
    token,
    email,
    username,
    userId,
    phoneNumber,
    gender,
    image,
    birthDate,
    createdDate,
    isActive
  };
});

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuthorized: false,
    username: '',
    email: '',
    isActive: '',
    userId: '',
    gender: '',
    image: '',
    phoneNumber: '',
    birthDate: '',
    createdDate: '',
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
      state.username = payload.username
      state.isActive = payload.isActive
      state.userId = payload.userId
      state.gender = payload.gender
      state.image = payload.image
      state.phoneNumber = payload.phoneNumber
      state.birthDate = payload.birthDate
      state.createdDate = payload.createdDate
    })
    .addCase(login.rejected, (state) => {
      message.error('Неправильный логин или пароль');
      state.pending = false;
      state.error = true;
      state.isAuthorized = false;
      state.token = '';
      state.email = '';
      state.username = '';
    });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
