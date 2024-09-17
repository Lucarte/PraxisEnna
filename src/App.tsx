import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Uebermich from "./pages/Uebermich";
import Angebot from "./pages/Angebot";
import Mehr from "./pages/Mehr";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

function App() {
	const location = useLocation(); // Get the current location

	// Conditionally set the footer background class
	// const footerBgClass = location.pathname === "/" ? "bg-green" : "bg-footer-bg"; FOR WEB?
	const footerBgClass =
		location.pathname === "/" ? "bg-green" : "bg-footer-mobile bg-center";

	return (
		<>
			<main className='h-[calc(100vh - 11rem)]'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/uebermich' element={<Uebermich />} />
					<Route path='/angebot' element={<Angebot />} />
					<Route path='/mehr' element={<Mehr />} />
					<Route path='/impressum' element={<Impressum />} />
					<Route path='/datenschutz' element={<Datenschutz />} />
				</Routes>
				<Footer bgClasses={footerBgClass} />
			</main>
		</>
	);
}

export default App;
