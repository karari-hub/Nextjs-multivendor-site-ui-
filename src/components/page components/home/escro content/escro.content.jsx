import React from "react";
import "./escro.content.scss";
import Image from "next/image";
import { GoShieldCheck } from "react-icons/go";

export const EscroContent = () => {
	const escrowList = [
		"Fraud-Free Transactions",
		"Safe and Secure Payments",
		"Risk-Free Commerce",
		"Safeguarded Purchases",
		"Guaranteed Buyer Protection",
		"Secured E-Commerce",
		"Financial Confidence",
	];

	return (
		<div className="escro-content">
			<div className="escro-content-image-container">
				<Image
					src="https://i.postimg.cc/28cc93C5/conference.jpg"
					alt="avatar"
					fill={true}
					className="escro-content-image"
				/>
			</div>

			<div className="escro-content-wrapper">
				<div className="escro-content-title">
					<h3>Shop online safely now</h3>
				</div>
				<div className="escro-content-info">
					<p>
						"Experience the ultimate convenience of our all-in-one
						multi-vendor platform, where freelancers, sellers, and
						service providers unite to offer a diverse range of
						offerings. Embrace secure escrow payments, as you
						effortlessly connect with sellers and service providers.
						Whether you're making a purchase or engaging in escrow
						transactions, our platform ensures your peace of mind by
						securely holding funds until you receive your goods or
						services. Enjoy the flexibility to conduct escrow
						transactions with ease, fostering trust and security in
						every interaction."
					</p>
				</div>

				<div className="sub-info-container">
					<div className="escro-list">
						{escrowList.map((item, index) => (
							<div className="escro-list-container" key={index}>
								<GoShieldCheck className="shield-icon" />{" "}
								<h6>{item}</h6>
							</div>
						))}
					</div>

					<div className="escrow-link-buttons">
						<button className="btn-1">
							<p>Get started</p>
						</button>

						<button className="btn-2">
							<p>Read more</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
