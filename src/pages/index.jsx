import ButtonComponent from "@/components/button.component.jsx"
import styles from "@/styles/Home.module.css"
import { Inter } from "next/font/google"
import Head from "next/head"
import Image from "next/image.js"
import Link from "next/link.js"

import achievement1 from "../../public/images/home/company-achievement-1.gif"
import achievement2 from "../../public/images/home/company-achievement-2.gif"
import achievement3 from "../../public/images/home/company-achievement-3.gif"
import achievement4 from "../../public/images/home/company-achievement-4.gif"
import achievement5 from "../../public/images/home/company-achievement-5.gif"
import achievement6 from "../../public/images/home/company-achievement-6.gif"
import logo from "../../public/tavasya-header-2.svg"
import CardFlipComponent from "./components/cardflip.component.jsx"
import CounterComponent from "./components/counter.component.jsx"
import InfiniteComponent from "./components/infinite.component.jsx"
import SlideComponent from "./components/slide.components.jsx"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Tavasya - Enabling Dreams</title>
				<meta
					name="description"
					content="Welcome to Tavasya , where our team drives clean energy solutions, and our vision shapes a sustainable future."
				/>

				<meta
					property="og:title"
					content="Tavasya - Enabling Dreams"
				/>
				<meta
					property="og:description"
					content="Welcome to Tavasya , where our team drives clean energy solutions, and our vision shapes a sustainable future."
				/>

				<meta
					property="twitter:title"
					content="Tavasya - Enabling Dreams"
				/>
				<meta
					property="twitter:description"
					content="Welcome to Tavasya , where our team drives clean energy solutions, and our vision shapes a sustainable future."
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
					content="Tavasya - Enabling Dreams"
				/>

				<meta
					name="twitter:image:src"
					content="/tavasya.svg"
				/>
				<meta
					name="twitter:image:alt"
					content="Tavasya - Enabling Dreams"
				/>
				{/* <link
					rel="icon"
					type="image/ico"
					href="/favicon.ico"
				/> */}
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
				<link
					rel="icon"
					type="image/png"
					sizes="270x270"
					href="images/favicon-270x270.png"
				/>
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<header className={styles.header}>
					<div className={styles.header_inner}>
						<div className={styles.header_container}>
							<Image
								className={styles.title}
								src={logo}
								alt="tavasya header logo"
								width={300}
								height={80}
							/>
							<p className={styles.description}>
								Welcome to Tavasya, where we harness renewable energy sources to
								promote your well-being.
							</p>
							<ButtonComponent
								name="Discover More"
								path="/about"
							/>
						</div>
					</div>
					<iframe
						className={styles.video}
						width="560"
						height="315"
						src="https://www.youtube.com/embed/Jtye1BuUU40?si=NeuckdeHzkcoSSOA&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;rel=0&amp;playsinline=1&amp;playlist=Jtye1BuUU40"
						title="YouTube video player"
						frameborder="0"
						allow="autoplay"
						allowfullscreen></iframe>
				</header>

				<section className={`${styles.container4} space `}>
					<Link href="/work">
						<h2>What We Do</h2>
					</Link>
					<div className={styles.container1}>
						<CardFlipComponent
							title="Independent Power Producer (IPP)"
							description="We develop and operate projects on Build, Own, Operate and Transfer (BOOT) basis, collaborating with local communities, governments, and stakeholders to ensure responsible and sustainable development of renewable energy resources."
							imgUrl="/images/home/development.jpg"
							path="/work"
						/>
						<CardFlipComponent
							title="Engineering, Procurement, and Construction (EPC)"
							description="We provide innovative, one-stop engineering and construction solutions in the renewable energy sector, meeting the evolving needs of our clients and the environment."
							imgUrl="/images/home/hydro-new.jpg"
							path="/work"
						/>
						<CardFlipComponent
							title="New Growth Avenues"
							description="We are actively scouting niche opportunities in the renewable energy field to accelerate the clean energy transition."
							imgUrl="/images/home/search.jpg"
							path="/work"
						/>
					</div>

					<div className={styles.container2}>
						<h2>Companies We Worked With</h2>

						<InfiniteComponent />
					</div>
				</section>

				<section className={`${styles.container3}`}>
					<h2>Our Portfolio Projects</h2>

					<SlideComponent />

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
								<CounterComponent number={600} /> MW + <br />
								developed capacity
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
								<CounterComponent number={300} /> MW + <br />
								capacity in pipeline
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
								Active in <CounterComponent number={10} />+ states
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
								All India <CounterComponent number={3} />
								rd installed under <br />
								scheme JWWL scheme
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
								<CounterComponent number={100} />+ clients
							</h3>
						</div>
						<div className={styles.achievement}>
							<Image
								src={achievement6}
								alt="Tavasya Achievement"
								width={100}
								height={100}
								loading="lazy"
							/>
							<h3 className={styles.card_title}>
								<CounterComponent
									number={100000}
									step={1000}
								/>
								+ <br />
								tons of CO2 avoided
							</h3>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
