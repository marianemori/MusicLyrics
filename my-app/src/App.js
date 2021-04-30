import React, { Component } from "react";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import SongLyrics from "./components/SongLyrics/SongLyrics";
import Footer from "./components/Footer/Footer";

import "./App.css";
class App extends Component {
  state = {
    artistInput: "",
    songInput: "",
    songLyrics: "",
    error: false,
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchSong = async e => {
    e.preventDefault();

    const { artistInput, songInput } = this.state;

    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${artistInput}/${songInput}`
      );
      let song = await response.json();

      this.setState({ songLyrics: song.lyrics });

      if (!!this.state.songLyrics) {
        this.setState({ error: false });
      } else {
        this.setState({ error: true});
      }
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    const { artistInput, songInput, songLyrics } = this.state;

    return (
      <div>
        <Header />
        <Search
          onInputChange={this.onInputChange}
          searchSong={this.searchSong}
        />
          {songLyrics && (
            <SongLyrics
              artist={artistInput}
              song={songInput}
              lyrics={songLyrics}
            />
          )}

          {this.state.error && (
            <p style={{ fontSize: "14px" }}>Não foi possível encontrar a música</p>
          )}
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
