import Image from "next/image.js"
import { useEffect, useState } from "react"
import "react-slideshow-image/dist/styles.css"
import styles from "./modal.module.css"
import SlideComponent from "./slide.component.jsx"

export default function ModalComponent({
	active = null,
	onClick,
	content = {
		name: "REHPL 1MW Bolangir Solar Power Project",
		description:
			"This is a 1 MW project awarded by    MNRE under RPSSGP Scheme of the JNNSM. This project is located in Bolangir District of Orissa. Bolangir is the second-best location in India in terms of the amount of solar radiation received. The project has been synchronized with the grid and COD has been declared in July 2011.",
		paths: [
			"/images/home/hydro-epc.png",

			"/images/home/waaree-company-logo.png",
		],
	},
}) {
	const [selectedPath, setSelectedPath] = useState(content.paths[0])

	useEffect(() => {
		setSelectedPath(content.paths[0])

		window.document.body.style.overflow = active ? "hidden" : ""

		window.scrollBy(0, 1)
	}, [active, content])

	return (
		<div
			id={styles.modal_container}
			className={`${active ? styles.one : styles.one_out}`}>
			<div className={styles.modal_background}>
				<div
					className={styles.modal}
					onClick={(e) => {
						e.stopPropagation()
					}}>
					<SlideComponent images={content.paths} />

					<div
						className={styles.inner2}
						onClick={onClick}>
						<Image
							className={styles.close}
							src="/images/ic-close.svg"
							alt="close icon"
							width={25}
							height={25}
						/>
						<h2>{content.name}</h2>
						<p>{content.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
