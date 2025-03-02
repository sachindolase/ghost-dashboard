import React, { useState } from "react";
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import supabase from "../utils/SupabaseClient";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
  };

  const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) alert(error.message);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) alert(error.message);
};

return (
  <Container maxWidth="xs">
    <Box sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h4">Sign In</Typography>
      <TextField fullWidth margin="normal" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth margin="normal" type="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
      <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleSignIn}>Sign In</Button>
      <Button fullWidth variant="outlined" sx={{ mt: 2 }} onClick={handleSignUp}>Sign Up</Button>
      <Button fullWidth variant="contained" color="secondary" sx={{ mt: 2 }} onClick={handleGoogleLogin}>Sign in with Google</Button>
    </Box>
  </Container>
);
};

export default Auth;

