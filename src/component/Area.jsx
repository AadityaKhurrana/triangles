import React,{useState} from 'react'
import './hypo.css'
function Area() {
    const [h, seth] = useState('')
    var he,b;
    function bhandler(event)
    {
        b=event.target.value;
    }
    function phandler(event)
    {
        he=event.target.value;
    }
    function clickHandler()
    {
        var y=(b*he)/2;
        seth(y);
    }
    return (
        <div className="hypo">

            <div className="inp-div">
            <label htmlFor="">Enter Base</label>
            <input type="text" onChange={bhandler} />

            <label htmlFor="">Enter Height</label>
            <input type="text" onChange={phandler} />

            <button onClick={clickHandler}>Calculate</button>
            <h3>Area is: {h}</h3>
            </div>
        </div>
    )
}

export default Area;
