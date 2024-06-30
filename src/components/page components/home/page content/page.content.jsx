import React from "react";
import "./page.content.scss";
import Image from "next/image";
import { BsCheck2Square } from "react-icons/bs";
import { GoDuplicate } from "react-icons/go";
import { GoTasklist } from "react-icons/go";
import { GoProjectRoadmap } from "react-icons/go";

export const PageContent = () => {
	const featureList = [
		{
			title: "Create Your Page",
			def: "Start by setting up your personalized page.",
		},
		{
			title: "Showcase Your Offerings",
			def: "Display your products, services, or talents to a wider audience.",
		},
		{
			title: "Engage Your Audience",
			def: "Connect with potential customers and clients.",
		},

		{
			title: "Secure Escrow Payments",
			def: "Secure payment system, ensuring safe transactions.",
		},
		{
			title: "Build Your Brand",
			def: "Establish your brand presence.",
		},
		{
			title: "Tap into Local Audience",
			def: "Enable people in your vicinity to discover your offerings easily.",
		},
		{
			title: "Let People Hire You",
			def: "Allow potential clients to hire your services for their needs.",
		},
		{
			title: "Get Started Today",
			def: "Join our platform and embark on your journey to success.",
		},
	];

	return (
		<div className="page-content">
			<div className="page-content-images-container">
				<div className="page-content-image-wrapper page-1">
					<div className="photo-container">
						<Image
							src="https://i.postimg.cc/P5PSD9JN/Artist-Andrea-Pippins-Wants-You-to-Drop-Everything-and-Go-for-It.jpg"
							alt="avatar"
							fill={true}
							className="page-content-image"
						/>
					</div>
				</div>

				<div className="page-content-image-wrapper page-2">
					<div className="photo-container">
						<Image
							src="https://i.postimg.cc/fWGkc08s/yess.jpg"
							alt="avatar"
							fill={true}
							className="page-content-image"
						/>
					</div>
				</div>

				<div className="page-content-image-wrapper page-3">
					<div className="photo-container">
						<Image
							src="https://i.postimg.cc/858XN41c/Foto-de-fauxels-no-Pexels.jpg"
							alt="avatar"
							fill={true}
							className="page-content-image"
						/>
					</div>
				</div>
			</div>

			<div className="page-content-wrapper">
				<div className="page-content-title">
					<h5>
						"Unlock the potential of your business or skills now,
						Seamlessly showcase your products, services, or talents
						to a local audience and beyond. "
					</h5>

					<div className="feature-list">
						{featureList.map((feature, index) => (
							<div key={index} className="list-container">
								<div className="icon-container">
									<BsCheck2Square className="list-icon" />
								</div>

								<p>
									<span>
										{feature.title} {": "}
									</span>
									{feature.def}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="page-buttons-container">
					<div className="page-button btn-1">
						<GoDuplicate className="btn-icon" />
						<p>Open a page</p>
					</div>
					<div className="page-button btn-1">
						<GoTasklist className="btn-icon" />
						<p>hire someone</p>
					</div>
					<div className="page-button btn-1">
						<GoProjectRoadmap className="btn-icon" />
						<p>post a job</p>
					</div>
				</div>
			</div>
		</div>
	);
};
