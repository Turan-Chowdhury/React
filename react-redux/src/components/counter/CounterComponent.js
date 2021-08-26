import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CounterComponent() {

    const [number, setNumber] = useState('');
    
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterReducer.counter)

    return (
        <div className="card card-body text-center p-2" >
            <h2>Counter App Demo</h2>
           <h3>               
               <button onClick={() => dispatch( { type : "DEC" } )} > - </button>
               {counter} 
               <button onClick={() => dispatch( { type : "INC" } )} > + </button>
               <br/>
            </h3>
            <div>
                <input value={number} onChange={(e) => setNumber(e.target.value)} />
                <button onClick={() => dispatch( { type : "UPDATE", payload : number } )} > Update </button>
                <button onClick={() => dispatch( { type : "INC", payload : number } )} > Increment Specific Value </button>
            </div>
        </div>
    )
}
