/* ライブラリのインポート */
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

/* Appコンポーネントのインポート */
import App from './app'
/* Reducerから Store をインポート */
import counter from './counter'

//作成したreducerであるcounter関数を引数に指定してstoreを作成
const store = createStore(counter);

render(
    //Providerに作成したstoreをセット
    <Provider store={store }>
        <App value={store.getState()}
             onIncrement={() =>
                 store.dispatch({
                    type: 'INCREMENT'
                })}
             onDecrement={() =>
                 store.dispatch({
                    type: 'DECREMENT'
                })}
        />
    </Provider>,
    document.getElementById('root')
);