
import 'bootstrap/dist/css/bootstrap.css';
import UseCustomHook from './use-custom-hook'

function App() {
  return (
    <div className="container">
      <hr />
      <h1>reack hooks</h1>
      <hr />
      <ol>
        <li>useState</li>
        <li>useReducer</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useRef</li>
        <li>useMemo</li>
        <li>useCallback</li>
      </ol>
      <hr />

      <UseCustomHook />

    </div>
  );
}

export default App;
