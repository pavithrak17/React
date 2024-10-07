import React ,{useState}from 'react';
function Statefunction(){
    const[message,change]=useState("welcome");
    return (
        <div>
            <p> {message}</p>
            <button onClick={()=>change("Thank you")}><h1> Clickme</h1></button>
        </div>
    )

}
export default Statefunction;