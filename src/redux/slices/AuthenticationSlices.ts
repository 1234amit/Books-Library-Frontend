import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUserPayload, User } from "../../models/User";
import axios from "axios";

interface AuthenticationSliceState {
  loggedInUser: User | undefined;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: AuthenticationSliceState = {
  loggedInUser: undefined,
  loading: false,
  error: false,
  registerSuccess: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: LoginUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8000/auth/login", user);
      return req.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AuthenticationSlices = createSlice({
  name: "authentication",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //pending login
    builder.addCase(loginUser.pending, (state, action) => {
      state = {
        ...state,
        error: false,
        loading: true,
      };
      return state;
    });

    //Resolved login
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        loggedInUser: action.payload,
      };

      return state;
    });

    //rejected logic
    builder.addCase(loginUser.rejected, (state, action) => {
      state = {
        ...state,
        error: true,
        loading: false,
      };
      return state;
    });
  },
});

export const {} = AuthenticationSlices.actions;
export default AuthenticationSlices.reducer;
