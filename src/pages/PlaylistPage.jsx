// src/pages/PlaylistPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PlaylistPage() {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setPlaylists(response.data.items); // Assuming response.data.items is the array of playlists
      })
      .catch(error => {
        console.error('Error fetching playlists:', error);
        setError('Could not fetch playlists. Please try again.');
      });
    } else {
      console.log('No token found. Please log in again.');
      setError('No token found. Please log in again.');
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Your Spotify Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
}
