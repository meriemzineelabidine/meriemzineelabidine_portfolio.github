import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk} from "@reduxjs/toolkit";
import axios  from 'axios';
//Api get all skills
export const getskills = createAsyncThunk("/getskills", async () => {
    try {
      let resultat = await axios.get("http://localhost:5500/skills/allskills");
      return resultat;
    } catch (error) {
      console.log(error);
    }
  });

const initialState = {
    skills: null,
    status: null,
}
export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getskills.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getskills.fulfilled, (state, action) => {
        state.status = "success";
        state.skills = action.payload?.data?.voicilist;
      })
      .addCase(getskills.rejected, (state) => {
        state.status = "fail";
      })
 
}})


export const {} = skillsSlice.actions;
export default skillsSlice.reducer;