import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.localStorage.setItem("token", token);
      navigate("/playlist"); // Redirect to playlist page after successful login
    }
  }, [navigate]);

  return <div>Loading...</div>;
}
