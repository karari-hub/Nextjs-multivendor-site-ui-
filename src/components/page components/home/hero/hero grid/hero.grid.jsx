import React from "react";
import "./hero.grid.scss";
import Image from "next/image";

export const HeroGrid = () => {
	return (
		<div className="hero-grid">
			<div className="grid-container">
				<div className="grid grid-1">
					<div className="grid-1-a">
						<Image
							src="https://i.postimg.cc/ryjSDG50/glad-young-woman-posing-with-peace-sign.jpg"
							fill={true}
							alt="two girls looking at their phone holding shopping bags"
							className="grid-1-a-image"
						/>
					</div>

					<div className="grid-1-b">
						<Image
							src="https://i.postimg.cc/X7TXqX1B/500-Motivational-Quotes-That-Will-Drive-You-To-Achieve-Anything.jpg"
							fill={true}
							alt="two girls looking at their phone holding shopping bags"
							className="grid-1-b-image"
						/>
					</div>

					<div className="grid-1-c">
						<Image
							src="https://i.postimg.cc/wxD92FwM/1pc-Letter-Graphic-Drop-Shoulder-Tee.jpg"
							fill={true}
							alt="two girls looking at their phone holding shopping bags"
							className="grid-1-c-image"
						/>
					</div>

					<div className="grid-1-d">
						<Image
							src="https://i.postimg.cc/7YsPJhBn/happy-young-african-ladies-posing-with-shopping-bags-with-thumbs-up.jpg"
							fill={true}
							alt="two girls looking at their phone holding shopping bags"
							className="grid-1-d-image"
						/>
					</div>
				</div>

				<div className="grid grid-2">
					<Image
						src="https://i.postimg.cc/85WZ87Yd/janebowler.jpg"
						fill={true}
						alt="two girls looking at their phone holding shopping bags"
						className="grid-2-image"
					/>
				</div>

				<div className="grid grid-3">
					<div className="grid-3-a">
						<Image
							src="https://i.postimg.cc/prr7wWDP/portrait-young-girl-red-beret-painting-her-lips-with-bright-lipstick-pink-background.jpg"
							fill={true}
							alt="two girls looking at their phone holding shopping bags"
							className="grid-3-a-image"
						/>
					</div>

					<div className="grid-3-b">
						<Image
							src="https://i.postimg.cc/RFyyzrGf/I-Was-a-Struggling-Immigrant-Artist-Then-Beyonc-Called.jpg"
							fill={true}
							alt="two girls looking at their phone holding shopping bags"
							className="grid-3-b-image"
						/>
					</div>

					<div className="grid-3-c">
						<Image
							src="https://i.postimg.cc/Bb5r5YcK/VANITY-FAIR-OSCAR-PARTY-2018-BWArchitects.jpg"
							fill={true}
							alt="two girls looking at their phone holding shopping bags"
							className="grid-3-c-image"
						/>
					</div>

					<div className="grid-3-d">
						<Image
							src="https://i.postimg.cc/Jhh38PT5/graceful-young-woman-blue-jeans-listening-music-white-indoor-shot-carefree-african-girl-headphones-s.jpg"
							fill={true}
							alt="two girls looking at their phone holding shopping bags"
							className="grid-3-d-image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
