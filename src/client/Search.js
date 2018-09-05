import React, { Component } from 'react';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class Search extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    // store access token from Spotify
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      tracks: []
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
  getTracks(){
  spotifyApi.searchTracks('Love')
    .then((response) => {
      //console.log(response);
       let data = response.tracks.items;
        this.setState({tracks: data});
      }
    )
  }

  // lifecycle hook runs after the component output has been rendered to the DOM
  componentDidMount() {
    if (this.state.loggedIn) {
      this.getTracks();
    }
  }

  render() {
    const header = this.state.loggedIn ? <div>Choose a track from below:</div> : <a href="http://localhost:8888">Login to Spotify</a>
    return (
      <div className="main">
        {header}
        <div>
         <ul>
          {this.state.tracks.map((track) => <li key={track.id}> {track.name} </li>)}
         </ul>
        </div>
      </div>
    );
  }
}

export default Search;
