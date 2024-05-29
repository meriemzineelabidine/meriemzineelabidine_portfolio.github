import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk} from "@reduxjs/toolkit";
import axios  from 'axios';
//Api get all project
export const getproject = createAsyncThunk("/getproject", async () => {
    try {
      let resultat = await axios.get("http://localhost:5500/projects/allproject");
      return resultat;
    } catch (error) {
      console.log(error);
    }
  });

const initialState = {
    project: null,
    status: null,
}
export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getproject.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getproject.fulfilled, (state, action) => {
        state.status = "success";
        state.project = action.payload?.data?.voicilist;
      })
      .addCase(getproject.rejected, (state) => {
        state.status = "fail";
      })
 
}})


export const {} = projectSlice.actions;
export default projectSlice.reducer;