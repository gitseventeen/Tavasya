import Image from "next/image.js"
import Link from "next/link.js"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import logo from "../../public/tavasya.svg"
import styles from "./header.module.css"

export default function HeaderComponent() {
	const router = useRouter()

	const [route, setRoute] = useState("/")

	const [scrolled, setScrolled] = useState(false)

	const [show, setShow] = useState(null)

	useEffect(() => {
		setRoute(router.pathname)
	}, [router.pathname])

	useEffect(() => {
		const onScroll = () => {
			window.scrollY > 100 && window.document.body.style.overflow !== "hidden"
				? setScrolled(true)
				: setScrolled(false)
		}

		window.addEventListener("scroll", onScroll, { passive: true })

		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<nav className={`${styles.nav} ${scrolled ? styles.nav_sticked : ""}`}>
			<Link
				className={styles.logo}
				href="/">
				<Image
					src={logo}
					alt="Tavasya Company Logo"
				/>
			</Link>

			<ul
				className={`${styles.list} ${show ? styles.list_show : ""}`}
				onClick={() => setShow(false)}>
				<li>
					<Link
						className={`${styles.link} ${
							route == "/" ? styles.selected : null
						}`}
						href="/">
						Home
					</Link>
				</li>
				<li>
					<Link
						className={`${styles.link} ${
							route == "/work" ? styles.selected : null
						}`}
						href="/work">
						What We Do
					</Link>
				</li>
				<li>
					<Link
						className={`${styles.link} ${
							route == "/projects" ? styles.selected : null
						}`}
						href="/projects">
						Projects
					</Link>
				</li>
				<li>
					<Link
						className={`${styles.link} ${
							route == "/about" ? styles.selected : null
						}`}
						href="/about">
						About Us
					</Link>
				</li>
				<li>
					<Link
						className={`${styles.link} ${
							route == "/companies" ? styles.selected : null
						}`}
						href="/companies">
						Group Companies
					</Link>
				</li>
				<li>
					<Link
						className={`${styles.link} ${
							route == "/foundation" ? styles.selected : null
						}`}
						href="/foundation">
						Foundation
					</Link>
				</li>
				<li>
					<Link
						className={`${styles.link} ${
							route == "/contact" ? styles.selected : null
						}`}
						href="/contact">
						Contact Us
					</Link>
				</li>
			</ul>

			<div
				className={styles.menu}
				onClick={() => setShow(!show)}>
				<span
					className={`${styles.span} ${show ? styles.span_anim : ""}`}></span>
				<span
					className={`${styles.span} ${show ? styles.span_anim : ""}`}></span>
				<span
					className={`${styles.span} ${show ? styles.span_anim : ""}`}></span>
			</div>
		</nav>
	)
}
