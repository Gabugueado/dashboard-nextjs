import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoCalculatorOutline, IoLogoReact } from 'react-icons/io5'
import { CgPokemon } from "react-icons/cg";

import { SideBarMenuItem } from './SideBarMenuItem';

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subtitle: 'Data Overview'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculatorOutline size={40} />,
        title: 'Counter',
        subtitle: 'Counter Manager'
    },
    {
        path: '/dashboard/pokemons/',
        icon: <CgPokemon size={40} />,
        title: 'Pokemons',
        subtitle: 'Generación Estática'
    },
]

export const SideBar = () => {
    return (
        <div id="menu" 
        style={{ width: '400px' }}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0  overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex -tetext-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className='mr-2' />
                    <span>
                        Dash
                    </span>
                    <span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                    <Image
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                        width={50}
                        height={50}
                        alt="user avatar"
                        className="rounded-full w-8 h-8"
                    />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Gabriel
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
            {
                menuItems.map( item => (
                    <SideBarMenuItem  key={item.path} {...item} />
                ))
            }
            

            </div>
        </div>
    )
}
