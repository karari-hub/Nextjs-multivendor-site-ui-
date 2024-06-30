import React from "react";
import "./hero.content.scss";
//import { Mode } from "@/components/navbar/menu/dark mode/dark.mode";
import { TfiSearch } from "react-icons/tfi";

export const HeroContent = () => {
	return (
		<div className="hero-content">
			<div className="hero-content-container">
				<div className="hero-title">
					<h1>
						"Welcome to a World <br /> of <span>Safe</span> and
						<span> Secure</span> Shopping!"
					</h1>
				</div>

				<div className="hero-sub-title">
					<h6>
						" Discover a marketplace of diverse products,
						<br /> we are empowering secure transactions for
						freelancers, services, and vendors with an escrow-backed
						platform."
					</h6>
				</div>

				<div className="search">
					<input
						type="text"
						className="search__input"
						placeholder="Search..."
					/>
					<button className="search__button">
						<TfiSearch className="search__icon" />
					</button>
				</div>

				<div className="hero-links">
					<h6>Get started:</h6>
					<div className="links-wrapper">
						<div className="link-container">
							<h6>Escrow</h6>
						</div>

						<div className="link-container">
							<h6>Shops</h6>
						</div>
						<div className="link-container">
							<h6>Freelancers</h6>
						</div>
						<div className="link-container">
							<h6>Services</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
