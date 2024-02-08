import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entries from './assets/Entries';
import AddEntry from './assets/AddEntry';
import EditEntry from './assets/EditEntry';
import useAuth from './assets/UseAuth';

function App() {
  const isLogin = useAuth();
  return isLogin ?  (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Entries />} />
        <Route path='/create' element={<AddEntry />} />
        <Route path='/edit/:id' element={<EditEntry />} />
      </Routes>
    </BrowserRouter>
  ) : <div> null</div> ;
}

export default App;
