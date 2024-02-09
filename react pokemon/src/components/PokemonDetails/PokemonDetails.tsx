import { FC, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Ability {
  name: string,
  url: string
}
interface PokemonData {
  id: number;
  name: string;
  height : string;
  weight : string;
  abilities: {ability:Ability,is_hidden:boolean,slot:number}[]
  // Add other properties as needed
}


const PokemonDetails: FC = () => {


  
    const { id } = useParams();
  
    const [pokemonData, setPokemonData] = useState<PokemonData>({
      id: 0,
      name: '',
      height: '',
      weight:'',
      abilities: []
    });


  console.log(id)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // console.log(pokemonData)
    fetchData();
  }, [id]);
  console.log(pokemonData)
  
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Details page</h3>
      <div>
        {
          <div key={pokemonData.id}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
              style={{ display: 'block', margin: '0 auto' }}
            />
            <p>Pokemon Name: {pokemonData.name}</p>
            <p>Pokemon Height: {pokemonData.height}</p>
            {pokemonData.abilities.length>0&&
            
            <p>Pokemon Ability : {pokemonData.abilities[0].ability.name}</p>
            }
            {/* {console.log()} */}
            <p>Pokemon weight: {pokemonData.weight}</p>
            
            {/* Add other properties as paragraphs */}
          </div>
        }
      </div>
      <Link to="/pokemon" className="text-blue-500 hover:text-blue-700">Back</Link>
    </div>
  );
};

export default PokemonDetails;
