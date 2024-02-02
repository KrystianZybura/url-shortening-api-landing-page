import { Links } from "../../utils/types";

const LOCAL_STORAGE_KEY = "links";

export const setLocalStorage = (links: Links) =>
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(links));

export const getLinksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
