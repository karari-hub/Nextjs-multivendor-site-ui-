import "./globals.scss";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/themeContext";
import { cookies } from "next/headers";
import { Navbar } from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const poppins = Poppins({
	weight: ["300", "400", "500", "600"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata = {
	title: "Mart",
	description: "marktplace for freelancers and multivendors",
};

export default function RootLayout({ children }) {
	const cookieStore = cookies();
	const mode = cookieStore.get("darkMode");

	let darkMode = false;

	if (mode) {
		if (mode.value === "true") {
			darkMode = true;
		}
	}

	return (
		<html lang="en" className={`${poppins.variable} `}>
			<body>
				<ThemeProvider serverDarkMode={darkMode}>
					<Navbar />
					<div>{children}</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
