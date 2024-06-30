"use client";
import React from "react";
import "./hero.scss";
import Image from "next/image";
import { HeroContent } from "./hero content/hero.content";
import { HeroGrid } from "./hero grid/hero.grid";

export const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-wrapper">
				<HeroContent />
				<HeroGrid />
			</div>

			<div className="hero-background-container">
				<div className="background-color"></div>
			</div>
		</div>
	);
};
