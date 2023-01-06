import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Venit } from './model/Venit';

function App() {
    
  const [venituri, setVenituri] = useState<Venit[]>();
  const [selectedVenit, setSelectedVenit] = useState<Venit[]>();
  
  useEffect(()=>{
    axios.get('http://localhost:8080/buget/venituri').then((response) => setVenituri(response.data));
  
    const onVenitClicked =(id: number ) => {
      axios.get('http://localhost:8080/buget/venituri/'+id).then((response) => setVenituri(response.data));
    }
  }, []);
  
  function onVenitClicked(id: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="App">
    {venituri?.map(venit=>
    <div onClick={()=> onVenitClicked(venit.id)}> {venit.valoare} </div>)
    }
  </div>
  );
}

export default App;
