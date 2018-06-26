import React from 'react'
import {connect} from 'react-redux'
import {ACTION_DECREMENT_COUNTER, ACTION_INCREMENT_COUNTER} from '../actions/index'
import CounterComponent from '../components/CounterComponent'


function mapStateToPropsContainer(state) {
    return {
        count: state.count
    };
}

function mapDispatchToPropsContainer(dispatch) {
    return {
        onClickPlus: () => dispatch(ACTION_INCREMENT_COUNTER),
        onClickMinus: () => dispatch(ACTION_DECREMENT_COUNTER)
    };
}

export default connect(
    mapStateToPropsContainer,
    mapDispatchToPropsContainer
)(CounterComponent);