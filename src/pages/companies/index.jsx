import ButtonComponent from "@/components/button.component.jsx"
import Head from "next/head.js"
import Image from "next/image.js"
import logo5 from "../../../public/images/companies/ic-aic.svg"
import logo2 from "../../../public/images/companies/ic-nirupamagroup.svg"
import logo1 from "../../../public/images/companies/ic-rehpl.svg"
import logo4 from "../../../public/images/companies/ic-stanworth.svg"
import logo3 from "../../../public/images/companies/ic-tavasya-capital.svg"
import styles from "../../styles/companies.module.css"

export default function Companies() {
	return (
		<>
			<Head>
				<title>Group Companies</title>
				<meta
					name="description"
					content="Unifying efforts for sustainable progress and clean energy solutions."
				/>

				<meta
					property="og:title"
					content="Tavasya - Group Companies"
				/>
				<meta
					property="og:description"
					content="Unifying efforts for sustainable progress and clean energy solutions."
				/>

				<meta
					property="twitter:title"
					content="Tavasya - Group Companies"
				/>
				<meta
					property="twitter:description"
					content="Unifying efforts for sustainable progress and clean energy solutions."
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
				<link
					rel="icon"
					type="image/png"
					sizes="270x270"
					href="images/favicon-270x270.png"
				/>
			</Head>
			<main className={`${styles.main}`}>
				{/* <header className={styles.header}>
					<h1 className={styles.title}>Group Companies</h1>
				</header> */}

				<section className={`${styles.container} `}>
					<div className={`${styles.company} ${styles.company1}`}>
						<div className={styles.content}>
							<Image
								src={logo1}
								alt="REHPL Logo"
							/>
							<p className={styles.description}>
								Raajratna Energy Holdings is a subsidiary company of Tavasya. It
								is an investment holding company which floats SPVs to undertake
								BOOT projects.
							</p>

							<ButtonComponent
								name="Know More"
								path="https://www.rehpl.co.in/index.html"
								target="_blank"
							/>
						</div>
					</div>
					<div className={`${styles.company} ${styles.company5}`}>
						<div className={`${styles.content}`}>
							<Image
								src={logo5}
								alt="Tavasya capital Logo"
								width={300}
							/>
							<p className={styles.description}>
								AIC Solar Projects is a JV of Raajratna Energy Holdings Private
								Limited and AIC Projects GmbH, Germany, providing one stop
								support from project drawing to commissioning of a solar plant.
							</p>
						</div>
					</div>
					<div className={`${styles.company} ${styles.company2}`}>
						<div className={`${styles.content}`}>
							<Image
								src={logo2}
								alt="Nirupama Groups Company Logo"
							/>

							<p className={styles.description}>
								{`Tavasya Hospitality operates in the hospitality sector, managing hotels under the brand name 'Nirupama'.`}
							</p>

							<ButtonComponent
								name="Know More"
								path="https://nirupamagroup.com/"
								target="_blank"
							/>
						</div>
					</div>
					<div className={`${styles.company} ${styles.company3}`}>
						<div className={styles.content}>
							<Image
								src={logo3}
								alt="Tavasya capital Logo"
							/>
							<p className={styles.description}>
								{`Tavasya Capital is a SEBI registered Investment Advisor offering Asset Management, Investment Banking, Corporate Finance, and Wealth Management Services.`}
							</p>

							<ButtonComponent
								name="Know More"
								path="https://tavasyacapital.com/"
								target="_blank"
							/>
						</div>
					</div>

					<div className={`${styles.company} ${styles.company4}`}>
						<div className={`${styles.content}`}>
							<Image
								src={logo4}
								alt="Tavasya capital Logo"
								width={300}

							/>
							<p className={styles.description}>
								{`Stanworth Finance is a Non-deposit taking NBFC involved in fund-based activities such as investment in listed shares, securities, mutual funds, and providing personal & business loans.`}
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
