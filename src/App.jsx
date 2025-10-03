import Home from "./home";
// import Incident from "./Incident"
// import IncidentList from "./IncidentList";

import {ThemeContext} from "./ThemeContext.js"


import { BrowserRouter } from "react-router-dom";


import { useState } from "react";

function App(){

  let [darkmode,setDarkmode]=useState('light');

  function handleToggleDarkMode(){
    if(darkmode==='light'){
      setDarkmode('dark')
    } else{
      setDarkmode('light');
    }
  }




  return (
   /* <>
    <Home>
      
    </Home>
    <h1>hi</h1>
    </>*/
    // <ThemeContext.Provider value={darkmode}>
    // <Home toggleDarkmode={{handleToggleDarkMode}}/>
    // </ThemeContext.Provider>


    <ThemeContext.Provider value={{ darkmode, handleToggleDarkMode }}>

      <BrowserRouter>
      
        <Home />
      
      </BrowserRouter>
        
    
    
    
    </ThemeContext.Provider>




    // <IncidentList/>
  )
}
export default App