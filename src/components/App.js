
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[state,setState]=useState({name:'',password:''});
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(event){
    setState({...state,[event.target.name]:event.target.value});
  }

  function handleClick(){
    
    event.preventDefault();
    if(state.name==='' || state.password===''){
      setErrorMessage('Both name and password are required');
    }
    else{
      setErrorMessage('');
    }    console.log(state);
  }

  return (
    <div>
       <form onSubmit={handleClick}>
      <input type="text" name="name" value={state.name} onChange={handleChange}/>
      <input type="password" name="password" value={state.password} onChange={handleChange} />
      <button>Submit</button>
      {errorMessage&&(<h1 className="errorMessage">{errorMessage}</h1>)}
       </form>



    </div>
  )
}

export default App
