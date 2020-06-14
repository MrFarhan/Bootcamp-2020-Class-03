import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css'

function App() {
  return (
    <div className="App" >
     <h2>Hello from <strong>Farhan</strong></h2>
     <label><input type="text"/>This is an input field</label>
  <p>This is a paragraph</p>
<span>This is an image tag</span><img height="50px"src={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}/> 
  
<h4>Unorderd list seems like this </h4>
     <ul>
       <li>list item 1</li>
       <li>list item 2</li>
       <li>list item 3</li>
       <ol>
         <li>This is orderd list item 1</li>
         <li>This is orderd list item 2</li>
         <li>This is orderd list item 3</li>
       
       </ol>
     </ul>
     <span>Copy right @MrFarhan</span>
    </div>
  );
}


export default App;
