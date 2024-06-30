"use client";
import React, { useContext, useEffect, useState } from "react";
import "./side.bar.scss";
import {
	MessageBadge,
	NotificationBadge,
	EscrowBadge,
	OrderBadge,
} from "../badge/badge";
import { Platform } from "./accordion/accordion";
import { IoSettingsSharp } from "react-icons/io5";
import { LuHelpCircle } from "react-icons/lu";
import { BiSolidMessageDetail } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsArrowLeftCircle } from "react-icons/bs";
import UserSideBar from "./user side bar/user.side.bar";
import { PageNav } from "./page nav/page.nav";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "@/context/themeContext";

export const SideBar = ({ sideBar, handleSidebarToggle }) => {
	const { toggle, darkMode } = useContext(ThemeContext);

	const [user, setuser] = useState(false);
	const [page, setpage] = useState(false);

	useEffect(() => {
		document.body.style.overflow = sideBar ? "hidden" : "auto";
	}, [sideBar]);

	return (
		<div
			className={
				sideBar
					? "side-bar-container side-bar-open"
					: "side-bar-container"
			}
		>
			<div className="side-bar-title">
				<div className="side-bar-logo">
					<h1>mart</h1>
				</div>
				<div className="side-bar-toggle" onClick={handleSidebarToggle}>
					<BsArrowLeftCircle className="close-icon" />
				</div>
			</div>
			<div className="side-bar-wrapper">
				<div className="side-bar-user-wrapper">
					{user ? (
						<div className="side-bar-user-links">
							<div
								className="user-btn"
								onClick={() => {
									setuser(!user);
								}}
							>
								<h6>Log in</h6>
							</div>

							<div
								className="user-btn"
								onClick={() => {
									setuser(!user);
								}}
							>
								<h6>Sign up</h6>
							</div>
							<PageNav
								handleSidebarToggle={handleSidebarToggle}
							/>
						</div>
					) : (
						<div className="side-bar-profile">
							<UserSideBar
								page={page}
								setpage={setpage}
								user={user}
								setuser={setuser}
							/>

							<PageNav
								handleSidebarToggle={handleSidebarToggle}
							/>

							<div className="divider"></div>

							<button
								className="profile-links"
								onClick={handleSidebarToggle}
							>
								<NotificationBadge />
								<h6>Notifications</h6>
							</button>
							<button
								className="profile-links"
								onClick={handleSidebarToggle}
							>
								<MessageBadge />
								<h6>Messages</h6>
							</button>
							<button
								className="profile-links"
								onClick={handleSidebarToggle}
							>
								<OrderBadge />
								<h6>Oders</h6>
							</button>
							<button
								className="profile-links"
								onClick={handleSidebarToggle}
							>
								<EscrowBadge />
								<h6>Escrow</h6>
							</button>
						</div>
					)}
				</div>

				<div className="divider"></div>

				<div className="side-bar-heading">
					<h5>Platform</h5>
				</div>

				<Platform handleSidebarToggle={handleSidebarToggle} />

				<div className="divider"></div>

				<div className="side-bar-heading">
					<h5>General</h5>
				</div>

				<div className="side-bar-general">
					<button
						className="general-links"
						onClick={handleSidebarToggle}
					>
						<IoSettingsSharp className="side-bar-icon" />
						<h6>Settings</h6>
					</button>

					{!darkMode ? (
						<button className="general-links " onClick={toggle}>
							<DarkModeIcon className="side-bar-icon dark-icon" />
							<h6>Dark mode</h6>
						</button>
					) : (
						<button className="general-links " onClick={toggle}>
							<LightModeIcon className="side-bar-icon light-icon" />
							<h6>light mode</h6>
						</button>
					)}

					<button
						className="general-links"
						onClick={handleSidebarToggle}
					>
						<LuHelpCircle className="side-bar-icon" />
						<h6>Help</h6>
					</button>

					<button
						className="general-links"
						onClick={handleSidebarToggle}
					>
						<BiSolidMessageDetail className="side-bar-icon" />
						<h6>Contact us</h6>
					</button>

					<button
						className="general-links"
						onClick={handleSidebarToggle}
					>
						<RiLogoutBoxLine className="side-bar-icon" />
						<h6>Log out</h6>
					</button>
				</div>
			</div>
		</div>
	);
};
