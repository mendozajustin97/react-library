import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Title",
        author: "Author",
        isbn: "ISBN",
        genre: "Genre",
    },
    reducers: {
        //action is submitted elsewhere - written to state.name
        chooseTitle: (state,action) => { state.title = action.payload }, // All we are doing is setting the input to the state.name
        chooseAuthor: (state,action) => { state.author = action.payload },
        chooseISBN: (state,action) => { state.isbn = action.payload },
        chooseGenre: (state,action) => { state.genre = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseISBN, chooseGenre } = rootSlice.actions