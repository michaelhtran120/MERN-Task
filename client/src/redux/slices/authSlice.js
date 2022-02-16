import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/users/";

// Check local storage for user
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  error: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

// Register User
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}signup`, user);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
  } catch (error) {
    const message = (error.response && error.response.data && error.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Logout User
export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.user = null;
      });
  },
});

export default authSlice.reducer;

export const { reset } = authSlice.actions;
