import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;