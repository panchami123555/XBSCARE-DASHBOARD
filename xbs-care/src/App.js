import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Sidebar from './sidebar';
import Dashboard from './dashboard';
function App() {
  return (
    <div className="">
       <Router>
        <Routes>
      <Route path="/sidebar" element={<Sidebar/>} /> 
      <Route path="/dashboard" element={<Dashboard/>} /> 

      </Routes>
      </Router>
    </div>
  );
}

export default App;
