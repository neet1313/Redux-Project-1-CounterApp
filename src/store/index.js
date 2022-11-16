import { createSlice, configureStore } from '@reduxjs/toolkit';

const initalState = { counter: 0, show: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducer: {
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        incrementBy10(state, action) { state.counter += action.payload },
        toggle(state) { !state.show }
    }
});


const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;