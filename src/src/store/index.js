import user from './userSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
    user    
});

const store = configureStore({
    reducer,
});
export default store;