"use client";
import React, { useState } from "react";
import "./dropdown.scss";
import { dropDownData } from "./dropdown.data";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const DropDown = () => {
	const [hoveredItem, setHoveredItem] = useState(null);

	return (
		<div className="float">
			<div className="floating">
				<div className="item-container">
					<div className="dropper">
						<h6>Explore</h6>
					</div>
				</div>
				<div className="item-container">
					<div className="dropper">
						<h6>For you</h6>
					</div>
				</div>

				{dropDownData.map((item, index) => (
					<div
						key={index}
						className="item-container"
						onMouseEnter={() => setHoveredItem(item)}
						onMouseLeave={() => setHoveredItem(null)}
						onMouseOver={() => setHoveredItem(item)}
					>
						<div className="dropper">
							<h6>{item.title}</h6>
							<KeyboardArrowDownIcon className="arrow-icon" />
						</div>

						{(hoveredItem === item ||
							hoveredItem?.list === item.list) && (
							<div
								className="float-container"
								onMouseEnter={() => setHoveredItem(item)}
								onMouseLeave={() => setHoveredItem(null)}
							>
								<div className="title-container">
									<h6>{item.title}</h6>
								</div>

								<div className="cover">
									<div className="cover-fade"></div>
									<div className="image-container">
										<Image
											src={item.pic}
											fill={true}
											alt="cover pic"
											className="cover-image"
										/>
									</div>
								</div>
								{item.list.map((subItem, subIndex) => (
									<div key={subIndex} className="float-map">
										<a href={subItem.link}>
											<p>{subItem.title}</p>
										</a>
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
