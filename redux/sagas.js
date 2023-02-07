import { all } from "redux-saga/effects";

import MessengerSaga from "./messager/sagas";
export default function* rootSaga() {
    yield all([
        MessengerSaga()
    ]);
};