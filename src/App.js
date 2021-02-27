import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import EmployeeRow from './components/EmployeeRow';
import axios from 'axios';


function App() {


  return (
    <div className = "Main">
      <Header />
      <EmployeeRow />

    </div>
  );
}

export default App;
