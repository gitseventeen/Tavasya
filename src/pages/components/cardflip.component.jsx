import ButtonComponent from "@/components/button.component.jsx"
import Image from "next/image.js"
import { useState } from "react"
import styles from "./cardflip.module.css"

export default function CardFlipComponent({
	title,
	description,
	imgUrl,
	path,
}) {
	const [flip, setFlip] = useState(false)
	return (
		<div
			className={styles.card}
			onClick={() => setFlip(!flip)}
			onMouseLeave={()=>setFlip(false)}
			>
			<div className={`${styles.cardCover} ${flip ? styles.card_hide : ""} `}>
				<Image
					src={`${imgUrl}`}
					alt="Solar EPC"
					loading="lazy"
					className={`${styles.cardImage} ${flip ? styles.card_hide : ""} `}
					fill
				/>

				<h3 className={styles.cardCoverTitle}>{title}</h3>
			</div>

			<div
				className={`${styles.card__content} ${flip ? styles.card_flip : ""}`}>
				<h3>{title}</h3>
				<p className={styles.card__description}>{description}</p>

				<ButtonComponent
					name="Know More"
					path={`${path}`}
				/>
			</div>
		</div>
	)
}
