import { useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) {
      alert("Check your email for a magic link!");
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (!error) navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleEmailLogin}>Login with Email</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;

