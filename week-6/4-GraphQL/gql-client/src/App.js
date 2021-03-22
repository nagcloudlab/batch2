import 'bootstrap/dist/css/bootstrap.css'
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"


const GET_USERS = gql`
{
  users{
    id,
    login,
    avatar_url
  }
}
`

const User = ({ user: { login, avatar_url } }) => (
  <div className="Card">
    <div>
      <img alt="avatar" className="Card--avatar" src={avatar_url} />
      <h1 className="Card--name">{login}</h1>
    </div>
    <a href={`https://github.com/${login}`} className="Card--link">
      See profile
    </a>
  </div>
)

function App() {
  const { loading, error, data } = useQuery(GET_USERS)
  if (error) return <h2>something went wrong</h2>
  if (loading) return <h2>loading</h2>

  return (
    <div className="container">
      <hr />
      <h1>React + Apollo + GraphQL</h1>
      <hr />
      return (
      <main className="App">
        <h1>Github | Users</h1>
        {data.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </main>
  )
    </div>
  );
}

export default App;
