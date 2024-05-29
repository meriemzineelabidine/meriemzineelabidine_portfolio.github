import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk} from "@reduxjs/toolkit";
import axios  from 'axios';
//Api get all about
export const getabout = createAsyncThunk("/getabout", async () => {
    try {
      let resultat = await axios.get("http://localhost:5500/about/allabout");
      return resultat;
    } catch (error) {
      console.log(error);
    }
  });

const initialState = {
    about: null,
    status: null,
}
export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getabout.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getabout.fulfilled, (state, action) => {
        state.status = "success";
        state.about = action.payload?.data?.voicilist;
      })
      .addCase(getabout.rejected, (state) => {
        state.status = "fail";
      })
 
}})


export const {} = aboutSlice.actions;
export default aboutSlice.reducer;