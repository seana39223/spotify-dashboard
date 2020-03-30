import React from 'react';
import './App.css';

import SpotifyLogin from 'react-spotify-login';
import { clientId, redirectUri } from './settings';


const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

function App() {
  return (
    <div className="App">
        <h1> Sean's Spotify Dashboard</h1>
        <p>Welcome to Sean's Spotify Dashboard app. This was build in react.
        Please login to your Spotify account using the login button below.</p>
      <SpotifyLogin
                    className="login"
                    clientId={clientId}
                    redirectUri={redirectUri}
                    onSuccess={onSuccess}
                    onFailure={onFailure}/>
    </div>
  );
}

export default App;
