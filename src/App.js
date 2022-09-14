import './App.css';
import HomePage from './pages/Homepage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
