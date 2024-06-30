"use client";
import React from "react";
import "./freelancer.slider.scss";
import Image from "next/image";
import { CardSlider } from "@/styled components/sliders/slider";
import { freelancers } from "./freelancers.data";
import { MdVerified } from "react-icons/md";
import Link from "next/link";

export const FreelancerSlider = () => {
	return (
		<div className="freelancer-slider">
			<div className="freelancer-slider-heading">
				<h5>Top freelancers</h5>

				<div className="slider-container">
					<CardSlider>
						{freelancers.map((data) => (
							<div
								key={data.id}
								className="profile-card-container"
							>
								<div className="profile-wrapper">
									<Link href="/freelancer">
										<div className="card-image-container">
											<Image
												src={data.profile}
												alt="avatar"
												fill={true}
												className="freelancer-avatar"
											/>
										</div>
									</Link>

									<div className="username">
										<h6>{data.name}</h6>
										{data.verified ? (
											<MdVerified className="bluecheck" />
										) : (
											""
										)}
									</div>

									<div className="occupation-container">
										<p>{data.occupation}</p>
									</div>

									<p>
										Recommendations:{" "}
										<span>
											{data.recommendation >= 1000000
												? `${
														Math.round(
															data.recommendation /
																100000
														) / 10
												  }M`
												: data.recommendation >= 1000
												? `${
														Math.round(
															data.recommendation /
																100
														) / 10
												  }K`
												: data.recommendation}
										</span>
									</p>
									<button>
										<p>recommend</p>
									</button>
								</div>
							</div>
						))}
					</CardSlider>
				</div>
			</div>
		</div>
	);
};
