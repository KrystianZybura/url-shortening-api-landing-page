import { createSlice } from "@reduxjs/toolkit";
import { Links, State } from "../../utils/types";

const linksSlice = createSlice({
  name: "links",
  initialState: {
    longUrl: "",
    links: [] as Links,
  },
  reducers: {
    setLinks: (state, { payload }) => {
      state.links.push(payload);
    },
    shortenTheLink: (state, { payload }) => {
      state.longUrl = payload;
    },
  },
});

export const { setLinks, shortenTheLink } = linksSlice.actions;
export const selectLinks = (state: State) => state.links;
export default linksSlice.reducer;
