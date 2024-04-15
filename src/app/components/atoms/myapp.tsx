'use client';

import { ThemeContext } from "@/utilities/context/mycontext";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import { themes } from "@/utilities/themes/mythemes";

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any} ){
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : themes.light;
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div
            style={{
                width: '100%',
                minHeight: '100vh', 
                ...theme,
            }}>
            <Navbar />
            <Component {...pageProps}/>
            </div>
        </ThemeContext.Provider>
    )
}