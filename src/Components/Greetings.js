import {useState} from "react";
const Greetings = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
    {!clicked ? <div>Hello world!</div> : 
    
      <div>Good Morning clicked</div>
    }

    <button onClick={() => setClicked(true)}> click</button>
    </>
  )
}

export default Greetings;