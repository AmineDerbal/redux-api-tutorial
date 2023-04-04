import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://randomuser.me/api/?results=5';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const getUsersData = createAsyncThunk('users/getUserData', async () => {
  try {
    const query = await fetch(url);
    const data = await query.json();
    return data.results;
  } catch (error) {
    return error;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsersData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsersData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsersData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default usersSlice.reducer;
