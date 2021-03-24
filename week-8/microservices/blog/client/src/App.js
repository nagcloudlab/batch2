import './App.css';
import PostForm from './components/PostForm'
import PostList from './components/PostList'

function App() {
  return (
    <div className="container">
      <hr />
      <h1>blog - microservices</h1>
      <hr />
      <PostForm />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
