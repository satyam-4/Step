import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
    const [theme, setTheme] = useState("light");

    return (
        <nav className="h-[60px] px-5 sm:px-10 py-2 flex items-center justify-between border-2 border-zinc-200 shadow">
            <h1 className="font-extrabold text-3xl font-mono text-primary"> 
                S.T.E.P
            </h1>
            <div className="flex items-center gap-5 sm:gap-10">
                <button className={`${theme === "light" ? 'text-zinc-600' : 'text-zinc-100'} cursor-pointer`}>
                    {
                        theme === "light" 
                        ? <DarkModeIcon />
                        : <LightModeIcon />
                    }
                    
                </button>
                <button className="bg-button-bg hover:bg-button-bg-hover px-4 py-2 text-white rounded-md font-semibold cursor-pointer">
                    Sign In
                </button>
            </div>
        </nav>
    );
};

export default Header;