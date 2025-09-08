import LayoutComponent from "@/components/layout.component.jsx"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
	return (
		<LayoutComponent>
			<Component {...pageProps} />
		</LayoutComponent>
	)
}
