import React from "react";

const Header = () => {
    return (
        <div className="px-10 py-2 flex items-center justify-between">
            <h1 className="font-extrabold tracking-wider text-3xl font-mono text-primary"> 
                STEP
            </h1>
            <button className="bg-primary px-4 py-2 text-white rounded-md font-semibold">
                Sign In
            </button>
        </div>
    );
};

export default Header;