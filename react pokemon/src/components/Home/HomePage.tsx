import { FC, useState, useEffect } from 'react';
import axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const baseURL = `https://pokeapi.co/api/v2/pokemon`
const imageUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

const HomePage: FC = () => {

interface Pokemon{
  name:string | null;
  url:string | null;
id:string |null;
}

const [AllPokemon, setAllPokemon] = useState<Pokemon[]>([]);



useEffect(() => {
  axios.get(baseURL).then((response) => {
      console.log("Response data:", response.data); 
      const pokemonData = response.data.results.map((result: any) => ({
        name: result.name,
        url: result.url,
        id: result.url.split("/")[(result.url.split("/")).length - 2],
       
      }));
//       

      console.log("Processed Pokemon data:", pokemonData);
      setAllPokemon(pokemonData);

    })
    .catch((error) => {
      console.error("Error fetching data:", error); 
    });
}, []);

  return (
    <div className="text-center">
      <h3 className="listing-header">Pokemon Listing page</h3>

    <div className='container row'>
    {AllPokemon.map((pokemon) => (
            (

             
   

        <div className='cards col-lg-3'>
          <div className='content'>
          <img src={`${imageUrl}${pokemon.id}.png`} className='poke-img row' alt={`pokemon ${pokemon.id}`} />
          <div className='poke-name'>
              {pokemon.id}. {pokemon.name}
            </div>
          <Link className='link' key={pokemon.name} to={`/pokemon/${pokemon.id}`}> 
          <button className='visit'>Visit Me😊</button>
            </Link>
            
          </div>
        </div>
     
  
            )
            
            
        ))}

     
         

    

    </div>
    </div>
  );
};

export default HomePage;
