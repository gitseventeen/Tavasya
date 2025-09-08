import styles from "./rotation.module.css"
export default function RotationComponent() {
	return (
		<div className={styles.circle}>
			<div className={styles.rotate}>
				<div className={styles.inner_circle}>
					<p>Operation & Management</p>
				</div>
			</div>

			<div className={styles.rotate}>
				<div className={styles.inner_circle}>
					<p>Commissioning</p>
				</div>
			</div>

			<div className={styles.rotate}>
				<div className={styles.inner_circle}>
					<p>Testing</p>
				</div>
			</div>

			<div className={styles.rotate}>
				<div className={styles.inner_circle}>
					<p>Erection</p>
				</div>
			</div>

			<div className={styles.rotate}>
				<div className={styles.inner_circle}>
					<p>Supply</p>
				</div>
			</div>

			<div className={styles.rotate}>
				<div className={styles.inner_circle}>
					<p>Engineering</p>
				</div>
			</div>

			<div className={styles.rotate}>
				<div className={styles.inner_circle}>
					<p> Design</p>
				</div>
			</div>
		</div>
	)
}
