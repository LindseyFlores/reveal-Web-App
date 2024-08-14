import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    console.log('Current URL hash:', hash); // Log the hash to see what is in the URL

    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      console.log('Extracted Token:', token); // Log the extracted token
      if (token) {
        window.localStorage.setItem("token", token); // Store token in localStorage
        navigate("/playlist"); // Redirect to playlist page
      }
    }
  }, [navigate]);

  return <div>Loading...</div>;
}
