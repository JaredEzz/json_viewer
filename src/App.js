import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="form-group">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Paste JSON here!"/>
      </div>
      <form>
        <div className="form-group">
          <label for="formControlFile">Upload a JSON file</label>
          <input type="file" className="form-control-file" id="formControlFile"/>
        </div>
      </form>
    </div>


  );
}

export default App;
