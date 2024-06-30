import React from "react";
import "./freelancer.profile.scss";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import { MdReportGmailerrorred } from "react-icons/md";

const FreelancerProfile = () => {
	return (
		<div className="freelancer-profile">
			<div className="freelancer-info">
				<div className="freelancer-avatar-container">
					<Image
						src="https://i.postimg.cc/PxMDGY7m/16-Black-Chefs-Changing-Food-in-America-Published-2019.jpg"
						alt="user avatar"
						fill={true}
						className="freelancer-avatar"
					/>
				</div>

				<div className="username">
					<h5>Neil John</h5>
					{true ? <MdVerified className="bluecheck" /> : ""}
				</div>

				<p>@neiljonhn45</p>

				<div className="freelancer-location">
					<MdLocationOn className="freelancer-location-icon" />
					<p>Nairobi, Kenya</p>
				</div>
			</div>

			<div className="freelancer-recommendation">
				<h6>
					<span>
						{207599 >= 1000000
							? `${Math.round(207599 / 100000) / 10}M`
							: 207599 >= 1000
							? `${Math.round(207599 / 100) / 10}K`
							: 207599}
					</span>{" "}
					Recommendations
				</h6>
			</div>

			<button className="freelancer-recommend-button">
				<p>Recommend</p>
			</button>

			<div className="message-and-report">
				<button className="freelancer-button message">
					<TbMailFilled className="freelancer-message-button-icon" />
					<p>Message</p>
				</button>

				<button className="freelancer-button report">
					<MdReportGmailerrorred className="freelancer-report-button-icon" />
					<p>Report</p>
				</button>
			</div>

			<div className="freelancer-skills">
				<h6>Skills: </h6>
				<div className="skills-list">
					<div className="skill-container">
						<p>photographer</p>
					</div>

					<div className="skill-container">
						<p>designer</p>
					</div>

					<div className="skill-container">
						<p>editor</p>
					</div>
				</div>
			</div>

			<div className="freelancer-about">
				<h6>About me:</h6>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Quam, tenetur voluptatem! Est maxime nisi repellat dolore
				</p>
			</div>
		</div>
	);
};

export default FreelancerProfile;
