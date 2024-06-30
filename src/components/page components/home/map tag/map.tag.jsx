import Image from "next/image";
import "./map.tag.scss";
import React from "react";

const MapTag = () => {
	return (
		<div className="map-tag">
			<div className="map-image-wrapper">
				<div className="map-image-container">
					<div className="map-color" />
					<Image
						src="https://i.postimg.cc/FzTbgM8r/3d-view-map.jpg"
						alt="map image"
						fill={true}
						className="map-image"
					/>
				</div>
			</div>

			<div className="map-content">
				<h3>Find everything near you</h3>
				<h6>
					"Discover a world of connections just around the corner.{" "}
					<br /> Our platform bridges you to the talents, services,
					and products within your local community, fostering <br />
					meaningful interactions and unlocking opportunities right at
					your fingertips."
				</h6>

				<button>
					<p>see near you</p>
				</button>
			</div>
		</div>
	);
};

export default MapTag;
