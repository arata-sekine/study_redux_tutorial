/* ライブラリのインポート */
import React from 'react';
import PropTypes from 'prop-types';

const CounterComponent = ({count, onClickPlus, onClickMinus}) => (
    <div>
        <p><span>Count: {count}</span></p>
        <div>
            <button onClick={onClickPlus}>+1</button>
            <button onClick={onClickMinus}>-1</button>
        </div>
    </div>
);

CounterComponent.propTypes = {
    count: PropTypes.number.isRequired,
    onClickPlus: PropTypes.func.isRequired,
    onClickMinus: PropTypes.func.isRequired
};

export default CounterComponent

