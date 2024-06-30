import React from "react";
import Image from "next/image";
import "./gigs.card.scss";
import Rating from "@mui/material/Rating";
import { PiHeartLight } from "react-icons/pi";

const GigsCard = ({ data }) => {
	return (
		<div className="card-container">
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
								{data.description.split(" ").length > 10 &&
									" ..."}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GigsCard;
