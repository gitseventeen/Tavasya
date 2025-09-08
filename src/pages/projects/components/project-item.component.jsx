import ButtonComponent from "@/components/button.component.jsx"
import Image from "next/image.js"
import styles from "./project-item.module.css"

export default function ProjectItemComponent({
	content = {
		tag: "",
		name: "REHPL 1MW Bolangir Solar Power Project",
		description:
			"This is a 1 MW project awarded by    MNRE under RPSSGP Scheme of the JNNSM. This project is located in Bolangir District of Orissa. Bolangir is the second-best location in India in terms of the amount of solar radiation received. The project has been synchronized with the grid and COD has been declared in July 2011.",
		paths: [
			"/images/home/hydro-epc.png",
			"/images/home/waaree-company-logo.png",
		],
	},
	onClick,
}) {
	return (
		<div
			className={styles.project}
			onClick={onClick}>
			<Image
				className={styles.image}
				src={content.paths[0]}
				alt=""
				width={300}
				height={300}
			/>
			<div className={styles.inner}>
				<h2>{content.tag}</h2>

				<ButtonComponent name="Know More" />
			</div>
		</div>
	)
}
