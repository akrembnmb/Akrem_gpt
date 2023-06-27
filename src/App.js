import logo from './logo.svg'
import './App.css'

const App = () => {

  const getMessages= async() =>{
    const Options ={
      method:"POST",
      body : JSON.stringify({
        message:"hello how are you?"
      }),
      headers:{
        "Content-Type":"application/json"
      }
    }
    try{
      const response = await fetch('http://localhost:8000/completions',Options)
      const data =  await response.json()
      
      console.log(data)

    }catch(error){
      console.error(error)
    }
   
  }
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
            <input/>
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
