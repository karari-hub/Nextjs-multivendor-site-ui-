"use client";
import * as React from "react";
import "./account.settings.scss";
import Image from "next/image";
import { AccountNav } from "./account nav/account.nav";
import { useState } from "react";
import { LuMoreVertical } from "react-icons/lu";

export const AccountSettings = ({ user, handleUser }) => {
	const [settings, setSettings] = useState(false);
	const [nav, setNav] = useState(false);

	const openModal = () => {
		setSettings(!settings);

		setTimeout(() => {
			setNav(!nav);
		}, 50);
	};

	const closeModal = () => {
		setSettings(!settings);

		setNav(!nav);
	};
	return (
		<div className="account-settings">
			<div
				className={
					settings
						? "account-settings-background account-settings-background-open"
						: "account-settings-background"
				}
				onClick={closeModal}
			/>
			<div
				className={
					user
						? "profile-container"
						: "profile-container profile-container-no-user"
				}
				onClick={openModal}
			>
				{user ? (
					<>
						<Image
							src="https://i.postimg.cc/VLT3vYV3/profile.jpg"
							fill={true}
							alt="avatar"
							className="profile"
						/>
					</>
				) : (
					<>
						<LuMoreVertical className="settings-icon" />
					</>
				)}

				<div
					onClick={closeModal}
					className={
						settings
							? "settings-modal settings-modal-open"
							: "settings-modal"
					}
				>
					{nav && <AccountNav user={user} handleUser={handleUser} />}
				</div>
			</div>
		</div>
	);
};
