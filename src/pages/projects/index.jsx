import Head from "next/head.js"
import { useState } from "react"
import styles from "../../styles/pojects.module.css"
import ModalComponent from "./components/modal.component.jsx"
import ProjectItemComponent from "./components/project-item.component.jsx"

export default function Projects() {
	const solar = [
		{
			id: 1,
			tag: "Bolangir",
			name: "Bolangir",
			description:
				"A 1 MW project located in Bolangir, Odisha, supplying power to GRIDCO, Odisha under a long-term Agreement.",
			paths: [
				"/images/companies/1/07.webp",

				"/images/companies/1/01.webp",
				"/images/companies/1/02.webp",
				"/images/companies/1/03.webp",
				"/images/companies/1/05.webp",
				"/images/companies/1/06.webp",
				"/images/companies/1/08.webp",
				"/images/companies/1/09.webp",
			],
		},

		{
			id: 3,
			tag: "Amritjal",
			name: "Amritjal",
			description:
				"A 1 MW solar power plant located in Anantapur District of Andhra Pradesh, selling power under a long-term PPA to Andhra Pradesh Central Power Distribution Company.",
			paths: [
				"/images/companies/3/5.webp",

				"/images/companies/3/4.webp",

				"/images/companies/3/3.webp",
				"/images/companies/3/6.webp",
			],
		},
	]

	const hydro = [
		{
			id: 4,
			tag: "Belij",
			name: "Belij",
			description:
				"A 5 MW run-of-the-river hydro power project located near Dunali village, in Chamba district of Himachal Pradesh. It has been successfully running since 2012, supplying power to the Himachal Pradesh State Electricity Board under a long-term Power Purchase Agreement for 40 years.",
			paths: [
				"/images/companies/4/15.webp",

				"/images/companies/4/1.webp",
				"/images/companies/4/2.webp",
				"/images/companies/4/3.webp",

				"/images/companies/4/6.webp",
				"/images/companies/4/8.webp",
				"/images/companies/4/9.webp",
				"/images/companies/4/10.webp",
				"/images/companies/4/13.webp",
				"/images/companies/4/14.webp",
				"/images/companies/4/16.webp",
				"/images/companies/4/17.webp",
				"/images/companies/4/18.webp",
				"/images/companies/4/19.webp",
				"/images/companies/4/20.webp",
				"/images/companies/4/21.webp",
				"/images/companies/4/22.webp",
				"/images/companies/4/23.webp",
				"/images/companies/4/24.webp",
			],
		},
		// {
		// 	id: 5,
		// 	name: "Panyor Hydro Power Private Limited",
		// 	description:
		// 		"Panyor HEP is an 80 MW run-of-the-river (ROR) scheme for power generation on Panyor River. This project is located in village Lemma of Yazali town in Lower Subansiri District of Arunachal Pradesh. It is attractive in terms of hydrology and site accessibility. ",
		// 	paths: ["/images/companies/hydro-1.jpg"],
		// },
		{
			id: 11,
			tag: "Anakampoil",
			name: "Anakampoil",
			description:
				"An 8 MW small hydro project located in Kozhikode District, Kerala, commissioned in July 2021. This project operates on a BOOT basis for a 30-year period, supplying power to the Kerala State Electricity Board.",
			paths: [
				"/images/companies/11/2.webp",

				"/images/companies/11/1.webp",
				"/images/companies/11/3.webp",
				"/images/companies/11/4.webp",
				"/images/companies/11/5.webp",
				"/images/companies/11/6.webp",
			],
		},
		// {
		// 	id: 7,
		// 	name: "Kangtangshiri Hydro Power Private Limited",
		// 	description:
		// 		"Kangtangshiri HEP is an 80 MW self-identified project and has been conceived as a run-off the river scheme for power generation on river Yaryap Chu, a tributary of Siyom River. The project is located near village Nechhagong in West Siang District of Arunachal Pradesh. Since the river is perennial, from hydrology point of view, the project is attractive. Site accessibility by road is the principal advantage of the project.",
		// 	paths: ["/images/companies/hydro-1.jpg"],
		// },
		{
			id: 12,
			tag: "Kangteng",
			name: "Kangteng",
			description:
				"A 7.5 MW run-of-the-river small hydro electric project located in Tawang District, Arunachal Pradesh, commissioned in May 2024. This project operates on a BOOT basis for a 25-year period, supplying power to the Arunachal Pradesh Electricity Board.",
			paths: [
				"/images/companies/12/1.webp",
				"/images/companies/12/2.webp",
				"/images/companies/12/3.webp",
				"/images/companies/12/4.webp",
				"/images/companies/12/5.webp",
			],
		},

		// {
		// 	id: 8,
		// 	name: "Rapum Hydro Power Private Limited",
		// 	description:
		// 		"Rapum HEP is an 80 MW self-identified project and has been conceived as a run-off the river scheme for power generation on river Yaryap Chu, a tributary of Siyom River. The project is located near village Nechhagong in West Siang District of Arunachal Pradesh. Since the river is perennial, from hydrology point of view, the project is attractive. Site accessibility by road is the principal advantage of the project. ",
		// 	paths: ["/images/companies/8/1.webp"],
		// },
		{
			id: 13,
			tag: "Gehra",
			name: "Gehra",
			description:
				"A 2 MW small hydro project in the Chamba district of Himachal Pradesh. The project is pending negotiation with the State Government for tariff revision.",
			paths: ["/images/companies/hydro-1.jpg"],
		},
		{
			id: 14,
			tag: "Upper Bichom",
			name: "Upper Bichom",
			description:
				"A 6.25 MW and 3.2 MW hydro project, located in the West Kameng District of Arunachal Pradesh. The project envisages utilization of the flow of Dipri and Divri Bru River respectively, a tributary to Bichom River. They are currently under development.",
			paths: ["/images/companies/hydro-1.jpg"],
		},

		// {
		// 	id: 15,
		// 	tag: "Divri",
		// 	name: "Upper Bichon Small Hydro Projects Private Limited : Divri",
		// 	description:
		// 		"A 3.2 MW run-of-the-river scheme located in the West Kameng District of Arunachal Pradesh. The project envisages utilization of the flow of Divri Bru River, a tributary to Bichom River,  for power generation. The project is currently under investigation.",
		// 	paths: ["/images/companies/hydro-1.jpg"],
		// },
	]

	const epc_hydro = [
		{
			id: 16,
			tag: "Sengulam",
			name: "Sengulam",
			description:
				"A 51.25 MW hydroelectric power plant located in Kerala, awarded by Kerala State Electricity Board (KSEB) for rectification/replacement of penstocks, valves, and allied works.",
			paths: ["/images/companies/16/4.webp", "/images/companies/16/2.webp"],
		},
		{
			id: 17,
			tag: "Pallivasal",
			name: "Pallivasal",
			description:
				"A 60 MW hydroelectric power plant located in the state of Kerala, awarded by KSEB for the erection of electro hydro mechanical equipment and supply & erection of BOP equipment.",
			paths: [
				"/images/companies/17/5.webp",

				"/images/companies/17/1.webp",
				"/images/companies/17/2.webp",
				"/images/companies/17/6.webp",
			],
		},
		{
			id: 18,
			tag: "Rehar",
			name: "Rehar",
			description:
				" A 24.5 MW hydroelectric power plant located in Chhattisgarh, India, with the entire civil and hydro mechanical work awarded to Tavasya by Chhattisgarh Hydro Project LLP.",
			paths: [
				"/images/companies/18/5.webp",

				"/images/companies/18/4.webp",

				"/images/companies/18/3.webp",

				"/images/companies/18/6.webp",
				"/images/companies/18/7.webp",
				"/images/companies/18/8.webp",
				"/images/companies/18/9.webp",
			],
		},
		{
			id: 19,
			tag: "Peruvannamuzhi",
			name: "Peruvannamuzhi",
			description:
				"A 6 MW hydroelectric power plant located in Kerala, successfully completed and handed over to KSEB.",
			paths: [
				"/images/companies/19/19.jpeg",

				"/images/companies/19/1.webp",
				"/images/companies/19/6.webp",
				"/images/companies/19/7.jpeg",
				"/images/companies/19/8.jpeg",
				"/images/companies/19/9.jpeg",
				"/images/companies/19/11.jpeg",
				"/images/companies/19/12.jpeg",
				"/images/companies/19/13.jpeg",
				"/images/companies/19/14.jpeg",
				"/images/companies/19/15.jpeg",
				"/images/companies/19/16.jpeg",
				"/images/companies/19/17.jpeg",
				"/images/companies/19/18.jpeg",
				"/images/companies/19/20.jpeg",
			],
		},

		{
			id: 20,
			tag: "Shayro",
			name: "Shayro",
			description:
				"A 3 MW hydroelectric power plant located in Tawang District, Arunachal Pradesh, with the entire electro-mechanical work awarded by the Department of Hydro Power Development.",
			paths: [
				// "/images/companies/20/1.webp",
				// "/images/companies/20/2.webp",
				// "/images/companies/20/3.webp",
				"/images/companies/20/4.webp",
				"/images/companies/20/5.webp",
				// "/images/companies/20/6.webp",
				"/images/companies/20/7.webp",
				// "/images/companies/20/8.webp",
				"/images/companies/20/9.webp",
			],
		},
		{
			id: 21,
			tag: "Kitpi",
			name: "Kitpi",
			description:
				"A 1.5 MW hydroelectric power plant located in Tawang District, Arunachal Pradesh, with the entire electro-mechanical work awarded by the Department of Hydro Power Development.",
			paths: [
				"/images/companies/21/4.webp",

				"/images/companies/21/8.webp",

				"/images/companies/21/1.webp",
				"/images/companies/21/2.webp",
				"/images/companies/21/5.webp",
				// "/images/companies/21/6.webp",
				// "/images/companies/21/7.webp",
				"/images/companies/21/9.webp",
			],
		},
	]

	const epc_solar = [
		{
			id: 22,
			tag: "Ediyar",
			name: "Ediyar",
			description:
				"A 1.25 MW grid-tied ground-mounted solar project located in Kerala, successfully completed and handed over to the Kerala State Electricity Board (KSEB).",
			paths: [
				"/images/companies/22/1.webp",
				"/images/companies/22/2.webp",
				"/images/companies/22/3.webp",
				"/images/companies/22/4.webp",
			],
		},
		{
			id: 23,
			tag: "Barapole",
			name: "Barapole",
			description:
				"A 1 MW grid-tied ground-mounted solar project located in Kerala, successfully completed and handed over to KSEB.",
			paths: [
				// "/images/companies/23/2.webp",

				"/images/companies/23/7.webp",

				// "/images/companies/23/1.webp",
				"/images/companies/23/3.webp",
				"/images/companies/23/4.webp",
				"/images/companies/23/5.webp",
				"/images/companies/23/6.webp",
			],
		},

		{
			id: 24,
			tag: "Thalakkulathur",
			name: "Thalakkulathur",
			description:
				"A 650 KW grid-tied ground-mounted solar project located in Kerala, successfully completed and handed over to KSEB.",
			paths: [
				"/images/companies/24/1.jpg",

				"/images/companies/24/2.jpg",
				"/images/companies/24/3.jpg",
			],
		},
		{
			id: 25,
			tag: "Muvattupuzha",
			name: "Muvattupuzha",
			description:
				"A 1.25 MW grid-tied ground-mounted solar project located in Kerala, successfully completed and handed over to KSEB.",
			paths: [
				// "/images/companies/25/1.webp",
				// "/images/companies/25/2.webp",
				"/images/companies/25/3.webp",
				"/images/companies/25/4.webp",
				"/images/companies/25/5.webp",
			],
		},
		{
			id: 30,
			tag: "Ghani",
			name: "Ghani",
			description:
				"A 58 MW solar power project in Kurnool District, Andhra Pradesh,  successfully completed in March 2017.",
			paths: ["/images/companies/30/1.jpg", "/images/companies/30/2.png"],
		},
		{
			id: 31,
			tag: "Anantapur",
			name: "Anantapur",
			description:
				"A 5.1 MW solar power project with a fixed tilt mounting structure in Anantapur district, Andhra Pradesh, successfully completed in March 2013.",
			paths: ["/images/companies/solar-1.jpg"],
		},
		{
			id: 32,
			tag: "Rampurwa",
			name: "Rampurwa",
			description:
				"A 5 MW solar power project with a fixed tilt mounting structure in West Champaran district, Bihar, successfully completed in November 2016.",
			paths: ["/images/companies/32/1.jpg", "/images/companies/32/2.png"],
		},
		// {
		// 	id: 33,
		// 	name: "Photovoltaic Power Plant PV plant",
		// 	description:
		// 		"New Photovoltaic Power Plant in Bernburg, Saxony-Anhalt Client: Bosch Solar Energy AG Realization period: 2010 AIC scope: EPC, O & M Plant output: 3.5 MW Project description: AIC has constructed a 3.5MW PV plant together with the company Bosch Solar Energy AG. Utilised are the high-quality crystalline modules of the company Bosch. The plant is situated within the Industrial Zone of the town Bernburg (Saale), located at the northern city limits.",
		// 	paths: [
		// 		"/images/companies/33/1.png",
		// 		"/images/companies/33/2.png",
		// 		"/images/companies/33/3.png",
		// 	],
		// },

		{
			id: 2,

			tag: "Kadiri",
			name: "Kadiri",
			description:
				"A 5.6 MW solar PV power project in Maddimadugu Village, Anantapur district, Andhra Pradesh, successfully completed in November 2015.",
			paths: [
				"/images/companies/2/2.webp",

				"/images/companies/2/1.webp",
				"/images/companies/2/3.webp",
				"/images/companies/2/4.webp",
				"/images/companies/2/5.webp",
			],
		},
	]

	const roof_top = [
		{
			id: 26,
			tag: "DPS Nadergul",
			name: "DPS Nadergul",
			description:
				"A 107 kW grid-connected solar PV plant installed on the terrace of Delhi Public School in Telangana.",
			paths: [
				"/images/companies/26/1.jpg",
				"/images/companies/26/2.jpg",
				"/images/companies/26/3.jpg",
			],
		},
		{
			id: 27,
			tag: "Korea House",
			name: "Korea House",
			description:
				"A 52 kW grid-connected solar PV plant with a pergola structure at Korea House, Hyderabad, Telangana.",
			paths: [
				"/images/companies/27/1.jpg",
				"/images/companies/27/2.jpg",
			],
		},
		{
			id: 28,
			tag: "Phoenix Aquila",
			name: "Phoenix Aquila",
			description:
				"A 196 kW grid-connected solar PV plant on the rooftop of Phoenix Aquila in Ranga Reddy District, Hyderabad.",
			paths: [
				"/images/companies/28/3.jpg",

				"/images/companies/28/1.jpg",
				"/images/companies/28/2.jpg",
			],
		},
		{
			id: 29,
			tag: "Crematorium",
			name: "Crematorium",
			description:
				"A 33 kW grid-connected solar PV plant installed on multiple rooftops of Mahaprasthanam Crematorium in Shaikpet, Hyderabad.",
			paths: ["/images/companies/29/1.jpg", "/images/companies/29/2.jpg"],
		},
	]

	const [show, setShow] = useState(null)
	const [content, setContent] = useState(solar[0])

	const solar_projects = solar.map((info) => (
		<ProjectItemComponent
			key={info.id}
			content={info}
			onClick={() => {
				setContent(info)
				setShow(true)
			}}
		/>
	))
	const hydro_projects = hydro.map((info) => (
		<ProjectItemComponent
			key={info.id}
			content={info}
			onClick={() => {
				setContent(info)
				setShow(true)
			}}
		/>
	))
	const epc_hydro_projects = epc_hydro.map((info) => (
		<ProjectItemComponent
			key={info.id}
			content={info}
			onClick={() => {
				setContent(info)
				setShow(true)
			}}
		/>
	))
	const epc_solar_projects = epc_solar.map((info) => (
		<ProjectItemComponent
			key={info.id}
			content={info}
			onClick={() => {
				setContent(info)
				setShow(true)
			}}
		/>
	))

	const roof_top_projects = roof_top.map((info) => (
		<ProjectItemComponent
			key={info.id}
			content={info}
			onClick={() => {
				setContent(info)
				setShow(true)
			}}
		/>
	))

	return (
		<>
			<Head>
				<title>Projects</title>
				<meta
					name="description"
					content="Explore our successful clean energy projects, redefining the future of sustainable power generation."
				/>

				<meta
					property="og:title"
					content="Tavasya - Projects"
				/>
				<meta
					property="og:description"
					content="Explore our successful clean energy projects, redefining the future of sustainable power generation."
				/>

				<meta
					property="twitter:title"
					content="Tavasya - Projects"
				/>
				<meta
					property="twitter:description"
					content="Explore our successful clean energy projects, redefining the future of sustainable power generation."
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
				{/* <link
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
				/> */}
			</Head>
			<main className={`${styles.main} ${show ? styles.modal_active : ""}`}>
				<header className={styles.header}>
					<div className={styles.header_inner}>
						<div className={styles.header_container}>
							<h1 className={styles.title}>Projects</h1>
						</div>
					</div>

					<iframe
						className={styles.video}
						width="560"
						height="315"
						src="https://www.youtube.com/embed/w9cpYT5RFy4?si=CmdzAiMGBfj0A_fq&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;rel=0&amp;playsinline=1&amp;playlist=w9cpYT5RFy4"
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
						poster="/images/companies/11/2.webp">
						<source
							src="https://drive.google.com/uc?export=download&id=1Wvlut6qctuQl4G3QbuXP3wiw0m_ILt1I"
							type="video/mp4"
						/>
					</video> */}
				</header>

				<section className="space">
					<h2>BOOT Hydro Projects</h2>

					<div className={`${styles.container} `}>{hydro_projects}</div>
				</section>

				<section className="space">
					<h2>BOOT Solar Projects</h2>

					<div className={`${styles.container} `}>{solar_projects}</div>
				</section>

				<section className="space">
					<h2>EPC Hydro Projects</h2>

					<div className={`${styles.container} `}>{epc_hydro_projects}</div>
				</section>

				<section className="space">
					<h2>EPC Solar Projects</h2>
					<div className={`${styles.container}`}>{epc_solar_projects}</div>
				</section>

				<section className="space">
					<h2>Rooftop Solar Projects</h2>
					<div className={`${styles.container}`}>{roof_top_projects}</div>
				</section>

				{show != null ? (
					<ModalComponent
						active={show}
						onClick={() => setShow(false)}
						content={content}
					/>
				) : null}
			</main>
		</>
	)
}
