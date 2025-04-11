import "./index.css";
export const PokemonCard = ({ curElem }) => {
  return (
    <li key={curElem.id} className="pokemon-card">
      <figure>
        <img
          src={curElem.sprites.other.dream_world.front_default}
          alt={curElem.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{curElem.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
            {
               curElem.types.map((curElem) => curElem.type.name).join(", ")
            }
        </p>
      </div>
      {/* <button>{curElem.types}</button> */}
      <div className="grid-three-cols">
        <p className="pokemon-info">
          Weight:
          <span>{curElem.weight}</span>
        </p>
        <p className="pokemon-info">
          Height:
          <span>{curElem.height}</span>
        </p>
        <p className="pokemon-info">
          Speed:
          <span>{curElem.stats[4].base_stat}</span>
        </p>
      </div>
      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{curElem.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{curElem.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {curElem.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
    </li>
  );
};

