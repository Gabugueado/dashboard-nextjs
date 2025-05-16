import Link from "next/link"
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }:Props) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={ pokemon.id }
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg`}
                        alt={ pokemon.name }
                        width={100}
                        height={100}
                        priority={ false }
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50">{ pokemon.name }</p>
                    <div className="mt-5">
                        <Link
                            href={`pokemon/${ pokemon.id }`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                        Más información
                        </Link>
                    </div>
                    </div>
                    <div >
                        <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-green-600">
                                <IoHeartOutline size="20" />
                                </div>
                                <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Campaigns
                                </p>
                                <p className="text-xs text-gray-500">View your campaigns</p>
                            </div>
                        </Link>
                       
                    </div>

                </div>
            </div>
  )
}
