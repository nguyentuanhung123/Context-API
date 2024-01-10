import React from "react";
import Nav from "./navbar/Nav";

const RootLayout = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="py-4 mt-[80px]">{children}</main>
        </>
    );
}

export default RootLayout;