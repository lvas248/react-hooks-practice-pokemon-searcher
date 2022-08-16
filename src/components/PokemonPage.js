import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res=> res.json())
    .then(data => setPokemonList(data))
  })

  function handleSearch(text){
    setSearchText(text)
  }

  const filteredList = pokemonList.filter( pokemon =>{
    return pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchText={searchText} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemonList={filteredList}/>
    </Container>
  );
}

export default PokemonPage;
