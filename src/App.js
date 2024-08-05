import React,{ cloneElement, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [modeText, setModeText] = useState("Enable dark mode")
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    
    setTimeout(()=>{
      setAlert(null)
    }
    ,1500)
  }

  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor="#38334c"
      setModeText("Enable light mode")
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      setModeText("Enable dark mode")
      showAlert("Light mode has been enabled","success")
    }
  }

  let heading="Try TextUtils - Word counter, Character counter, Remove extra spaces"; 
  let mode1=mode ;
  let showalert1=showAlert;

  const renderWithProps=(Component,props)=>{
    return cloneElement(<Component/>,props);
  }

  return (
    <>
     <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} modeText={modeText} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={renderWithProps(About,{mode1})}/>
            {/* <About/>
          </Route> */}
          <Route exact path="/" element={renderWithProps(TextForm,{heading,mode1,showalert1})}/>
          {/* <TextForm  heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
          </Route> */}
      </Routes>
      </div>
      </Router>
      
    </>
  );
}

export default App;
