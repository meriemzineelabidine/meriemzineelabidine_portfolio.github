import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./Sliceproject/Sliceproject";
import aboutSlice from "./Sliceabout/Sliceabout";
import Sliceskills from "./Sliceskills/Sliceskills";
import contactSlice from "./Slicecontact/Slicecontact";

export const store = configureStore({
  reducer: {
    project: projectSlice,
    about: aboutSlice,
    skills: Sliceskills,
    contact: contactSlice,
  },
});
