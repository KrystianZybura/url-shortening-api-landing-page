import { createSlice } from "@reduxjs/toolkit";

type State = {
  links: { defaultLink: string; shortenedLink: string };
};

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
    shortenLink: () => {},
  },
});

export const { setLinks, shortenLink } = linksSlice.actions;
export const selectLinks = (state: State) => state.links;
export default linksSlice.reducer;
