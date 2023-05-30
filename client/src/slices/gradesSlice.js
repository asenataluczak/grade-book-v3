import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allGrades: [],
};

const gradesSlice = createSlice({
    name: "grades",
    initialState,
    reducers: {
        setGrades: (state, action) => {
            state.allGrades = action.payload;
        },
    },
});

export const { setGrades } = gradesSlice.actions;
export default gradesSlice.reducer;
