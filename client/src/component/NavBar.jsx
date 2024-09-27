/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="p-10 shadow-md">
                <div className="flex justify-end gap-8">
                    <Link to="/">
                        <div className="text-xl font-serif cursor-pointer hover:text-gray-400">Home</div>
                    </Link>
                    <Link to="profile">
                        <div className="text-xl font-serif cursor-pointer hover:text-gray-400">Profile</div>
                    </Link>
                    <Link to="help">
                        <div className="text-xl font-serif cursor-pointer hover:text-gray-400">Help</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
