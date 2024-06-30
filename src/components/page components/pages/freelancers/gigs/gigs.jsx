import React from "react";
import "./gigs.scss";
import { products } from "@/components/page components/home/products slider/product.data";
import GigsCard from "./gigs card/gigs.card";

const Gigs = () => {
	const urlParam = "rate-card";

	return (
		<div className="gigs">
			<div className="gigs-wrapper">
				<div className="gigs-navigation">
					<button
						className={
							urlParam === "posts"
								? "nav-btn nav-btn-active"
								: "nav-btn"
						}
					>
						<h6>Posts</h6>
					</button>

					<button
						className={
							urlParam === "about"
								? "nav-btn nav-btn-active"
								: "nav-btn"
						}
					>
						<h6>About</h6>
					</button>

					<button
						className={
							urlParam === "rate-card"
								? "nav-btn nav-btn-active"
								: "nav-btn"
						}
					>
						<h6>Rate card</h6>
					</button>

					<button
						className={
							urlParam === "reviews"
								? "nav-btn nav-btn-active"
								: "nav-btn"
						}
					>
						<h6>Reviews</h6>
					</button>
				</div>

				<div className="gigs-post-container">
					{products.map((data) => (
						<div key={data.id}>
							<GigsCard data={data} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gigs;
