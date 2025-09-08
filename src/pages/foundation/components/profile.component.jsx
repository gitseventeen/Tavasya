import Image from "next/image.js"
import styles from "./profile.module.css"
export default function ProfileComponent({
	content = {
		name: "",
		position: "",
		description: "",
		path: "",
	},
}) {
	return (
		<div className={styles.container}>
			{" "}
			<div className={`${styles.card}`}>
				<div className={styles.mail}>
					<h3 className={`${styles.name}`}>{content.name}</h3>
					{/* <p className={styles.about_me}>{content.position}</p> */}
				</div>
				<div className={`${styles.profile_pic}`}>
					<Image
						className={styles.image}
						src={content.path}
						alt="person"
						width={100}
						height={100}
						unoptimized={true}
					/>
					<p className={styles.about_me}>{content.position}</p>
				</div>
				
				<div className={`${styles.bottom}`}>
					<div className={`${styles.content}`}>
						<p>{content.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
