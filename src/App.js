import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
import Color from './components/color';
import React,{ useState } from 'react';
import Alert from './Alert.js';
import { BrowserRouter as Main,Route,Router, Routes } from 'react-router-dom';



function App() {
  const [Mode,setMode] = useState('light');
  const toggleMode = () => {
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#152f49";
      showAlert("color changed to dark","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("color changed to light ","success");
    }
  }
  const [Mode1,setMode1] = useState('light');
  const toggleMode1 = () => {
    if(Mode==='light'){
      setMode('green');
      document.body.style.backgroundColor = "#6B4E71";
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      
    }
  }
  const [alert,SetAlert] = useState(null);
  const showAlert = (message,type)=>{
    SetAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      SetAlert(null);
    }
    ,3000)
  }
  return (
  <>
    <Main>
    <Alert alert={alert} />
    <Navbar title="TextUTils" about="About Us" Mode={Mode} toggleMode={toggleMode} toggleMode1={toggleMode1} />
      <Routes>
        <Route exact path='/' element={<TextForm Mode={Mode} showAlert={showAlert} />} />
        
        <Route exact path="/color" element={<Color />} />
       
      </Routes>
    </Main>
       
  </>   
  );
}

export default App;
