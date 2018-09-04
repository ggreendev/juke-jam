import React, { Component } from 'react';
import Link from 'react-router';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class Host extends Component {
  constructor(props){
    super(props);
    const params = this.getHashParams();
    // store access token from Spotify
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      playlists: []
    }
  }

  /**
   * obtains parameters from the hash of the URL
   * @return Object
   */
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  // get Spotify user's playlist with API call
  getPlaylists(){
  spotifyApi.getUserPlaylists()
    .then((response) => {
       let playlists1 = []
       for (let i = 0; i < response.items.length; i++) {
          let obj = {name: response.items[i].name, id: response.items[i].id, key: i};
          playlists1.push(obj);
        }
        this.setState({playlists: playlists1});
      }
    )
  }

  // lifecycle hook runs after the component output has been rendered to the DOM
  componentDidMount() {
    if (this.state.loggedIn) {
      this.getPlaylists();
    }
  }

  render() {
    const header = this.state.loggedIn ? <div>Choose a playlist from below:</div> : <a href='http://localhost:8888'>Login to Spotify</a>
    return (
      <div className="main">
        {header}
        <div>
        <ul>
         {this.state.playlists.map((playlist) => <li key={playlist.key}> {playlist.name} </li>)}
        </ul>
        </div>
      </div>
    );
  }
}

export default Host;
