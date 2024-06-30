"use client";
import React from "react";
import "./footer.scss";
import { ImFacebook2 } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FooterAccordion } from "./footer accordion/footer.accordion";
import { usePathname } from "next/navigation";

const Footer = () => {
	const currentYear = 2023;

	const footerLinks = [
		{
			title: "About",
			list: [
				{ name: "About us", url: "/aboutus" },
				{ name: "Career", url: "/career" },
				{ name: "Verification", url: "/verification" },
				{ name: "Contact us", url: "/contactuss" },
				{ name: "Privacy policy", url: "/privacypolicy" },
				{ name: "Terms of service", url: "/termsofservice" },
				{ name: "FAQ", url: "/faq" },
			],
		},
		{
			title: "Escrows",
			list: [
				{ name: "Get started", url: "/escrow" },
				{ name: "How it works", url: "/escrow/howitworks" },
				{ name: "Payment platforms", url: "/escrow/payment" },
			],
		},

		{
			title: "Resources",
			list: [
				{ name: "Help & support", url: "/escrow" },
				{ name: "Blog", url: "/escrow/howitworks" },
				{ name: "Community", url: "/escrow/payment" },
				{ name: "developers tool", url: "/escrow" },
				{ name: "Reviews", url: "/escrow/howitworks" },
				{ name: "Patnerships", url: "/escrow/payment" },
			],
		},
	];

	const footerLinksPlatforms = [
		{
			title: "Shops",
			list: [
				{ name: "Open a shop", url: "/shops" },
				{ name: "All shops", url: "/shops" },
				{ name: "Near you", url: "/shops" },
				{ name: "Popular", url: "/shops" },
				{ name: "Top rated", url: "/shops" },
			],
		},
		{
			title: "freelancers",
			list: [
				{ name: "Become a freelancer", url: "/freelancers" },
				{ name: "Post a job", url: "/freelancers" },
				{ name: "Near you", url: "/freelancers" },
				{ name: "popular", url: "/freelancers" },
				{ name: "Top rated", url: "/freelancers" },
			],
		},
		{
			title: "Service",
			list: [
				{ name: "Start a service", url: "/service" },
				{ name: "All", url: "/service" },
				{ name: "Near you", url: "/service" },
				{ name: "Popular", url: "/service" },
				{ name: "Top rated", url: "/service" },
			],
		},
	];

	const footerData = [...footerLinks, ...footerLinksPlatforms];

	const pathname = usePathname();

	if (pathname === "/") {
		return (
			<div className="footer">
				<div className="footer-links">
					<div className="footer-app">
						<div className="app-wrapper">
							<div className="download-links">
								<h6>Download App</h6>
								<div className="store-contaner">
									<div className="store-wrapper">
										<Image
											src="https://i.postimg.cc/PrBbtbmq/playstore.png"
											fill={true}
											alt="playstore logo"
											className="store"
										/>
									</div>

									<div className="store-wrapper">
										<Image
											src="https://i.postimg.cc/9QL7DG9T/appstore.png"
											fill={true}
											alt="playstore logo"
											className="store"
										/>
									</div>
								</div>
							</div>

							<div className="social-links-wrapper">
								<h6>Social</h6>
								<div className="social-links">
									<ImFacebook2 className="social-icon" />
									<GrTwitter className="social-icon" />
									<FaInstagram className="social-icon" />
									<BsYoutube className="social-icon" />
									<AiFillLinkedin className="social-icon" />
									<FaTiktok className="social-icon" />
								</div>
							</div>
						</div>
					</div>

					{footerLinks.map((item, index) => (
						<div
							key={index}
							className={`list-wrapper-${item.title} list-wrapper`}
						>
							<h5>{item.title}</h5>
							<ul>
								{item.list.map((subItem, subIndex) => (
									<li key={subIndex}>
										<Link href={subItem.url}>
											<h6>{subItem.name}</h6>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					<div className="footer-platforms">
						<h5>Platforms</h5>

						{footerLinksPlatforms.map((item, index) => (
							<div key={index}>
								<h6>{item.title}</h6>
								<ul>
									{item.list.map((subItem, subIndex) => (
										<li key={subIndex}>
											<Link href={subItem.url}>
												<p>{subItem.name}</p>
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="footer-mobile">
						<FooterAccordion footerData={footerData} />
					</div>
				</div>

				<div className="copyright-container">
					<p>&copy; {currentYear} Mart. All rights reserved.</p>
				</div>
			</div>
		);
	}
};

export default Footer;
