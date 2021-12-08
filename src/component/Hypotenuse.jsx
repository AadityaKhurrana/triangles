import React,{useState} from 'react'
import './hypo.css'
function Hypotenuse() {
    const [h, seth] = useState('')
    var p,b;
    function bhandler(event)
    {
        b=event.target.value;
    }
    function phandler(event)
    {
        p=event.target.value;
    }
    function clickHandler()
    {
        var h=(p*p)+(b*b);
        let x = Math.sqrt(h);
        seth(x);
    }
    return (
        <div className="hypo">

            <div className="inp-div">
            <label htmlFor="">Enter Base</label>
            <input type="text" onChange={bhandler} />

            <label htmlFor="">Enter Perpendicular</label>
            <input type="text" onChange={phandler} />

            <button onClick={clickHandler}>Calculate</button>
            <h3>Hypotenuse is: {h}</h3>
            </div>
        </div>
    )
}

export default Hypotenuse
