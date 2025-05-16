import { PokemonsResponse, SimplePokemon } from "@/pokemon";
import { PokemonGrid } from '../../../pokemon/components/PokemonGrid';



const getPokemons = async(limit= 20, offset = 0): Promise<SimplePokemon[]> => {
    const response: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,{
        cache: 'force-cache'
    })
    .then( res => res.json() )

    const pokemons = response.results.map( pokemon => {
        return {
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        }
    })
    return pokemons;
}




const PokemonsPage = async() => {

    const pokemons = await getPokemons(20);
    
  return (
    <div className="flex flex-col" >
        <span className="text-5xl my-2">Listado de Pokémons <small>estático</small> </span>
        
        <PokemonGrid pokemons={ pokemons }/>

    </div>
  )
}


export default PokemonsPage;