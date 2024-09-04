import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../types/User";
import { fetchUsers } from "../services/api";

type UsersState = {
  users: User[];
  loading: boolean;
  error: string;
  queryName: string;
  queryUserName: string;
  queryEmail: string;
  queryPhone: string;
};

const initialState: UsersState = {
  users: [],
  loading: false,
  error: '',
  queryName: '',
  queryUserName: '',
  queryEmail: '',
  queryPhone: '',
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    queryName: (state, action: PayloadAction<string>) => {
      state.queryName = action.payload;
    },
    queryUserName: (state, action: PayloadAction<string>) => {
      state.queryUserName = action.payload;
    },
    queryEmail: (state, action: PayloadAction<string>) => {
      state.queryEmail = action.payload;
    },
    queryPhone: (state, action: PayloadAction<string>) => {
      state.queryPhone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state) => {
      state.error = 'Something went wrong!';
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;
export const { queryName, queryUserName, queryEmail, queryPhone } = usersSlice.actions;

export const init = createAsyncThunk('users/fetch', () => {
  return fetchUsers();
});
