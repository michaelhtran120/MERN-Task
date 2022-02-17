import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/users/";

// Check local storage for user
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
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
    return response.data;
  } catch (err) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Login User
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}login`, user);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (err) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
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
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.user = action.payload;
        return state;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        state.user = null;
        return state;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.user = action.payload;
        return state;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        state.user = null;
        return state;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;

export const { reset } = authSlice.actions;
