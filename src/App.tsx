import Home from "./pages/home";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

function App() {
	return (
		<>
			<main className='h-[calc(100vh - 11rem)]'>
				<Header />
				<Home />
				<Footer />
			</main>
		</>
	);
}

export default App;
