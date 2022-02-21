import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5001/api/tasks/";

const initialState = {
  tasks: [],
  isLoading: false,
  errorMessage: "",
};

export const getTask = createAsyncThunk("task/getTask", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(API_URL, config);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    // return thunkAPI.rejectWithValue(err)
  }
});

export const addTask = createAsyncThunk("task/addTask", async (taskData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URL, taskData, config);
    return response.data;
  } catch (err) {
    console.log(err);
    console.log(err.toJSON());
    console.log(err.message);
    // return thunkAPI.rejectWithValue(err)
  }
});

export const deleteTask = createAsyncThunk("task/deleteTask", async (taskId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(`${API_URL}${taskId}`, config);
    console.log(response.data);
    const tasks = thunkAPI.getState().tasks.tasks;
    console.log(tasks);
    const filteredTasks = tasks.filter((task) => task._id !== response.data._id);
    return filteredTasks;
  } catch (err) {
    console.log(err);
    // return thunkAPI.rejectWithValue(err)
  }
});

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
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
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.tasks = action.payload;
        return state;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        return state;
      });
  },
});

export default taskSlice.reducer;

export const { reset } = taskSlice.actions;
