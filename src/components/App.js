
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[state,setState]=useState({name:'',password:''});
  const[err,setErr]=useState(false);
  function handleChange(event){
    setState({...state,[event.target.name]:event.target.value});
  }

  function handleClick(){
    
    event.preventDefault();
    if(state.name==='' || state.password===''){
      setErr(true);
    }
    else{
      setErr(false);
    }    console.log(state);
  }

  return (
    <div>
       <form onSubmit={handleClick}>
      <input type="text" name="name" value={state.name} onChange={handleChange}/>
      <input type="password" name="password" value={state.password} onChange={handleChange} />
      <button>Submit</button>
      {err&&(<h1 className="errorMessage">Error</h1>)}
       </form>



    </div>
  )
}

export default App
