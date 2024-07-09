import {createSlice} from "@reduxjs/toolkit"

const SearchSlice = createSlice({
    name: "search",
    initialState:(" "),
    reducers:{
        setsearch:(state , action) => 
        {
            return state = action.payload;
        },
    },
})
export const {setsearch} = SearchSlice.actions
export default SearchSlice.reducer;