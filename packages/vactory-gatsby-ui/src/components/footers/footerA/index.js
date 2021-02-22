import React from "react"
import { FooterMenu } from "../../menus";

export const FooterA = () => {
    return (
        <footer>
            <div className="flex mt-8 p-8 justify-end">
                <FooterMenu />
            </div>
            <div className="p-8 bg-indigo-900 justify-center flex">
                <p className="text-center text-white font-bold">Footer - void</p>
            </div>
        </footer>);
};
