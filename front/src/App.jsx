import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entries from './assets/Entries';
import AddEntry from './assets/AddEntry';
import EditEntry from './assets/EditEntry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Entries />} />
        <Route path='/create' element={<AddEntry />} />
        <Route path='/edit/:id' element={<EditEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
