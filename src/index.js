/* ライブラリのインポート */
import {createStore} from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
//reducerを設定
import counter from './counter'
//viewを設定
import App from './app'
//storeを作成
const store = createStore(counter);

//画面更新用の関数を作成
const render = () => {
    ReactDOM.render(
        <App
            value={store.getState()}
            onIncrement={() =>
                store.dispatch({
                    type: 'INCREMENT'
                })}
            onDecrement={() =>
                store.dispatch({
                    type: 'DECREMENT'
                })}
        />,
        document.getElementById('root')
    )
};

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render);

//最初に画面を表示（0が表示される)
render();