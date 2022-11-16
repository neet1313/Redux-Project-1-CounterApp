import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, show: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        incrementBy10(state, action) { state.counter = state.counter + action.payload },
        toggle(state) { state.show = !state.show }
    }
});

const initialAuthState = { isAuthenticated: false };

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        authentication: authenticationSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;
export default store;