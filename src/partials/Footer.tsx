import { useEffect, useState } from "react";

const Footer = () => {
	const [hideFooter, setHideFooter] = useState(false);

	// Effekt to make footer disappear when scrolling down
	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				// Scrolling down, hide the footer
				setHideFooter(true);
			} else {
				// Scrolling up, show the footer
				setHideFooter(false);
			}
			lastScrollY = window.scrollY;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<footer
			className={`fixed bottom-0 w-full transition-transform duration-500 ${
				hideFooter ? "translate-y-full" : "translate-y-0"
			} bg-green`}>
			<div className='h-44 flex items-center justify-center text-white'>
				THIS IS MY FOOTER
			</div>
		</footer>
	);
};

export default Footer;
