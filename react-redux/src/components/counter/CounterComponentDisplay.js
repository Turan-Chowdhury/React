import React from 'react'
import { useSelector } from 'react-redux';

export default function CounterComponentDisplay() {

    const counter = useSelector(state => state.counterReducer.counter);

    return counter
}
