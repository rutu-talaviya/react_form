import react, { useState } from 'react'

const App=()=>{

const[name,setName]=useState();
const[fullName,setFullName]=useState();

 const inputEvent=(Event)=>{
    setName(Event.target.value)
 };
 
 const onsubmit=()=>{
    setFullName(name);
 };



return(
    <>
    <div>
        <h1>Hello{fullName}</h1>

        <input type='text' placeholder='enter your name'
            onChange={inputEvent}
        />

        <button onClick={onsubmit}>Click Me</button>

    </div>
</>
);
};

export default App;