import { call, put, takeEvery } from "redux-saga/effects";
import { setLinks, shortenLink } from "./linksSlice";

function* shortenLinksHandler() {
  try {
    // const linksData = yield call(shortenLink, link);
    // yield put(setLinks(linksData));
  } catch (error) {
    console.error(error);

    yield call(alert, "Something is off");
  }
}

export function* linksSaga() {
  yield takeEvery(shortenLink.type, shortenLinksHandler);
}
