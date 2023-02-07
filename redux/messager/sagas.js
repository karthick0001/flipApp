import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
const MessengerSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_CONVERSATION_LIST, getConversationList),
        yield takeEvery(actions.SEND_MESSAGE, sendMessage),
        yield takeEvery(actions.GET_PRODUCTS_LIST, productList),
        

    ]);
};


const productList = function* (data) {
    try {
        const result = yield call(() =>
            axios.get(`https://fakestoreapi.com/products`)
        );

        yield put({ type: actions.SET_PRODUCTS_LIST, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};
const getConversationList = function* (data) {
    // const { payload } = data
    // try {
    //     const result = yield call(() =>
    //         axios.get(`${API_URL}/api/conv/byId/${payload}`)
    //     );

    //     yield put({ type: actions.SET_CONVERSATION_LIST, payload: result.data });
    // } catch (err) {
    //     console.log(err)
    // }
};

const sendMessage = function* (data) {
    // const { payload } = data
    // console.log(payload)
    // try {
    //     const result = yield call(() =>
    //         axios.post(`https://insta-clone-database.vercel.app/api/message/send`, payload)
    //     );
    //     console.log(result)
    //     //  yield put({ type: actions.SET_CONVERSATION_LIST, payload: result.data });
    // } catch (err) {
    //     console.log(err)
    // }
}

export default MessengerSaga;