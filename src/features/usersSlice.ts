import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../types/User';
import { fetchUsers } from '../services/api';

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

type Filter = {
  filterBy: 'name' | 'username' | 'email' | 'phone';
  value: string;
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<Filter>) => {
      const { filterBy, value } = action.payload;
      state.visibleUsers = state.users.filter(user =>
        user[filterBy].toLowerCase().includes(value.toLowerCase())
      );
    },
    initial: (state) => {
      state.visibleUsers = state.users;
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
export const { filter, initial } = usersSlice.actions;

export const init = createAsyncThunk('users/fetch', () => {
  return fetchUsers();
});
