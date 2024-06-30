import React from "react";
import "./freelancer.cover.photo.scss";
import Image from "next/image";

const FreelancerCoverPhoto = () => {
	return (
		<div className="freelancer-cover-photo">
			<div className="freelancer-cover-photo-container">
				<Image
					src="https://i.postimg.cc/Twn7CWxb/black-panther-7680x4320-2018-hd-4k-8837-1.jpg"
					fill={true}
					alt="cover photo"
					className="cover-photo"
				/>
			</div>
		</div>
	);
};

export default FreelancerCoverPhoto;
