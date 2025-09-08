import Image from "next/image.js"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import styles from "./infinite.module.css"

import company1 from "../../../public/images/home/company-1.webp"
import company10 from "../../../public/images/home/company-10.png"
import company11 from "../../../public/images/home/company-11.png"
import company12 from "../../../public/images/home/company-12.png"
import company13 from "../../../public/images/home/company-13.png"
import company2 from "../../../public/images/home/company-2.webp"
import company3 from "../../../public/images/home/company-3.webp"
import company4 from "../../../public/images/home/company-4.webp"
import company5 from "../../../public/images/home/company-5.png"
import company6 from "../../../public/images/home/company-6.png"
import company7 from "../../../public/images/home/company-7.png"
import company8 from "../../../public/images/home/company-8.png"
import company9 from "../../../public/images/home/company-9.png"

const buttonStyle = {
	width: "30px",
	background: "none",
	border: "0px",
	marginLeft: "20px",
	marginRight: "20px",
}

const properties = {
	prevArrow: (
		<button style={{ ...buttonStyle }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="32"
				viewBox="0 0 20 32"
				fill="none">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M19.3337 0.467505C18.9745 0.16735 18.4981 0 18.0028 0C17.5075 0 17.0311 0.16735 16.6719 0.467505L1.10303 13.6898C0.75453 13.9813 0.477031 14.3321 0.287408 14.7209C0.0977845 15.1097 0 15.5283 0 15.9514C0 16.3745 0.0977845 16.7932 0.287408 17.182C0.477031 17.5708 0.75453 17.9216 1.10303 18.213L16.7846 31.533C17.5119 32.149 18.6901 32.157 19.4282 31.549C19.6069 31.4041 19.7499 31.2285 19.8483 31.033C19.9466 30.8375 19.9983 30.6262 20 30.4124C20.0017 30.1986 19.9534 29.9868 19.8582 29.7901C19.763 29.5934 19.6228 29.416 19.4464 29.269L5.09571 17.0818C4.92131 16.9361 4.78244 16.7606 4.68754 16.5662C4.59265 16.3717 4.54371 16.1623 4.54371 15.9506C4.54371 15.739 4.59265 15.5296 4.68754 15.3351C4.78244 15.1406 4.92131 14.9652 5.09571 14.8194L19.3319 2.72829C19.5062 2.58269 19.6451 2.40739 19.7399 2.21305C19.8348 2.01871 19.8837 1.80941 19.8837 1.5979C19.8837 1.38639 19.8348 1.17709 19.7399 0.982749C19.6451 0.788412 19.508 0.613104 19.3337 0.467505Z"
					fill="white"
				/>
			</svg>
		</button>
	),
	nextArrow: (
		<button style={{ ...buttonStyle }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="21"
				height="32"
				viewBox="0 0 21 32"
				fill="none">
				<g clip-path="url(#clip0_1020_4)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.699719 31.5336C1.4729 32.1576 2.72336 32.1576 3.49463 31.5336L19.8422 18.3112C20.2081 18.0198 20.4995 17.669 20.6986 17.2802C20.8977 16.8914 21.0004 16.4727 21.0004 16.0496C21.0004 15.6265 20.8977 15.2079 20.6986 14.8191C20.4995 14.4303 20.2081 14.0795 19.8422 13.788L3.37626 0.468014C3.00257 0.17033 2.50769 0.00301197 1.99213 4.02702e-05C1.47657 -0.00293143 0.978995 0.158666 0.600446 0.452014C0.41292 0.596878 0.262874 0.772465 0.1596 0.967901C0.0563266 1.16334 0.00202415 1.37446 5.55168e-05 1.5882C-0.00191312 1.80194 0.048494 2.01374 0.148155 2.21049C0.247817 2.40723 0.394611 2.58474 0.579446 2.73201L15.6498 14.9192C15.8329 15.065 15.9787 15.2404 16.0784 15.4349C16.178 15.6293 16.2294 15.8388 16.2294 16.0504C16.2294 16.2621 16.178 16.4715 16.0784 16.666C15.9787 16.8604 15.8329 17.0359 15.6498 17.1816L0.699719 29.2728C0.516657 29.4184 0.370875 29.5937 0.271254 29.7881C0.171633 29.9824 0.120258 30.1917 0.120258 30.4032C0.120258 30.6147 0.171633 30.824 0.271254 31.0184C0.370875 31.2127 0.516657 31.388 0.699719 31.5336Z"
						fill="white"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1020_4">
						<rect
							width="21"
							height="32"
							fill="white"
						/>
					</clipPath>
				</defs>
			</svg>
		</button>
	),
}

const InfiniteComponent = () => {
	const data = [
		{
			path: "/images/home/company-1.webp",
		},
		{
			path: "/images/home/company-2.webp",
		},
		{
			path: "/images/home/company-3.webp",
		},
		{
			path: "/images/home/company-4.webp",
		},
		{
			path: "/images/home/company-5.png",
		},
		{
			path: "/images/home/company-6.png",
		},
		{
			path: "/images/home/company-7.png",
		},
		{
			path: "/images/home/company-8.png",
		},
		{
			path: "/images/home/company-9.png",
		},
		{
			path: "/images/home/company-10.png",
		},
		{
			path: "/images/home/company-11.png",
		},
		{
			path: "/images/home/company-12.png",
		},
	]

	const projects = data.map((content) => (
		<div
			className={`${styles.item} space`}
			key={content.path}>
			<Image
				src={content.path}
				loading="lazy"
				width={100}
				height={100}
				alt=""
			/>
		</div>
	))

	return (
		<div className={styles.slide}>
			<Slide
				slidesToScroll={1}
				slidesToShow={1}
				arrows={false}
				indicators={true}
				autoplay={true}
				pauseOnHover={false}
                duration={1500}
				responsive={[
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4,
						},
					},
                    {
						breakpoint: 900,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						},
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						},
					},
					{
						breakpoint: 200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				]}>
				{/* {projects} */}

				<Image
					src={company1}
					alt="waaree company logo"
					loading="lazy"
					className={styles.company}
				/>

				<Image
					src={company2}
					loading="lazy"
					className={styles.company}
					alt="waaree company logo"
				/>

				<Image
					src={company3}
					loading="lazy"
					className={styles.company}
					alt="waaree company logo"
				/>

				<Image
					className={styles.company}
					src={company4}
					loading="lazy"
					alt="waaree company logo"
				/>
				<Image
					className={styles.company}
					src={company5}
					loading="lazy"
					alt="waaree company logo"
				/>
				<Image
					className={styles.company}
					src={company6}
					loading="lazy"
					alt="waaree company logo"
				/>

				<Image
					className={styles.company}
					src={company9}
					loading="lazy"
					alt="waaree company logo"
				/>
				<Image
					className={styles.company}
					src={company10}
					loading="lazy"
					alt="waaree company logo"
				/>
				<Image
					className={styles.company}
					src={company11}
					loading="lazy"
					alt="waaree company logo"
				/>
				<Image
					className={styles.company}
					src={company12}
					loading="lazy"
					alt="waaree company logo"
				/>
				<Image
					className={styles.company}
					src={company13}
					loading="lazy"
					alt="waaree company logo"
				/>

				<Image
					className={styles.company}
					src={company8}
					loading="lazy"
					alt="waaree company logo"
				/>
				<Image
					className={styles.company}
					src={company7}
					loading="lazy"
					alt="waaree company logo"
				/>
			</Slide>
		</div>
	)
}

export default InfiniteComponent
