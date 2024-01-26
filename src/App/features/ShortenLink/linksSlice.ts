import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../utils/types";

const linksSlice = createSlice({
  name: "links",
  initialState: {
    longUrl: "",
    links: [
      {
        id: 1,
        defaultLink: "https://github.com/KrystianZybura/Personal-Homepage",
        shortenedLink: "https://shorturl.at/xyST6",
      },
    ],
  },
  reducers: {
    setLinks: ({ links }, { payload }) => {
      links.push(payload);
    },
    shortenTheLink: (state, { payload }) => {
      state.longUrl = payload;
    },
  },
});

export const { setLinks, shortenTheLink } = linksSlice.actions;
export const selectLinks = (state: State) => state.links;
export default linksSlice.reducer;
