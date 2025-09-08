import Head from "next/head.js"
import Image from "next/image.js"
import styles from "../../styles/work.module.css"

import CardFlipComponent from "../components/cardflip.component.jsx"
import RotationComponent from "./components/rotation.component.jsx"
export default function Work() {
	return (
		<>
			<Head>
				<title>What We Do</title>
				<meta
					name="description"
					content="Discover how Tavasya is dedicated to transforming lives and fostering a greener, sustainable environment."
				/>

				<meta
					property="og:title"
					content="Tavasya - What We Do"
				/>
				<meta
					property="og:description"
					content="Discover how Tavasya is dedicated to transforming lives and fostering a greener, sustainable environment."
				/>

				<meta
					property="twitter:title"
					content="Tavasya - What We Do"
				/>
				<meta
					property="twitter:description"
					content="Discover how Tavasya is dedicated to transforming lives and fostering a greener, sustainable environment."
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
				{/* <link
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
				/> */}
			</Head>
			<main className={`${styles.main}`}>
				<header className={styles.header}>
					<div className={styles.header_inner}>
						<div className={styles.header_container}>
							<h1 className={styles.title}>What We Do</h1>
						</div>
					</div>

					<iframe
						className={styles.video}
						width="560"
						height="315"
						src="https://www.youtube.com/embed/SlSDhUtfMew?si=hGikr650RDP2BapD&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;rel=0&amp;playsinline=1&amp;playlist=SlSDhUtfMew"
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
						poster="/images/companies/1/02.webp">
						<source
							src="https://drive.google.com/uc?export=download&id=1psbf4wyxbWgZCzccE_lggxkccgHl1BJ6"
							type="video/mp4"
						/>
					</video> */}
				</header>

				<section className={`${styles.container1} space`}>
					<div className={styles.inner1}>
						<h2>Independent Power Producer (IPP):</h2>
						<p>
							{`Through our subsidiary, Raajratna Energy Holdings Private Limited (REHPL), we engage in the development, design, engineering, financing, construction, and operation of small and medium-sized hydro and solar projects. These projects are owned by multiple Special Purpose Vehicles (SPVs). We sell the renewable energy from these projects to local utilities under long-term "take or pay" Power Purchase Agreements (PPAs).`}
						</p>
					</div>
					<div className={styles.gallery}>
						<Image
							src="/images/companies/1/02.webp"
							alt="a lovely kiss in the night"
							fill
						/>
						<Image
							src="/images/companies/11/2.webp"
							alt="Hydro EPC"
							fill
						/>
						<Image
							src="/images/companies/11/1.webp"
							alt="Hydro EPC"
							fill
						/>
						<Image
							src="/images/companies/4/2.webp"
							alt="Hydro EPC"
							fill
						/>
					</div>

					<div className={`${styles.container1_inner2}`}>
						<div>
							<h2>
								Engineering, Procurement, and Construction <br />
								(EPC) - Renewable Energy:
							</h2>
							<p>
								We provide comprehensive turnkey EPC services for the
								development and construction of renewable energy projects,
								primarily in the hydro and solar sectors. We emphasize strong
								partnerships with clients, communities, and stakeholders to
								ensure our services deliver long-term value to all parties
								involved.
							</p>
							{/* <Image
								className={`${styles.flow}`}
								src={work1}
								alt="Work Flow at Tavasya"
								width={"100%"}
							/> */}
						</div>
						{/* <div class={styles.content}>
							<p class={styles.content__container__text}>Tavasya does</p>

							<div class={styles.content__container}>
								<ul class={styles.content__container__list}>
									<li class={styles.content__container__list__item}>Design</li>
									<li class={styles.content__container__list__item}>
										Engineering
									</li>
									<li class={styles.content__container__list__item}>Supply</li>
									<li class={styles.content__container__list__item}>
										Erection
									</li>
									<li class={styles.content__container__list__item}>Testing</li>
									<li class={styles.content__container__list__item}>
										Commissioning
									</li>
									<li class={styles.content__container__list__item}>
										Operation & Management
									</li>
								</ul>
							</div>
						</div> */}

						<RotationComponent />
					</div>

					<div className={`${styles.container1_inner3} `}>
						<CardFlipComponent
							title="Hydro Projects EPC"
							description="In the hydro sector, Tavasya excels in providing comprehensive services for hydroelectric power projects."
							imgUrl="/images/companies/hydro-1.jpg"
							path="/projects"
						/>
						<CardFlipComponent
							title="Solar Projects EPC"
							description="In the solar sector, Tavasya delivers end-to-end solutions for solar power plants."
							imgUrl="/images/companies/solar-1.jpg"
							path="/projects"
						/>
					</div>
				</section>

				<section className={`${styles.container4} space`}>
					<div className={styles.inner1}>
						<h2>New Growth Avenues:</h2>
						<p>
							{`India's transition to an all-renewable energy country is a challenging and complex task that requires significant changes in the energy sector, energy grids, energy supply methods, and energy storage to consistently meet energy demand. Tavasya is actively exploring opportunities in emerging clean energy sectors to contribute to this transition. We are currently focused on areas such as the circularity of renewable energy technologies, long duration energy storage , green hydrogen, and waste-to-energy solutions.`}
						</p>
					</div>
					<div className={styles.gallery}>
						<Image
							src="/images/work/green-hydrogen.webp"
							alt="a lovely kiss in the night"
							fill
						/>
						<Image
							src="/images/work/next-gen-battery-tech.webp"
							alt="Hydro EPC"
							fill
						/>
						<Image
							src="/images/work/circular-economy.webp"
							alt="Hydro EPC"
							fill
						/>
					</div>
				</section>
				{/* <section className={`${styles.container4} space`}>
					<h2>Scouting for niche opportunities</h2>

					<div className={`${styles.inner}`}>
						<div className={styles.inner2}>
							<Image
								src="/images/work/green-hydrogen.webp"
								alt="Green Hydrogen"
								width={300}
								height={300}
							/>
							<h3>Green Hydrogen</h3>
							<p>
								Green hydrogen is a promising clean energy source produced
								through a process called electrolysis Tavasya, a pioneering
								player in the renewable energy sector
							</p>
						</div>
						<div className={styles.inner2}>
							<Image
								src="/images/work/next-gen-battery-tech.webp"
								alt="Next Gen Battery Tech"
								width={300}
								height={300}
							/>
							<h3>Next Gen Battery Tech</h3>
							<p>
								Next-gen battery tech represents cutting-edge advancements in
								energy storage, offering higher capacity, longer lifespan, and
								faster charging.
							</p>
						</div>
						<div className={styles.inner2}>
							<Image
								src="/images/work/circular-economy.webp"
								alt="Green Hydrogen"
								width={300}
								height={300}
							/>
							<h3>Circular Economy</h3>
							<p>
								The circular economy is an eco-friendly approach that emphasizes
								reducing waste and maximizing resource efficiency by reusing,
								refurbishing, and recycling products and materials.
							</p>
						</div>
					</div>

				</section> */}
			</main>
		</>
	)
}
