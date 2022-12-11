import React from "react";
import { Header, Footer } from "../Components";
import './layout.css'

export const Layout = ({sitebar, children}) => {
    return (
        <div className="lay-box">
            {sitebar ? 
            <>
                <div className="main-bar">
                    <div className="site-bar"></div>
                    <div className="all">
                        <header><Header/></header>
                        <main>{children}</main>
                        <footer><Footer/></footer>
                    </div>
                </div>
            </> 
            : 
            <>
                <header><Header/></header>
                <main>{children}</main>
                <footer><Footer/></footer>
            </>
            }
        </div>
    )
}
