import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductsGrid from './components/ProductsGrid';
import ProductForm from './components/ProductForm';


function App() {
  return (
    <div className="container">
      <hr />
      <h1>PM</h1>
      <hr />


      <Router>
        <div>
          <nav>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/view-all">View</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-new">Add New</Link>
              </li>
            </ul>
            <hr />
          </nav>

          <Route path="/view-all" component={ProductsGrid} />
          <Route path="/add-new" component={ProductForm} />
          <Route path="/edit/:productId" component={ProductForm} />

        </div>
      </Router>



    </div>
  );
}

export default App;
