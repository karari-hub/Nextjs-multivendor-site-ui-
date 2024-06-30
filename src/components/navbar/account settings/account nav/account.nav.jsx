"use client";
import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { LuHelpCircle } from "react-icons/lu";
import { BiSolidMessageDetail } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import Image from "next/image";
import "./account.nav.scss";
import { DarkMode } from "../../dark mode/dark.mode";

export const AccountNav = ({ user, handleUser }) => {
	const [page, setpage] = useState(!false);

	const pages = [
		{
			profile: "https://i.postimg.cc/k4dxYCdW/shop1.png",
			title: "shoe store",
			link: "/shoestore",
		},
		{
			profile: "https://i.postimg.cc/5y2QDNKQ/OHMY.jpg",
			title: "kitchen bros",
			link: "/kitchenbros",
		},
	];
	return (
		<div className="account-nav">
			{user && (
				<>
					<div className="side-bar-profile">
						<div className="profile-links" onClick={handleUser}>
							<div className="avatar-container">
								<Image
									src="https://i.postimg.cc/VLT3vYV3/profile.jpg"
									fill={true}
									alt="avatar"
									className="side-bar-avatar"
								/>
							</div>

							<h6>Profile</h6>
						</div>

						{page ? (
							<div
								className="page-links"
								onClick={() => {
									setpage(!page);
								}}
							>
								<CgAddR />
								<h6>Create page</h6>
							</div>
						) : (
							<div className="page-list-container">
								<h6
									onClick={() => {
										setpage(!page);
									}}
								>
									Your page(s)
								</h6>

								{pages.map((singlePage, index) => (
									<div key={index} className="pages-list">
										<div className="single-page">
											<div className="page-avatar-container">
												<Image
													src={singlePage.profile}
													fill={true}
													alt="avatar"
													className="page-avatar"
												/>
											</div>

											<h6>{singlePage.title}</h6>
										</div>
									</div>
								))}

								<div className="add-page">
									<CgAddR />
									<h6>Add page</h6>
								</div>
							</div>
						)}
					</div>

					<div className="divider"></div>
				</>
			)}
			<div className="side-bar-general">
				<div className="general-links">
					<IoSettingsSharp className="side-bar-icon" />
					<h6>Settings</h6>
				</div>
				<div className="general-links">
					<DarkMode />
				</div>

				<div className="general-links">
					<LuHelpCircle className="side-bar-icon" />
					<h6>Help</h6>
				</div>

				<div className="general-links">
					<BiSolidMessageDetail className="side-bar-icon" />
					<h6>Contact us</h6>
				</div>
				{user && (
					<>
						<div className="general-links">
							<RiLogoutBoxLine className="side-bar-icon" />
							<h6>Log out</h6>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
