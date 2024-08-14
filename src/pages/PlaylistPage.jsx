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

  const handlePlaylistClick = (playlist) => {
    if (onSelectPlaylist) {
      onSelectPlaylist(playlist); // Invoke callback to handle playlist selection
    }
    // Navigate to a different page or display details about this playlist
    console.log('Selected playlist:', playlist);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Select your Spotify playlist</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {playlists.map((playlist) => (
          <div 
            key={playlist.id}
            onClick={() => handlePlaylistClick(playlist)} // Handle click event
            style={{ 
              cursor: 'pointer', 
              width: '200px', 
              textAlign: 'center', 
              padding: '10px', 
              borderRadius: '10px', 
              backgroundColor: '#FFA500'
            }}
          >
            <img 
              src={playlist.images[0]?.url || 'placeholder-image-url'} // Use a placeholder if no image is available
              alt={playlist.name} 
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <p>{playlist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
