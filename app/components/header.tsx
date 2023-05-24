"use client";

import { Navbar } from "flowbite-react";

export default function RootHeader() {
    return (
        <Navbar
            fluid={true}
            rounded={false}
        >
            <Navbar.Brand
                to="/navbars"
            >
                {/* <img
                    src="./logo.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    EMP
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                >
                    Inventory
                </Navbar.Link>
                <Navbar.Link
                    href="about"
                >
                    About
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}