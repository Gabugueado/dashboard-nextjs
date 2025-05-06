"use client"

import { JSX } from "react";
import { usePathname } from "next/navigation";



interface Props {
    path: string;
    icon: JSX.Element;
    title:string;
    subtitle:string;
}

export const SideBarMenuItem = ({ path, icon, title, subtitle }: Props) => {

    const pathname = usePathname();

    return (
        <a href={path} 
        className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${(pathname === path && "bg-blue-800" )} hover:bg-white/5 transition ease-linear duration-150`}>
            <div>
                {icon}

            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}</span>
                <span className="text-sm text-white/50 md:block">{subtitle}</span>
            </div>
        </a>
    )
}
