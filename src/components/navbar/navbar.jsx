"use client";
import React, { useEffect } from "react";
import "./navbar.scss";
import { useState } from "react";
import { CartBadge, NotificationBadge, MessageBadge } from "./badge/badge";
import { DropDown } from "./dropdown nav/dropdown";
import { TfiSearch } from "react-icons/tfi";
import { AccountSettings } from "./account settings/account.settings";
import { SlMenu } from "react-icons/sl";
import { SideBar } from "./side bar/side.bar";

export const Navbar = () => {
	const [user, setuser] = useState(false);
	const [navc, setNavc] = useState();

	const [sideBar, setSideBar] = useState(false);

	const handleSidebarToggle = () => {
		setSideBar(!sideBar);
	};

	const handleUser = () => {
		setuser(!user);
	};

	useEffect(() => {
		function changebg() {
			if (typeof window !== "undefined" && window.scrollY >= 200) {
				setNavc(true);
			} else {
				setNavc(false);
			}
		}

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", changebg);

			return () => {
				window.removeEventListener("scroll", changebg);
			};
		}
	}, []);

	return (
		<nav className={!navc ? "show-bar" : ""}>
			{
				<SideBar
					sideBar={sideBar}
					handleSidebarToggle={handleSidebarToggle}
				/>
			}
			<div
				className={
					sideBar
						? "side-bar-background side-bar-background-open"
						: "side-bar-background"
				}
				onClick={handleSidebarToggle}
			/>
			<div className="container">
				<div className="left">
					<div className="mobile-nav" onClick={handleSidebarToggle}>
						<SlMenu className="menu-icon" />
					</div>
					<div className="logo">
						<h1>mart</h1>
					</div>
					<div className="nav-links"></div>
				</div>
				<div className="middle">
					<div className={!navc ? "hide-search" : "search"}>
						<input
							type="text"
							className="search__input"
							placeholder="Search..."
						/>
						<button className="search__button">
							<TfiSearch className="search__icon" />
						</button>
					</div>
				</div>
				<div className="right">
					<CartBadge />

					{user ? (
						<div className="profile-container">
							<div className="badges">
								<MessageBadge />
							</div>
							<div className="badges">
								<NotificationBadge />
							</div>

							<AccountSettings
								user={user}
								handleUser={handleUser}
							/>
						</div>
					) : (
						<div className="user-links">
							<button className="login">
								<p>login</p>
							</button>
							<button className="signup" onClick={handleUser}>
								<p>sign up</p>
							</button>

							<div className="account-setting-nav">
								<AccountSettings
									user={user}
									handleUser={handleUser}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className={!navc ? "hide-dropdown" : ""}>
				<DropDown />
			</div>
		</nav>
	);
};
