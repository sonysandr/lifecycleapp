import { useState } from 'react';
import './App.css';
import Test from './Test';

function App() {
  const [show,setShow] =useState(false)
  return (
    <div className="App">
      
        <button onClick={()=>setShow(!show)}>Show/Hide</button>
        {show && <Test/> }
        <h2>This is a simple application showing 3 phases of a components lifecycle</h2>
        
        <ul>
          <li>First due to Strick mode : Component will mount,then unmount and mount again</li>
          <li>Click button = Mounting
          </li>
          <li>type input = Updating</li>
          <li>click button again = Unmounting</li>
        </ul>
      
    </div>
  );
}

export default App;
