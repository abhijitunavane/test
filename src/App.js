import logo from './logo.svg';
import './App.css';
import { getHello, getName } from  "./Api";
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();
  const [name, setName] = useState("");  
  const fetchHello = async () => {
    const data = await getHello();

    setData(data.data);
  }
  const fetchName = async () => {
    const data = await getName(name);

    setData(data.data);
  }
  const handleChange = (e) => {
    setName(e.target.value);
  }
  useEffect(() => {
    fetchHello();
  }, []);
  return (
    <div className="App">
      <label htmlFor="name">Name: </label>
      <input id="name" placeholder="Enter your name..." onChange={handleChange}></input>
      <button onClick={fetchName}>Submit</button>

      <h1>{data}</h1>
    </div>
  );
}

export default App;
