import { createSlice } from "@reduxjs/toolkit";

const linksSlice = createSlice({
  name: "links",
  initialState: {
    links: [],
  },
  reducers: {
    addLink: ({ links }, { payload }) => {
      links.push(payload);
    },
  },
});

export const { addLink } = linksSlice.actions;

export default linksSlice.reducer;
