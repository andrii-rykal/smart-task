import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../types/User";
import { fetchUsers } from "../services/api";

type UsersState = {
  users: User[];
  visibleUsers: User[];
  loading: boolean;
  error: string;
};

const initialState: UsersState = {
  users: [],
  visibleUsers: [],
  loading: false,
  error: '',
};

function includesQuery(str: string, query: string): boolean {
  return str.toLowerCase().includes(query.toLowerCase());
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterName: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => includesQuery(user.name, action.payload));
    },
    filterUserName: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => includesQuery(user.username, action.payload));
    },
    filterEmail: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => includesQuery(user.email, action.payload));
    },
    filterPhone: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => includesQuery(user.phone, action.payload));
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
export const { filterName, filterEmail, filterPhone, filterUserName } = usersSlice.actions;

export const init = createAsyncThunk('users/fetch', () => {
  return fetchUsers();
});
