import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites}) {
  const [clicked, setClicked] = useState(false)
  return (
    <Card>
      <div onClick={()=> setClicked(!clicked)}>
        <div className="image">
          <img alt={name} src={clicked? sprites.back : sprites.front} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
