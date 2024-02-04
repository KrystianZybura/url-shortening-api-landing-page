import { call, put, select, takeEvery } from "redux-saga/effects";
import { selectLinks, setLinks, shortenTheLink } from "./linksSlice";
import { linksShortenerAPI } from "./shortenLinkAPI";
import { BitlyApiResponse } from "../../utils/types";
import { setLocalStorage } from "./getLinksFromLocalStorage";

function* shortenLinksHandler({
  payload: defaultLink,
}: {
  payload: {
    defaultLink: string;
  };
}) {
  try {
    const { id, link, long_url } = yield call(
      linksShortenerAPI,
      defaultLink
    ) as BitlyApiResponse;
    yield put(setLinks({ id: id, defaultLink: long_url, shortenedLink: link }));
  } catch (error) {
    console.error(error);
    yield call(alert, "Something is off");
  }
}

function* saveLinksInLocalStorageHandler() {
  try {
    const { links } = yield select(selectLinks);

    yield call(setLocalStorage, links);
  } catch (error) {
    console.error(error);
  }
}

export function* linksSaga() {
  yield takeEvery(shortenTheLink.type, shortenLinksHandler);
  yield takeEvery("*", saveLinksInLocalStorageHandler);
}
