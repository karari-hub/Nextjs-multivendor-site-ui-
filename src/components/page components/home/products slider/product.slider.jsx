"use client";
import React from "react";
import Image from "next/image";
import { products } from "./product.data";
import "./product.slider.scss";
import Rating from "@mui/material/Rating";
import { PiHeartLight } from "react-icons/pi";
import { CardSlider } from "@/styled components/sliders/slider";

export const ProductsSlider = () => {
	return (
		<div className="product-slider">
			<div className="product-slider-heading">
				<h5>Popular products from Shops</h5>

				<div className="slider-container">
					<CardSlider>
						{products.map((data) => (
							<div key={data.id} className="card-container">
								<div className="card-image-container">
									<Image
										src={data.image}
										alt="product photo"
										fill={true}
										className="product-image"
									/>

									<div className="heart-container">
										<PiHeartLight className="heart-icon" />
									</div>

									<div className="hover-container">
										<div className="hover-details">
											<h6>{data.productName}</h6>
											<div className="ratings">
												<Rating
													name="half-rating-read"
													defaultValue={data.ratings}
													precision={0.5}
													readOnly
													size="small"
												/>

												<p>{data.ratings}</p>
											</div>
											<div className="description">
												<p>
													{data.description
														.split(" ")
														.slice(0, 10)
														.join(" ")}
													{data.description.split(" ")
														.length > 10 && " ..."}
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="product-details-container">
									<div className="shop-details-container">
										<div className="shop-avatar-container">
											<Image
												src={data.shopIcon}
												alt="shop  icon"
												fill={true}
												className="shop-avatar"
											/>
										</div>

										<p>{data.shopName}</p>
									</div>

									<h6>{data.price}.00 $</h6>
								</div>
							</div>
						))}
					</CardSlider>
				</div>
			</div>
		</div>
	);
};
