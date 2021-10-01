import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:8888/name').then(response => {
      return response.text()
    }).then(data1 =>{
      console.log(data1)
      setData(data1);
    });

  },[]);
  var date = new Date();
  return (
    <div className="App">
      {date.toLocaleString()} Hello  {data}      
    </div>
  );
}

export default App;
