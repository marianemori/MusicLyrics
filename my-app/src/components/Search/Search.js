import React from "react";
import "./Search.css";

const Search = ({ onInputChange, searchSong }) => {
  return (
    <form onSubmit={searchSong}>
      <div>
        <input
          type="text"
          name="songInput"
          id="songInput"
          onChange={onInputChange}
          placeholder="Pesquise o nome da música"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="artistInput"
          id="artistInput"
          onChange={onInputChange}
          placeholder="Pesquise o nome do artista"
          required
        />
      </div>

      <button>Pesquisar</button>
    </form>
  );
};

export default Search;
