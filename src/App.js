import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import HomePage from "./menu/HomePage";
import GiveVote from "./Modules/GiveVote";


 function App(){
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}> </Route>
          <Route exact path="/GiveVote" element={<GiveVote/>}> </Route>
        </Routes>
      </BrowserRouter>
      
     </div>
    
    
  )
 }

 export default App;