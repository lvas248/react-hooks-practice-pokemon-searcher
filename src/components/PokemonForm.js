import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {
  const [newPokemon, setNewPokemon] = useState({name:"", hp:"", sprites: {front:"", back:""}})

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          fetch('http://localhost:3001/pokemon',{
            method:'POST',
            headers: {
              'Content-type':'application/json'
            },
            body: JSON.stringify(newPokemon)
          })
          .then(res => res.json())
          .then(data => console.log(data));
          setNewPokemon({name:"", hp:"", sprites: {front:"", back:""}})
        }}

      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemon.name} onChange={(e)=> setNewPokemon({...newPokemon, name: e.target.value})} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPokemon.hp} onChange={(e)=> setNewPokemon({...newPokemon, hp: parseInt(e.target.value)})} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front}
            onChange={(e)=> setNewPokemon({...newPokemon, sprites:{front:e.target.value, back: newPokemon.sprites.back}})}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back}
            onChange={(e)=> setNewPokemon({...newPokemon, sprites:{front:newPokemon.sprites.front, back: e.target.value}})}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
