"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import "./slider.scss";

export const CardSlider = ({ children }) => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return <Slider {...settings}>{children}</Slider>;
};

function SampleNextArrow({ onClick }) {
	return (
		<div className="arrow arrow-right" onClick={onClick}>
			<ExpandCircleDownIcon className="arrow-icon icon-right" />
		</div>
	);
}

function SamplePrevArrow({ onClick }) {
	return (
		<div className="arrow arrow-left" onClick={onClick}>
			<ExpandCircleDownIcon className="arrow-icon icon-left" />
		</div>
	);
}
