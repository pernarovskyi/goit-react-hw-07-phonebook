import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});