import Head from "next/head.js"
import Image from "next/image.js"
import styles from "../../styles/about.module.css"
import ProfileComponent from "./components/profile.component.jsx"

export default function About() {
	const board = [
		{
			name: "Mr. Tanmay Das",
			position: "Founder and Director",
			description:
				'Mr. Tanmay has over 28 years of experience in project finance, asset management, and project management. He is an active investor in the Indian capital market and has business interests in renewable energy, hospitality, and finance. Mr. Tanmay was the fund manager for the "Small is Beautiful Fund" and the Managing Director of the "Emerging India Energy Fund." He holds a Bachelor\'s degree in Electrical Engineering, an MBA in Finance, and a CFA from CFA Institute, USA.',
			path: "/images/about/01.webp",
		},
		{
			name: "Mrs. Madhulita Das",
			position: "Founder and Non-Executive Director",
			description:
				"Mrs. Madhulita Das plays a pivotal role in driving organizational growth through strategic HR initiatives and efficient administrative practices. She holds a degree in Economics & Journalism.",
			path: "/images/about/02.webp",
		},
		{
			name: "Mr. Prasanjit Mishra",
			position: "Director of Operations",
			description:
				"Mr. Prasanjit has over 29 years of experience in project development, project management, and operation and maintenance of coal-based and renewable power plants.  He has spent significant time in managing the Indian services arm of various South Asian companies. He holds a Bachelor's degree in Mechanical Engineering.",
			path: "/images/about/03.webp",
		},
	]

	const core = [
		// {
		// 	name: "Mr. Balakrishnan N",
		// 	position: "Advisor",
		// 	description:
		// 		"Mr.  Balakrishnan has over 32 years of experience in the field of electrical engineering and project management. He joined Kerala State Electricity Board as Assistant Engineer in 1974 and rose through the ranks of Chief Engineer and Technical  Member. He retired from the service in the year 2006 and joined KSK Energy Ventures Limited, a London Stock Exchange listed energy company as Managing Director. He currently serves on the board of Tavasya Ventures as an Advisor. Mr. Balakrishnan is an Electrical Engineering graduate from the Regional Engineering College of Calicut, India. ",
		// 	path: "/images/about/04.webp",
		// },
		{
			name: "Mr. B.N. Prakash",
			position: "Head - Finance",
			description:
				"Mr. Prakash is a  seasoned ex-banker with a proven track record in handling corporate and project finance activities. He is involved in financial analysis, capital budgeting, forecasting, and risk management.",
			path: "/images/about/05.webp",
		},
		{
			name: "Mr. Naveen Reddy",
			position: "Head - Accounts & Secretarial",
			description:
				"Mr. Naveen has over 7 years of experience in financial planning, budgeting, regulatory compliance, corporate governance, and financial reporting. He is an Associate Member of ICAI and a qualified Cost Accountant & Company Secretary.",
			path: "/images/about/06.webp",
		},
		{
			name: "Mr. Raveendran B",
			position: "Head - Civil",
			description:
				"Mr. Raveendran  has over 40 years of experience in designing, detailed engineering, and construction of civil and hydro-mechanical structures. He holds a Bachelor's degree in Civil Engineering and a Master's degree in Water Resource Development.",
			path: "/images/about/07.webp",
		},
		{
			name: "Mr. Deepak Shah",
			position: "Head – Business Development",
			description:
				"Mr. Deepak has an innate ability to identify project opportunities and is responsible for business development & corporate affairs. He holds a Bachelor's degree in Pharmacy.",
			path: "/images/about/08.webp",
		},
		{
			name: "Mr. Bala Bhaskar",
			position: "Head – Projects",
			description:
				"Mr. Bala Bhaskar is in-charge of project management and execution, ensuring timely completion of projects within the budgeted cost and scheduled time. He holds a Bachelor's degree in Civil engineering and a Master's degree in Structural engineering.",
			path: "/images/about/09.jpg",
		},
		{
			name: "Mr. Aditya Shah",
			position: "Head - New Business Initiatives",
			description:
				"Mr. Aditya has over 6 years of experience in renewable energy technologies and a knack for identifying niche growth avenues. He holds a Bachelor's degree in Mechanical engineering and a Master's degree in Sustainable Energy Technologies from TU Delft, Netherlands.",
			path: "/images/about/10.jpg",
		},
	]

	const profiles = board.map((profile) => {
		return (
			<ProfileComponent
				content={profile}
				key={profile.path}
			/>
		)
	})
	const profiles2 = core.map((profile) => {
		return (
			<ProfileComponent
				content={profile}
				key={profile.path}
			/>
		)
	})
	return (
		<>
			<Head>
				<title>About Us</title>
				<meta
					name="description"
					content="Learn about Tavasya's commitment to clean energy, sustainability, and a greener tomorrow."
				/>

				<meta
					property="og:title"
					content="Tavasya - About Us"
				/>
				<meta
					property="og:description"
					content="Learn about Tavasya's commitment to clean energy, sustainability, and a greener tomorrow."
				/>

				<meta
					property="twitter:title"
					content="Tavasya - About Us"
				/>
				<meta
					property="twitter:description"
					content="Learn about Tavasya's commitment to clean energy, sustainability, and a greener tomorrow."
				/>

				<meta charSet="utf-8" />

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				<meta
					name="keywords"
					content="Renewable energy, Hydro, Solar, EPC projects, Sustainable solutions , Green Hydrogen , Circular Economy , Next Gen Battery Tech"
				/>

				<meta
					property="og:image"
					content="/tavasya.svg"
				/>
				<meta
					property="og:image:alt"
					content="Tavasya Enabling Dream"
				/>

				<meta
					name="twitter:image:src"
					content="/tavasya.svg"
				/>
				<meta
					name="twitter:image:alt"
					content="Tavasya Enabling Dreams"
				/>
				<link
					rel="icon"
					type="image/ico"
					href="/favicon.ico"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="images/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="images/favicon-192x192.png"
				/>
				{/* <link
					rel="icon"
					type="image/png"
					sizes="270x270"
					href="images/favicon-270x270.png"
				/> */}
			</Head>
			<main className={`${styles.main}`}>
				<header className={styles.header}>
					<div className={styles.header_inner}>
						{/* <div className={`${styles.header_container} ${styles.container1}`}>
							<h1 className={styles.title}>Welcome to Tavasya</h1>
							<p className={styles.description}>
								Harnessing the power of renewable energy sources to create a
								positive impact on the environment and society
							</p>
						</div> */}
						<div className={`${styles.header_container} ${styles.container4}`}>
							<h1 className={styles.title}>Our Mission</h1>
							<p className={styles.description}>
								Our mission at Tavasya is to create a positive impact on society
								and the environment by investing in clean energy and assisting
								others in nurturing their sustainable development.
							</p>
						</div>

						{/* <div className={`${styles.header_container} ${styles.container2}`}>
							<h1 className={styles.title}>Our Mission</h1>
							<p className={styles.description}>
								Our mission is to harness distinctive opportunities in the clean
								energy sector, thereby making a positive contribution to both
								society and the environment. Whether through strategic
								investments in sustainable ventures or by offering empowering
								services to fellow stakeholders, our objective is to cultivate
								growth and foster the creation of value.
							</p>
						</div> */}
					</div>

					<iframe
						className={styles.video}
						width="560"
						height="315"
						src="https://www.youtube.com/embed/Yo2uhcG-WhE?si=M7uQ3FHepBmxlRUT&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;rel=0&amp;playsinline=1&amp;playlist=Yo2uhcG-WhE"
						title="YouTube video player"
						frameborder="0"
						allow="autoplay"
						allowfullscreen></iframe>

					{/* <video
						className={styles.video}
						autoPlay={true}
						loop={true}
						muted={true}
						preload="metadata"
						playsInline={true}
						poster="/images/companies/11/1.webp">
						<source
							src="https://drive.google.com/uc?export=download&id=1upzbuIbdSJbdEAcB5YYbzvxwsZJe7-v8"
							type="video/mp4"
						/>
					</video> */}
				</header>

				<section className={`${styles.content} space`}>
					<h2>Board Of Directors</h2>

					<div className={styles.board}>{profiles}</div>
				</section>

				<section className={`${styles.content} space`}>
					<h2>Core Team</h2>
					<div className={styles.board}>{profiles2}</div>
				</section>

				<section className={`${styles.container3} space`}>
					<h2>Awards and Recognition</h2>
					<div className={styles.inner}>
						<Image
							src="/images/companies/mnre-certificate-2.webp"
							alt="mnre-certificate"
							width={400}
							height={300}
						/>
						<Image
							src="/images/companies/mnre-certificate-1.webp"
							alt="mnre-certificate"
							width={300}
							height={300}
						/>

						<Image
							src="/images/companies/mnre-certificate-3.webp"
							alt="mnre-certificate"
							width={300}
							height={300}
						/>
					</div>
					<p>
						{`Tavasya's 1 MW solar project, which began operating in July 2011, was the first in Odisha and the third in India to be established under the 'Rooftop & Small Solar Power Generation Program' (RPSSGP) Scheme of Jawaharlal Nehru National Solar Mission (JNNSM).`}
					</p>
				</section>
			</main>
		</>
	)
}
