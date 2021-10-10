import axios from "axios";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

export const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }

  //   axios
  //     .get("/contacts")
  //     .then(({ data }) => dispatch(getContactsSuccess(data)))
  //     .catch((error) => dispatch(getContactsError(error)));
};

export const addContact = (name, number) => async (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }

  //   axios
  //     .post("/contacts", contact)
  //     .then(({ data }) => dispatch(addContactSuccess(data)))
  //     .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }

  //   axios
  //     .delete(`/contacts/${id}`)
  //     .then(() => dispatch(deleteContactSuccess(id)))
  //     .catch((error) => dispatch(deleteContactError(error)));
};
