import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Favorites',
  description: 'a simple list',
}


const PokemonsPage = async() => {
    
  return (
    <div className="flex flex-col" >
        <span className="text-5xl my-2">Favorites Pokemons <small className="text-blue-500">Dynamic</small> </span>
        
        <PokemonGrid pokemons={ [] }/>

    </div>
  )
}


export default PokemonsPage;