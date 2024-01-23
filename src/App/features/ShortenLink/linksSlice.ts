import { createSlice } from "@reduxjs/toolkit";

interface State {
  links: {
    longUrl: string;
    links: { id: number; defaultLink?: string; shortenedLink?: string }[];
  };
}

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
    // updateLinkData: ({ links }, { payload }) => {
    //   const index = links.findIndex(
    //     ({ defaultLink }) => defaultLink === payload.defaultLink
    //   );

    //   links[index].shortenedLink = payload.shortenedLink;
    // },
    shortenTheLink: (state, { payload }) => {
      state.longUrl = payload;
    },
  },
});

export const { setLinks, shortenTheLink } = linksSlice.actions;
export const selectLinks = (state: State) => state.links;
export default linksSlice.reducer;
