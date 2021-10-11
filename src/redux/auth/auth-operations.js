import { createAsyncThunk } from '@reduxjs/toolkit';

import contactsAPI from '../../services/api-phonebook';

const register = createAsyncThunk(
  '/auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      return await contactsAPI.registerNewUser(credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await contactsAPI.logInUser(credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk(
  '/auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await contactsAPI.logOutUser();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      if (token === null) {
        return rejectWithValue();
      }
      return await contactsAPI.getCurrentUser(token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
};

export default authOperations;
