import './App.css';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import TraditionalDrinks from './pages/Traditional';
import Whiskey from './pages/Whiskey';
import Wine from './pages/Wine';
import Beer from './pages/Beer';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/traditional" component={TraditionalDrinks} />
          <Route path="/whiskey" component={Whiskey} />
          <Route path="/wine" component={Wine} />
          <Route path="/beer" component={Beer} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;