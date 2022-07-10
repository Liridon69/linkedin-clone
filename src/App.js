
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exect path="/">
          <Login />
        </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
