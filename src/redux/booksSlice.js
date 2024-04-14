import { createSlice } from '@reduxjs/toolkit';
export const bookSlice = createSlice({
    name:'books',
    initialState :{
        selectedCategory: "AGE 3-5"
    },
    reducers: {
        filterCategory: (state, action) =>{
            state.selectedCategory = action.payload
        }

    },
})
export const getSelectedCategory = state =>state.books.selectedCategory;
export const { filterCategory } = bookSlice.actions
export default bookSlice.reducer;