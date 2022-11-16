import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import authenticationSlice from './slices/authenticationSlice';


const store = configureStore({
    reducer: {
        counter: counterSlice,
        authentication: authenticationSlice
    }
});

export default store;