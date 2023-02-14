import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const Logo = () => {
  return <div style={{display:'flex' , justifyContent:'center'}}>
    <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt='google logo' width={300} height={100}
    />
    </div>
}

const WordBox = () =>{
  return <div  style={{display:'flex' , justifyContent:'center',borderRadius:'500px' ,height:'40px',tabSize:'100px'}}>
    <input  size={80} />
  </div>
}

const Button = ()=>{
  return <div style={{display:'flex' , justifyContent:'center' , margin:'8px' ,gap:'5px'}}>
    <button>Google Search</button> <button>I'm Feeling Lucky</button>
  </div>
}

const LanguageNote = ()=>{
  return <p style={{display:'flex' , justifyContent:'center'}}>Google ca offered in :<a href='#'>Francias</a> </p>
}
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div style={{margin:'150px'}} >
  <Logo/>
   <WordBox/>
   <Button/>
   <LanguageNote/>
    </div> 
  </React.StrictMode>
);




