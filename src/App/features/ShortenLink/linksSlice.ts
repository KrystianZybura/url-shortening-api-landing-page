import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../utils/types";
import { getLinksFromLocalStorage } from "./getLinksFromLocalStorage";

const linksSlice = createSlice({
  name: "links",
  initialState: {
    longUrl: "",
    links: getLinksFromLocalStorage() || [],
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
