import Head from "next/head.js"
import styles from "../../styles/contact.module.css"

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Us</title>
				<meta
					name="description"
					content="Reach out to Tavasya for inquiries, partnerships, or to join hands in promoting clean energy."
				/>

				<meta
					property="og:title"
					content="Tavasya - Contact Us"
				/>
				<meta
					property="og:description"
					content="Reach out to Tavasya for inquiries, partnerships, or to join hands in promoting clean energy."
				/>

				<meta
					property="twitter:title"
					content="Tavasya - Contact Us"
				/>
				<meta
					property="twitter:description"
					content="Reach out to Tavasya for inquiries, partnerships, or to join hands in promoting clean energy."
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
				
			</Head>
			<main className={`${styles.main}`}>
				{/* <header className={styles.header}>
					<h1 className={styles.title}>Contact</h1>
				</header> */}

				<section className={`${styles.container} space`}>
					<form
						className={styles.form}
						action="https://docs.google.com/forms/d/e/1FAIpQLSeRRZ_IbGDu2-uMYmyHol4f9bgHEaRfVX44tdixCKvOu_BBOg/formResponse"
						method="POST"
						target="_self">
						<h2>Contact Us</h2>
						<p>
							We work as a single united team with market leading firms around
							the world and <br />
							give our clients the highest quality advice possible.
						</p>

						<div className={styles.div}>
							<input
								className={styles.input}
								type="text"
								id="name"
								name="entry.1426897502"
								placeholder="Your Name"
								required
							/>
							<input
								className={styles.input}
								type="email"
								id="email"
								name="entry.1132813028"
								placeholder="Your Email"
								required
							/>
						</div>
						<div className={styles.div}>
							<input
								className={styles.input}
								type="text"
								id="name"
								name="entry.1535476016"
								placeholder="Your Business Name"
								required
							/>
							<input
								className={styles.input}
								type="email"
								id="phone"
								name="entry.477807425"
								placeholder="Business Email ID"
								required
							/>
						</div>
						<div className={styles.div}>
							<input
								className={styles.input}
								type="text"
								id="name"
								name="entry.2063576290"
								placeholder="Subject"
								required
							/>
							<input
								className={styles.input}
								type="tel"
								id="phone"
								name="entry.877558363"
								placeholder="Phone Number"
								required
							/>
						</div>

						<textarea
							className={styles.input_text}
							id="question"
							name="entry.268104113"
							placeholder="Your Questions"
							rows={5}></textarea>

						<button
							className={styles.button}
							type="submit">
							{" "}
							Submit{" "}
						</button>
					</form>

					<div className={styles.container2}>
						<div className={styles.circle}>
						
							<p>
								Plot No 304-L-III, 3rd Floor, Road No 78, Jubilee Hills.
								Hyderabad – 500096, India
							</p>
						</div>
						<div className={styles.circle}>
							<svg
								width="44"
								height="44"
								viewBox="0 0 44 44"
								xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_622_13)">
									<path d="M36.6141 44.0762C32.7946 44.0762 29.021 43.2432 25.2932 41.5773C21.5655 39.9115 18.1738 37.5513 15.1182 34.497C12.0627 31.4415 9.70256 28.0498 8.0379 24.322C6.37323 20.5942 5.54028 16.8206 5.53906 13.0012C5.53906 12.4512 5.7224 11.9928 6.08906 11.6262C6.45573 11.2595 6.91406 11.0762 7.46406 11.0762H14.8891C15.3168 11.0762 15.6988 11.2216 16.0349 11.5125C16.371 11.8034 16.5696 12.1468 16.6307 12.5428L17.8224 18.9595C17.8835 19.4484 17.8682 19.8609 17.7766 20.197C17.6849 20.5331 17.5168 20.8234 17.2724 21.0678L12.8266 25.5595C13.4377 26.6901 14.1631 27.7821 15.0027 28.8357C15.8424 29.8892 16.767 30.9055 17.7766 31.8845C18.7238 32.8317 19.7168 33.7105 20.7557 34.5208C21.7946 35.3312 22.8946 36.0718 24.0557 36.7428L28.3641 32.4345C28.6391 32.1595 28.9984 31.953 29.4421 31.8148C29.8857 31.6767 30.3208 31.6388 30.7474 31.7012L37.0724 32.9845C37.5002 33.1067 37.8516 33.3286 38.1266 33.65C38.4016 33.9715 38.5391 34.3302 38.5391 34.7262V42.1512C38.5391 42.7012 38.3557 43.1595 37.9891 43.5262C37.6224 43.8928 37.1641 44.0762 36.6141 44.0762Z" />
								</g>
								<defs>
									<clipPath id="clip0_622_13">
										<rect
											width="44"
											height="44"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>

							<p>Tel: +91-4023110775,</p>
						</div>
						<div className={styles.circle}>
							<svg
								width="44"
								height="44"
								viewBox="0 0 44 44"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M36.6641 7.33398H7.33073C5.31406 7.33398 3.6824 8.98398 3.6824 11.0007L3.66406 33.0006C3.66406 35.0173 5.31406 36.6673 7.33073 36.6673H36.6641C38.6807 36.6673 40.3307 35.0173 40.3307 33.0006V11.0007C40.3307 8.98398 38.6807 7.33398 36.6641 7.33398ZM36.6641 14.6673L21.9974 23.834L7.33073 14.6673V11.0007L21.9974 20.1673L36.6641 11.0007V14.6673Z" />
							</svg>

							<p>contactus@tavasya.com</p>
						</div>
					</div>
				</section>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d400.1475176757231!2d78.40285271426724!3d17.41820003974862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI1JzA1LjkiTiA3OMKwMjQnMTEuMSJF!5e0!3m2!1sen!2sin!4v1696566647580!5m2!1sen!2sin"
					className={styles.map}
					width="100%"
					height="450"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>
			</main>
		</>
	)
}
