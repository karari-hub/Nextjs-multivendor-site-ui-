"use client";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, serverDarkMode }) => {
	const darkModeCookie = Cookies.get("darkMode");
	const [initialDarkMode, setInitialDarkMode] = useState(
		darkModeCookie === "true"
	);
	const [darkMode, setDarkMode] = useState(null);

	const toggle = () => {
		setDarkMode((prevDarkMode) =>
			prevDarkMode === null ? initialDarkMode : !prevDarkMode
		);
	};

	useEffect(() => {
		setDarkMode(initialDarkMode);
		
		document.addEventListener("DOMContentLoaded", () => {
			const body = document.querySelector("body");
			body.classList.remove(`theme-${serverDarkMode ? "dark" : "light"}`);
			body.classList.add(`theme-${initialDarkMode ? "dark" : "light"}`);
		});
	}, [initialDarkMode, serverDarkMode]);

	useEffect(() => {
		Cookies.set(
			"darkMode",
			darkMode === null ? initialDarkMode : darkMode,
			{ expires: 7 }
		);
	}, [darkMode, initialDarkMode]);

	return (
		<ThemeContext.Provider value={{ toggle, darkMode }}>
			<div
				className={`theme-${
					darkMode === null
						? serverDarkMode
							? "dark"
							: "light"
						: darkMode
						? "dark"
						: "light"
				}`}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};
