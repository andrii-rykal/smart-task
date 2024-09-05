import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../types/User';
import { fetchUsers } from '../services/api';

type UsersState = {
  users: User[];
  visibleUsers: User[];
  loading: boolean;
  error: string;
  queryName: string;
  queryUserName: string;
  queryEmail: string;
  queryPhone: string;
};

const initialState: UsersState = {
  users: [],
  visibleUsers: [],
  loading: false,
  error: '',
  queryEmail: '',
  queryName: '',
  queryPhone: '',
  queryUserName: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filter: (state) => {
      state.visibleUsers = state.users
        .filter(user => user.name.toLowerCase().includes(state.queryName.toLowerCase()))
        .filter(user => user.username.toLowerCase().includes(state.queryUserName.toLowerCase()))
        .filter(user => user.email.toLowerCase().includes(state.queryEmail.toLowerCase()))
        .filter(user => user.phone.toLowerCase().includes(state.queryPhone.toLowerCase()))
    },
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
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      state.users = action.payload;
      state.visibleUsers = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, state => {
      state.error = 'Something went wrong!';
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;
export const { queryEmail, queryName, queryPhone, queryUserName, filter } = usersSlice.actions;

export const init = createAsyncThunk('users/fetch', () => {
  return fetchUsers();
});
