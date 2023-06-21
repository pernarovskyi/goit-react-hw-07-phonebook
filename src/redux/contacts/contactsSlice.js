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
  }
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  }
};

const handleFetchContactsFulfilled = (state, action) => {
  return {
    ...state,
      isLoading: false,
      error: null,
      items: action.payload,
  }
}

const handleAddContactsFulfilled = (state, action) => {
  return {
      ...state,
      isLoading: false,
      error: null,
      items: [...state.items, action.payload],
  }
}

const handleDeleteContactsFulfilled = (state, action) => {
  return {
      ...state,
      isLoading: false,
      error: null,
      items: state.items.filter(item => item.id !== action.payload.id),
  }
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled]: handleFetchContactsFulfilled,
    
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled]: handleAddContactsFulfilled,

    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled]: handleDeleteContactsFulfilled,
  },
});

export const contactsReducer = contactsSlice.reducer;
