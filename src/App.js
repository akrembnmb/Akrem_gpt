import logo from './logo.svg'
import './App.css'
import {useState, useEffect} from 'react'
const App = () => {
  const [value ,setValue] = useState('')
  const [message ,setMessage] = useState(null)
  

  const getMessages= async() =>{
    const Options ={
      method:"POST",
      body : JSON.stringify({
        message:value
      }),
      headers:{
        "Content-Type":"application/json"
      }
    }
    try{
      const response = await fetch('http://localhost:8000/completions',Options)
      const data =  await response.json()
      
    
      setMessage(data.choices[0].message)

    }catch(error){
      console.error(error)
    }

  }
  console.log(value)
  //console.log(message)
  return (
    <div className="app">
      <section className='side-bar'>
        <button>
+ New Chat </button>
          <ul className='history'>
              <li>Blab</li>
          </ul>
          <nav>
            <p>Made by AKrem</p>
          </nav>
      </section>
      <section className='main'>
        <h1>AKremGPT</h1>
        <ul className='feed'>

        </ul>
        <div className='bottom-section'>
          <div className='input-container'>
          <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
            <div id="submit" onClick={getMessages}>➢</div>
            
          </div>
          <p className='info'>
          Free Research Preview.
           ChatGPT may produce inaccurate information about people, 
           places, or facts. ChatGPT May 24 Version
          </p>

        </div>
      </section>
     
    </div>
  );
}

export default App;
