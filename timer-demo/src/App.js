

import {useState} from "react";

function App() {

  const [seconds, setSeconds] = useState(0);

  // event = parameter
  const handleInputChange = (event) => {
    // const inputSeconds = event.target.value;
    // const parsed = parseInt(inputSecdonds);
    // if(!NaN(parsed)){
    //   setSeconds(event.target.value);
    // }
    setSeconds(event.target.value);
  }

  const handleClick = () => {
    const id = setInterval(() =>  {
        setSeconds((prevSeconds) => {
          if(prevSeconds === 0){
            clearInterval(id);
            alert("TIME IS UP YOU BUM");
          } else {
            return prevSeconds - 1;
          }
        })
      
    }, 1000)
  }

  return (
    <div className="App">
      <h1>{seconds} seconds</h1>
      <div>
        <input type ="number" onChange={handleInputChange}/>
        <button onClick ={handleClick}>Start Timer</button>
      </div>
    </div>
  );
}

export default App;
