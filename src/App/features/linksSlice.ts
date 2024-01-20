import { createSlice } from "@reduxjs/toolkit";

const linksSlice = createSlice({
  name: "links",
  initialState: {
    links: [
      {
        defaultLink: "https://github.com/KrystianZybura/Personal-Homepage",
        shortenedLink: "https://shorturl.at/xyST6",
      },
    ],
  },
  reducers: {
    addLink: ({ links }, { payload }) => {
      links.push(payload);
    },
  },
});

export const { addLink } = linksSlice.actions;
export const selectLinks = (state) => state.links;
export default linksSlice.reducer;
