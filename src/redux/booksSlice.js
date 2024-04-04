import { createSlice } from '@reduxjs/toolkit';


export const bookSlice = createSlice({
    name:'books',
    initialState :{
        selectedCategory: "Age 3-5"
    },
    reducers: {

    },
})
export const getSelectedCategory = state =>state.books.selectedCategory;
export default bookSlice.reducer