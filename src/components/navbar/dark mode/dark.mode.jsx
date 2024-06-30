import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./dark.mode.scss";
import { ThemeContext } from "@/context/themeContext";

export const DarkMode = () => {
	const { toggle, darkMode } = useContext(ThemeContext);

	return (
		<div className="mode" onClick={toggle}>
			{!darkMode ? (
				<div className="dark">
					<DarkModeIcon className="dark-icon" />
					<h6>Dark mode</h6>
				</div>
			) : (
				<div className="light">
					<LightModeIcon className="light-icon" />
					<h6>light mode</h6>
				</div>
			)}
		</div>
	);
};
