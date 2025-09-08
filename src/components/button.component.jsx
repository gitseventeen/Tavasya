import Link from "next/link.js"
import styles from "./button.module.css"

export default function ButtonComponent({ name, path = "" ,target="_self"}) {
	return (
		<button className={styles.button}>
			{path ? <Link href={path} target={target}>{name}</Link> : name }
		</button>
	)
}
