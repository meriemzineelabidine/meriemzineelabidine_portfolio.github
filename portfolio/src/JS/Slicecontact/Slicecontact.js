import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk} from "@reduxjs/toolkit";
import axios  from 'axios';
//Api get all contact
export const getcontact = createAsyncThunk("/getcontact", async () => {
    try {
      let resultat = await axios.get("http://localhost:5500/contact/allcontact");
      return resultat;
    } catch (error) {
      console.log(error);
    }
  });
  //send message
export const sendmessage=createAsyncThunk('/sendmessage',async(newmessage)=>{
    try{
        let resultat= await axios.post('http://localhost:5500/contact/addcontact',newmessage)
        return  resultat;   
  
    }catch (error) {
        console.log(error)
    }
  })

const initialState = {
    contact: null,
    status: null,
}
export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getcontact.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getcontact.fulfilled, (state, action) => {
        state.status = "success";
        state.contact = action.payload?.data?.voicilist;
      })
      .addCase(getcontact.rejected, (state) => {
        state.status = "fail";
      })
       //send message
       .addCase(sendmessage.pending, (state) => {
        state.status = "pending";
      })
      .addCase(sendmessage.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(sendmessage.rejected, (state) => {
        state.status = "fail";
      })
 
}})


export const {} = contactSlice.actions;
export default contactSlice.reducer;