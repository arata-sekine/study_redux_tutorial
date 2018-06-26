/* ライブラリのインポート */
import React from 'react';
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//viewを設定
import App from './components/App'
//reducerを設定
import rootReducer from './reducers'
//storeを作成
const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);