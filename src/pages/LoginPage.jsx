import { Link } from "react-router-dom";
import React from "react";
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = "http://localhost:5173/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

function LoginPage() {
  const handleLogin = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private%20user-read-email%20playlist-read-private`;
  };

  return (
    <div>
      <h1>Login with Spotify</h1>
      <button onClick={handleLogin}>Login to Spotify</button>
    </div>
  );
}

export default LoginPage;
