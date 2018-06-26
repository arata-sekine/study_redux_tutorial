/* ライブラリのインポート */
import React from 'react';
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//reducerを設定
import counterReducer from './reducers/counterReducer'
//viewを設定
import App from './components/App'
//storeを作成
const store = createStore(counterReducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);