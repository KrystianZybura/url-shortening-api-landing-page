import { call, put, takeEvery } from "redux-saga/effects";
import { setLinks, shortenTheLink } from "./linksSlice";
import { linksShortenerAPI } from "./shortenLinkAPI";
import { bitlyApiResponse } from "../../utils/types";

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
    ) as bitlyApiResponse;
    yield put(setLinks({ id: id, defaultLink: long_url, shortenedLink: link }));
  } catch (error) {
    console.error(error);
    yield call(alert, "Something is off");
  }
}

export function* linksSaga() {
  yield takeEvery(shortenTheLink.type, shortenLinksHandler);
}
