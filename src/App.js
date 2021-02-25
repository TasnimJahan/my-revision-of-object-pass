import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My revision</p>
        <Counter></Counter>
        <Users></Users>
        <Actors></Actors>
        
      </header>
    </div>
  );
}

function Counter() {
  const [count,setCount]=useState(0);
  // const handleDecrease = ()=>setCount(count-1)
  
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count-1)}>decrease</button>
      <button onClick={()=>setCount(count+1)}>increase</button>
    </div>
  )
}


function Users() {
  const [users,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  console.log(users);
  return(
    <div>
      <h2>Dynamic Users:{users.length}</h2>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}



function Actors(props) {
  const nayoks=['Mannna','Shakib','Purnima','Ria'];
  // const nayokName=nayoks.map(nayok=>nayok)
  // console.log(nayokName);
  return(
    <div>
      <h3>Actors are:</h3>
      <ul>
        {
          nayoks.map(nayok=><li>{nayok}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
