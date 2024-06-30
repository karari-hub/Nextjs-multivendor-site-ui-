import React from "react";
import "./payment.tag.scss";
import Image from "next/image";

export const PaymentTag = () => {
	return (
		<div className="payment-tag">
			<div className="payment-tag-contaniner">
				<h5>Payment powered by:</h5>

				<div className="logo-wrapper">
					<div className="logos-container mpesa">
						<Image
							src="https://i.postimg.cc/9FMLLksZ/M-Pesa-01.png"
							fill={true}
							alt="logo"
							className="logo-picture"
						/>
					</div>
					<div className="logos-container master-card">
						<Image
							src="https://i.postimg.cc/7hBmx1J5/mastercard.png"
							fill={true}
							alt="logo"
							className="logo-picture"
						/>
					</div>
					<div className="logos-container visa">
						<Image
							src="https://i.postimg.cc/pXpBfFnB/visa-logo-png-2020.png"
							fill={true}
							alt="logo"
							className="logo-picture"
						/>
					</div>
					<div className="logos-container paypal">
						<Image
							src="https://i.postimg.cc/FsLLFgLw/pngegg.png"
							fill={true}
							alt="logo"
							className="logo-picture"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
