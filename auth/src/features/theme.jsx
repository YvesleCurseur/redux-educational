import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: {
            initialState
        }
    },
    reducers: {
        colorChange: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { colorChange } = themeSlice.actions

export default themeSlice.reducer