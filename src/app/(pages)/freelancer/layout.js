import React from "react";
import FreelancerCoverPhoto from "../../../components/page components/pages/freelancers/cover photo/freelancer.cover.photo";
import FreelancerProfile from "@/components/page components/pages/freelancers/freelancer profile/freelancer.profile";
import "./freelancer.scss";

const FreelancerLayout = ({ children }) => {
	return (
		<>
			<FreelancerCoverPhoto />
			<FreelancerProfile />

			<div>{children}</div>
		</>
	);
};

export default FreelancerLayout;
