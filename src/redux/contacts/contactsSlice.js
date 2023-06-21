import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
    error: '',
  };
};

const handleRejected = (state, { error }) => {
  return {
    ...state,
    isLoading: false,
    error: error.message,
  };
};

const handleFetchContactsFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: action.payload,
  };
};

const handleAddContactsFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

const handleDeleteContactsFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactsFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactsFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);    
  },
});

export const contactsReducer = contactsSlice.reducer;
