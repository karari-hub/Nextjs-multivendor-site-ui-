"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { CgAddR } from "react-icons/cg";
import "./user.side.bar.scss";

const UserSideBar = ({ page, setpage, user, setuser }) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

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

	const currentLoggedIn = {
		profile: pages[0].profile,
		name: pages[0].title,
		link: pages[0].link,
	};

	return (
		<div className="side-bar-accordion">
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
				className="accordion-wrapper"
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon className="expand-icon" />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					className="summary"
				>
					<div className="logged-in-container">
						<div className="logged-in-avatar-container">
							<Image
								src={currentLoggedIn.profile}
								fill={true}
								alt="avatar"
								className="logged-in-avatar"
							/>
						</div>

						<h6>{currentLoggedIn.name}</h6>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<div className="side-bar-profile">
						<div
							className="profile-links"
							onClick={() => {
								setuser(!user);
							}}
						>
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

						<div className="selection-container">
							<div className="profile-line">
								<div className="line"></div>
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
								</div>
							)}
						</div>
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default UserSideBar;
