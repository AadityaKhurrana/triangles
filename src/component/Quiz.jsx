import React,{useState} from 'react'
import './Quiz.css'
export default function Home() {

    const correct=["45","right"];
    const [score, setscore] = useState("");
    var ans=[];

    function changeHandler(event)
    {
        ans[0]=event.target.value;    
    }

    function changeHandler2(event)
    {
        ans[1]=event.target.value;
    }

    function submitHandler()
    {
        var scores=0;
        for(var i=0;i<correct.length;i++)
        {
            if(correct[i]===ans[i])
            {
                scores++;
            }
        }
        setscore(scores);
    }


    return (
        <div className="quiz">
            <h1>Triangle Quiz</h1>
                <div className="Ques">
                    <p>Ques: What is the Third angle of triangle if angle1=45 
                        angle2=90 'all angle in degree'</p>
                    
                    <label htmlFor="" className="q-in">
                        <input type="radio" className="q-input"  name="question1" value="45" 
                        onChange={changeHandler} />45°
                    </label>
                    <label htmlFor="" className="q-in">
                        <input type="radio" className="q-input"  name="question1" value="60" onChange={changeHandler} />60°
                    </label>
                    <label htmlFor="" className="q-in">
                        <input type="radio" className="q-input"  name="question1" value="55" onChange={changeHandler}/>55°
                    </label>
                    <label htmlFor="" className="q-in">
                        <input type="radio"  className="q-input" name="question1" value="35" onChange={changeHandler} />35°
                    </label>
                </div>

                <div className="Ques">
                    <p>Ques:If Triangle has one angle 90degree, what it is called?</p>
                    
                    <label htmlFor="" className="q-in">
                        <input type="radio" className="q-input"  name="question2"  value="right" onChange={changeHandler2}/>Right angle
                    </label>
                    <label htmlFor="" className="q-in">
                        <input type="radio" className="q-input"  name="question2" value="acute" onChange={changeHandler2} />Acute angle
                    </label>
                    <label htmlFor="" className="q-in">
                        <input type="radio" className="q-input"  name="question2"value="obtuse" onChange={changeHandler2} />Obtuse angle
                    </label>
                    <label htmlFor="" className="q-in">
                        <input type="radio"  className="q-input" name="question2" value="reflect" onChange={changeHandler2} />Reflect angle
                    </label>
                </div>

                <button className="submit" onClick={submitHandler}>Submit</button>
                
        <h3>{score}</h3>
        </div>
    )
}
