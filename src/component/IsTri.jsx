import './IsTri.css'
import React,{useState} from 'react';
function IsTri()
{

  const [tri,settri]=useState("");
  var angle1,angle2,angle3

  function changeAngl1(event)
  {
    angle1=event.target.value;
    //setangle1(val);
   // console.log(angle1);

  }

  function changeAngl2(event)
  {
    angle2=event.target.value;
   // setangle2(event.target.value);
   // console.log(angle2);

  }

  function changeAngl3(event)
  {
    angle3=event.target.value;
   // setangle3(event.target.value);
   // console.log(angle3);

  }

  function clickHandler()
  {
    console.log(angle1);
    console.log(angle2);
    console.log(angle3);
    const angles=parseInt(angle1) +parseInt(angle2)+parseInt(angle3);
    console.log(angles)
    if(angles===180)
    {
      settri("Value Entered By You Forms a Triangle")
      console.log("isTriangle");
    }
    else
    {
      settri("Value Entered By You is Not Forming a Triangle")
      console.log("is NOT A Triangle"); 
    }
  }
  
  return (
    <div className="tri">
      <h1>Is Triangle ?</h1>
      <div className="div-t">
        <label htmlFor="">Angle1 In Degree</label>
        <input type="text"  onChange={changeAngl1}/>

        <label htmlFor="">Angle2 In Degree</label>
        <input type="text" onChange={changeAngl2} />

        <label htmlFor="">Angle3 In Degree</label>
        <input type="text" onChange={changeAngl3} />

        <button onClick={clickHandler}>IsTriangle</button>
        <h3>{tri}</h3>
      </div>
    </div>
  );
}
export default IsTri;
