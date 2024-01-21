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
    setLinks: ({ links }, { payload }) => {
      links.push(payload);
    },
  },
});

export const { setLinks } = linksSlice.actions;
export const selectLinks = (state) => state.links;
export default linksSlice.reducer;
