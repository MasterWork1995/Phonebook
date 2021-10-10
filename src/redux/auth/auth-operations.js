import { createAsyncThunk } from '@reduxjs/toolkit';

import contactsAPI from '../../services/api-phonebook';

const register = createAsyncThunk('/auth/register', async credentials => {
  try {
    return await contactsAPI.registerNewUser(credentials);
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk('/auth/login', async credentials => {
  try {
    return await contactsAPI.logInUser(credentials);
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk('/auth/logout', async () => {
  try {
    return await contactsAPI.logOutUser();
  } catch (error) {
    console.log(error);
  }
});

const operations = {
  register,
  logIn,
  logOut,
};

export default operations;
