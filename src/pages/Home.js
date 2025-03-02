import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Ghost Dashboard</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;

