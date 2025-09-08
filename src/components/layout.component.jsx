import FooterComponent from "./footer.component.jsx"
import HeaderComponent from "./header.component.jsx"

export default function LayoutComponent({ children }) {
	return (
		<>
			<HeaderComponent />

			{children}

			<FooterComponent />
		</>
	)
}
