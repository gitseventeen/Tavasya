import styles from "@/styles/foundation.module.css"
import { Inter } from "next/font/google"
import Head from "next/head"
import Image from "next/image.js"
import Link from "next/link.js"

import achievement2 from "../../../public/images//home/company-achievement-5.gif"
import achievement1 from "../../../public/images/foundation/1.gif"
import achievement3 from "../../../public/images/foundation/3.gif"
import achievement4 from "../../../public/images/foundation/4.gif"
import achievement5 from "../../../public/images/foundation/5.gif"
import achievement6 from "../../../public/images/foundation/6.gif"
import CounterComponent from "../components/counter.component.jsx"
import ProfileComponent from "./components/profile.component.jsx"

const inter = Inter({ subsets: ["latin"] })

export default function Foundation() {
	const d = (
		<>
			Tavasya Foundation conducts training courses at various centers, including
			TTC Rupa, TTC Salary, TTC Rahung, TTC Bomdila, and Nafta, offering a wide
			range of industry-relevant skill development options. Courses encompass
			welding, electrician, plumbing, masonry, mobile repair, software
			development, and more.
			<br />
			<br />
			Training courses offered at various centers include:
			<br />
			- TTC Rupa: Basic Wireman, Basic Electrician, Driver cum Mechanic, Mobile
			Application Program, Basic Welding, Basic Plumbing, Basic Masonry &
			Building Construction, Basic Computer, Solar Training & Service.
			<br />
			- TTC Salary: Basic Electrician course, Solar Training & Service program,
			Driver cum mechanic training.
			<br />
			- TTC Rahung: Solar Training & Service.
			<br />
			- TTC Bomdila: Basic Wireman cum Electrician, Driver cum Mechanic, Solar
			Training & Service.
			<br />
			- Nafta: Basic Electrician training, Solar Training & Service program.
			<br />
		</>
	)
	return (
		<>
			<Head>
				<title>Foundation</title>
				<meta
					name="description"
					content="Empowering lives and creating positive change through Tavasya Foundation."
				/>

				<meta
					property="og:title"
					content="Tavasya - Foundation"
				/>
				<meta
					property="og:description"
					content="Empowering lives and creating positive change through Tavasya Foundation."
				/>

				<meta
					property="twitter:title"
					content="Tavasya - Foundation"
				/>
				<meta
					property="twitter:description"
					content="Empowering lives and creating positive change through Tavasya Foundation."
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
					href="/tavasya-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/tavasya-192x19.png"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/tavasya-270x270.png"
				/>
				
				
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<header className={styles.header}>
					<div className={styles.header_inner}>
						<div className={styles.header_container}>
							<h1 className={styles.title}>Tavasya Foundation</h1>
						</div>
					</div>
					{/* <iframe
						className={styles.video}
						width="560"
						height="315"
						src="https://www.youtube.com/embed/Jtye1BuUU40?si=NeuckdeHzkcoSSOA&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;rel=0&amp;playsinline=1&amp;playlist=Jtye1BuUU40"
						title="YouTube video player"
						frameborder="0"
						allow="autoplay"
						allowfullscreen></iframe> */}

					<video
						className={styles.video}
						autoPlay={true}
						loop={true}
						muted={true}
						preload="metadata"
						playsInline={true}
						poster="/images/foundation/0.png"></video>
				</header>

				<section className={`${styles.container2} space`}>
					<div className={styles.inner1}>
						<h2>Empowering Lives, Creating Change</h2>
						<p>
							{`The name "Tavasya" is derived from two words: "Tav," meaning "Yours," and "Asya," meaning "to be hopeful and helpful." Tavasya Foundation is dedicated to transforming the lives of underprivileged, unemployed, and unskilled individuals across India by providing life-changing opportunities.`}
						</p>
						<br />
						<h3>Our Objectives:</h3>
						<ol>
							<li>
								<p>1. Promoting health and sanitation.</p>
							</li>
							<li>
								<p>
									2. Encouraging youth to pursue skill development and
									entrepreneurship.
								</p>
							</li>
							<li>
								<p>
									3. Offering dedicated programs for physically challenged
									children.
								</p>
							</li>
							<li>
								<p>
									4. Providing rehabilitation assistance in the event of natural
									disasters.
								</p>
							</li>
							<li>
								<p>5. Developing rural communities.</p>
							</li>
							<li>
								<p>
									6. Raising awareness about diseases such as T.B, malaria, and
									HIV/AIDS.
								</p>
							</li>
							<li>
								<p>7. Establishing medical facilities for family planning.</p>
							</li>
							
						</ol>
					</div>
					<div className={styles.gallery}>
						<Image
							src="/images/foundation/1.png"
							alt="a lovely kiss in the night"
							fill
						/>
						<Image
							src="/images/foundation/2.png"
							alt="Hydro EPC"
							fill
						/>
						<Image
							src="/images/foundation/3.png"
							alt="Hydro EPC"
							fill
						/>
						<Image
							src="/images/foundation/4.png"
							alt="Hydro EPC"
							fill
						/>
					</div>
				</section>

				<section className={`${styles.container4} `}>
					<Link href="/work">
						<h2>Causes</h2>
					</Link>
					<div className={styles.container2}>
						<ProfileComponent
							content={{
								name: "Skill Development",
								description: `Tavasya Foundation conducts training courses at various centers, offering a range of industry-supported employable skill training courses. Courses encompass welding, electrician, plumbing, masonry, software development, solar training etc and are available at  TTC Rupa, TTC Salary, TTC Rahung, TTC Bomdila, and Nafta.`,
								path: "/images/foundation/1.svg",
							}}
							key={1}
						/>
						<ProfileComponent
							content={{
								name: "Healthcare Services:",
								description: `In collaboration with AKAR ASHA Hospital, our healthcare services include the "SERVE SELF" program, dedicated to offering shelter and essential medical care to underprivileged children.`,
								path: "/images/foundation/2.svg",
							}}
							key={2}
						/>
						<ProfileComponent
							content={{
								name: "Community Services:",
								description:
									"Our community projects extend to providing lodging and boarding arrangements for 20 orphans near Hyderabad. Tavasya Foundation actively supports communities during natural disasters, promotes health and sanitation, runs programs for physically challenged children, contributes to disaster recovery, develops rural villages, raises disease awareness, and establishes medical facilities for family planning, all through collaboration with a network of NGOs across India.",
								path: "/images/foundation/3.svg",
							}}
							key={3}
						/>
					</div>
				</section>

				<section className={`${styles.container3}`}>
					<div className={`${styles.inner2} space`}>
						<div className={styles.achievement}>
							<Image
								src={achievement1}
								alt="Tavasya Achievement"
								width={100}
								height={100}
								loading="lazy"
							/>
							<h3 className={styles.card_title}>
								<CounterComponent number={78} />
								<br />
								Orphans Sheltered
							</h3>
						</div>
						<div className={styles.achievement}>
							<Image
								src={achievement2}
								alt="Tavasya Achievement"
								width={100}
								height={100}
								loading="lazy"
							/>

							<h3 className={styles.card_title}>
								<CounterComponent number={29} />
								<br />
								People Cured
							</h3>
						</div>
						<div className={styles.achievement}>
							<Image
								src={achievement4}
								alt="Tavasya Achievement"
								width={100}
								height={100}
								loading="lazy"
							/>

							<h3 className={styles.card_title}>
								<CounterComponent number={233} />
								<br />
								Placement Provided
							</h3>
						</div>
						<div className={styles.achievement}>
							<Image
								src={achievement3}
								alt="Tavasya Achievement"
								width={100}
								height={100}
								loading="lazy"
							/>

							<h3 className={styles.card_title}>
								<CounterComponent
									number={2320}
									step={200}
								/>
								<br />
								People Made Skilled
							</h3>
						</div>
						<div className={styles.achievement}>
							<Image
								src={achievement5}
								alt="Tavasya Achievement"
								width={100}
								height={100}
								loading="lazy"
							/>
							<h3 className={styles.card_title}>
								<CounterComponent number={14} />
								<br />
								Entrepreneurial Help Provided
							</h3>
						</div>
						<div className={styles.achievement}>
							<Image
								src={achievement6}
								alt="Tavasya Achievement"
								width={150}
								height={100}
								loading="lazy"
							/>
							<h3 className={styles.card_title}>
								<CounterComponent
									number={12320}
									step={1000}
								/>
								<br />
								Lives Improved
							</h3>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
