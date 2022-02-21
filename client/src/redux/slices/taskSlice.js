import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/tasks/";

const initialState = {
  tasks: null,
  isLoading: false,
  errorMessage: "",
};

export const getTask = createAsyncThunk("task/getTask", async (thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    // return thunkAPI.rejectWithValue(err)
  }
});

export const addTask = createAsyncThunk("task/addTask", async (task, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}`, task);
    return response.data;
  } catch (err) {
    console.log(err);
    // return thunkAPI.rejectWithValue(err)
  }
});

export const deleteTask = createAsyncThunk("task/deleteTask", async(taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`${API_URL}${taskId}`);
    console.log(response);
  } catch (err) {
    console.log(err);
    // return thunkAPI.rejectWithValue(err)
  }
});

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTask.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
        state.errorMessage = "";
        return state;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        return state;
      })
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.tasks = [...state.tasks, action.payload];
        return state;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        return state;
      });
  },
});
