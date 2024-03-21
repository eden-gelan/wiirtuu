import React from "react";
import logo from '../assets/logo.png'

export default function Nav(){
    return(
        <div className=" px-20 py-5 flex flex-row items-center justify-between">
            <img src = {logo} alt=""/>

            <div className="  flex sm:hidden xl:flex md:flex-row space-x-20">
                <a className=" text-white font-semibold "> About us </a>
                <a className=" text-white font-semibold "> Our service </a>
                <a className=" text-white font-semibold "> Our projects </a>
                <a className=" text-white font-semibold "> Get in touch </a>
            </div>
        </div>
    )
}
