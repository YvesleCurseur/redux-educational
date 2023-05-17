import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            initialState
        }
    },
    reducers: {
        /*
         * state - The current state of the application.
         * action - The action object passed to the reducer.
         * return The updated state with the user logged in.
         */
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialState
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer