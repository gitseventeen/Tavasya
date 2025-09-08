import { useEffect, useRef, useState } from "react"
import styles from "./counter.module.css"

export default function CounterComponent({
	number,
	step = 1,
}) {
	const [currentValue, setCurrentValue] = useState(0)
	const [isIntersecting, setIsIntersecting] = useState(false)

	const target = useRef(null)

	const component_duration = 2000
	const element_duration = (component_duration * step) / number

	useEffect(() => {
		if (!isIntersecting) return

		const interval = setInterval(() => {
			if (currentValue < number) setCurrentValue(currentValue + step)
			else {
				setCurrentValue(number)
				clearInterval(interval)
			}
		}, element_duration)

		return () => clearInterval(interval)
	}, [isIntersecting, element_duration, currentValue, number, step])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0]
				setIsIntersecting(entry.isIntersecting)
			},
			{ threshold: 1.0 }
		)

		if (target.current) observer.observe(target.current, {})

		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			if (target.current) observer.unobserve(target.current)
		}
	}, [target])

	return (
		<span
			ref={target}
			className={styles.container}>
			{isIntersecting ? currentValue : number}
		</span>
	)
}
