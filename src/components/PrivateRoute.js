import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../utils/SupabaseClient";

const PrivateRoute = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
  }, []);

  return session ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

