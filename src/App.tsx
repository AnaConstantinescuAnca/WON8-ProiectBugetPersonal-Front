import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Venit } from './model/Venit';

function App() {
    
   const [venituri, setVenituri] = useState<Venit[]>();
  const [selectedVenit, setSelectedVenit] = useState<Venit>();
  
  useEffect(()=>{
    axios.get('http://localhost:8080/buget/venituri').then((response) => setVenituri(response.data));
  }, []);

    const onVenitClicked = (id: number ) => {
      axios.get('http://localhost:8080/buget/venituri/' + id).then((response) => setSelectedVenit(response.data));
    }
 
    const clearSelectedVenit = () => {
      setSelectedVenit(undefined);
    }
    
  return (
    <div className="App">
    {selectedVenit && <div>
        <div onClick={() => clearSelectedVenit()}> Close </div>
        <div>Tip Venit: {selectedVenit.tip}</div>
    </div>}

    {venituri?.map(venit=>
      <div onClick={()=> onVenitClicked(venit.id)}> {venit.valoare} </div>)
    }
  </div>
  );
}

export default App;
