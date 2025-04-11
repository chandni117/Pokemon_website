import { useState, useEffect } from "react"
import {PokemonCard} from "./PokemonCard";
const Pokemon = () => {
    const [inputVal, setInputVal] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError ] = useState("");

    const URL = "https://pokeapi.co/api/v2/pokemon?limit=124"

    const fetchPokemonData = async () => {
        try {
            const res = await fetch(URL);
            const data = await res.json();
            const detailedData = data.results.map( async (curElem) => {
                const response = await fetch(curElem.url);
                const detailData = await response.json();
                return detailData;
                
            })
            const detailedResponse = await Promise.all(detailedData);
            console.log("detailedResponse", detailedResponse);
            setPokemonData(detailedResponse);
            setLoading(false)
        }
        catch(error){
            console.log(error);
            setError(error);
            setLoading(false);
        }
        
    }

    
    useEffect(() => {
        fetchPokemonData();
    }, [])

    const searchInputData = pokemonData?.filter((curCard) => curCard.name.toLowerCase().includes(inputVal?.toLowerCase() || ""))

    if(loading)
    {
        return (
            <div>
                <h1>Loading...</h1>
            </ div>
        )
    }
    if(error)
        {
            return (
                <div>
                    <h1>{error.message}</h1>
                </ div>
            )
        }

            return (
                <>
                <section className="container">
                    <header>
                    <h2>Lets Catch Pokemon</h2>
                    </header>
                    <div className="pokemon-search">
                    <input 
                    id="findPokemon"
                    type="text"
                    name="pokemon"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    />
                    </div>
                   
                    {/* <p>Name: {pokemonData.name}</p> */}
        
                    <div >
                        < ul className="cards">
                                {
                                   searchInputData.map((curElem) => {
                                     return (
                                        <PokemonCard key={curElem.id} curElem={curElem} />
                                        
                                     )
                                   }
                                   ) 
                                }
                               
                            
                        </ul>
                    </div>
                </section>
                </>
            )
        }

export default Pokemon;