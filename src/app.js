import React from 'react';
import PropTypes from 'prop-types'
import {createStore} from 'redux';
import counter from './counter';

const store = createStore(counter);
const App = ({value, onIncrement, onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

App.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.arrayOf(
        PropTypes.shape({
            action: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onDecrement: PropTypes.arrayOf(
        PropTypes.shape({
            action: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
};

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(App);


export default App;