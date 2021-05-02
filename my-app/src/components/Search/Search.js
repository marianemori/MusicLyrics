import React from "react";
import "./Search.css";

const Search = ({ onInputChange, searchSong }) => {
  return (
    <form onSubmit={searchSong}>
        <input
          type="text"
          name="songInput"
          id="songInput"
          onChange={onInputChange}
          placeholder="Pesquise o nome da música"
          required
        />
        <input
          type="text"
          name="artistInput"
          id="artistInput"
          onChange={onInputChange}
          placeholder="Pesquise o nome do artista"
          required
        />

      <button>Pesquisar</button>
    </form>
  );
};

export default Search;
