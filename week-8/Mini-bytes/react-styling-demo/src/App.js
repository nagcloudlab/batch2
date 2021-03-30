import './App.css';
import DevOneComponent from './DevOneComponent';
import DevTwoComponent from './DevTwoComponent';
function App() {
  return (
    <div className="container">
      <hr />
      <h1>React component styling</h1>
      <hr />
      <button className="btn btn-primary btn-lg">Learn Fullstack tech</button>
      <hr />
      <div className="row">
        <div className="col-6">
          <DevOneComponent />
        </div>
        <div className="col-6">
          <DevTwoComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
