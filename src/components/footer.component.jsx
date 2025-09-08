import Image from "next/image.js"
import logo from "../../public/tavasya.svg"
import styles from "./footer.module.css"

export default function FooterComponent() {
	return (
		<footer className={`${styles.footer}`}>
			<div className={`${styles.container}`}>
				<Image
					src={logo}
					alt="Tavasya Company Logo"
				/>

				<address>
					<p className={styles.description}>
						<strong>Corporate address: </strong>
						<br />
						Plot No. 304-L-III, Road No.78, <br />
						Jubilee Hills. Hyderabad – 500096,India
					</p>
				</address>
				<address>
					<p className={styles.description}>
						<strong>Registered Address:</strong> <br />
						Flat-103, Utshav Enclave,Niladrivihar Road, <br />
						Chandrasekharpur Bhubaneswar - 751016, India
					</p>
				</address>

				<p className={styles.description}>
					<strong>CALL OUR EXPERTS TODAY </strong>
					<br />
					+91-40-23559922
				</p>
			</div>

			<p className={styles.description}>
				&copy;Copyright 2012 - 2023 | TAVASYA VENTURES PRIVATE LIMITED | All
				Rights Reserved
			</p>
		</footer>
	)
}
