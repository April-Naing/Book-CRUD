import { createSlice } from "@reduxjs/toolkit";

const paginatePageSlice = createSlice({
    name : 'page',
    initialState : {
        page : 1 
    } ,
    reducers : {
        nextPage : ( state ) => {
            state.page = state.page + 1
        },
        prevPage : (state) => {
            state.page = state.page - 1 
        }
    }
})

export const paginatePageAction = paginatePageSlice.actions ;

export default paginatePageSlice ;