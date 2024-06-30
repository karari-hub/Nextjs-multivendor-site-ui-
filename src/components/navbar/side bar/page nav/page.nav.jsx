"use client";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { HiOutlineMapPin } from "react-icons/hi2";
import "./page.nav.scss";

export const PageNav = ({ handleSidebarToggle }) => {
	return (
		<div className="side-bar-profile">
			<div className="divider"></div>
			<button className="profile-links" onClick={handleSidebarToggle}>
				<AiOutlineHome className="side-bar-icon" />
				<h6>Home</h6>
			</button>
			<button className="profile-links" onClick={handleSidebarToggle}>
				<BsPerson className="side-bar-icon" />
				<h6>For you</h6>
			</button>
			<button className="profile-links" onClick={handleSidebarToggle}>
				<MdOutlineExplore className="side-bar-icon" />
				<h6>Explore</h6>
			</button>
			<button className="profile-links" onClick={handleSidebarToggle}>
				<GoPeople className="side-bar-icon" />
				<h6>From recomended</h6>
			</button>
			<button className="profile-links" onClick={handleSidebarToggle}>
				<HiOutlineMapPin className="side-bar-icon" />
				<h6>Near you</h6>
			</button>
		</div>
	);
};
