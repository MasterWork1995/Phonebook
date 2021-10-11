import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsAPI from '../../services/api-phonebook';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const result = await contactsAPI.addContact({ name, number });
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
