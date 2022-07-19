import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AdminComponent from './pages/admin/components/'
import Home from './pages/home/components';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path='/admin' element={<AdminComponent />} />
            <Route exact path='/*' element={<Home />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
