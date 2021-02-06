import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthRoute } from './helpers/routes/AuthRoute';
import { Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

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