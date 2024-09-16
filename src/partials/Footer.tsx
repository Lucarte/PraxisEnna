import { useEffect, useState } from "react";
import footerTree from "/src/assets/footerTree.svg";

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
			// Add bg-footer-bg to the other pages in order to see the footer img
			className={`text-[#f5f5f5] py-4 text-center gap-[1rem] lg:grid lg:grid-cols-3 lg:justify-items-center lg:p-0 xl:pt-[2.6rem] xl:pr-0 xl:pb-12 xl:-p-[15rem] flex flex-col justify-center items-center fixed bottom-0 w-full lg:items-center transition-transform duration-500 ${
				hideFooter ? "translate-y-full" : "translate-y-0"
			} bg-green`}>
			<div className='flex flex-col items-center lg:gap-0'>
				{" "}
				<h2 className='leading-tight-custom font-light text-[1rem]'>
					PRAXIS
					<br />
					URVERTRAUEN{" "}
				</h2>
				<h2 className='m-0 font-title text-darkBrown text-[1.3rem] lg:hidden font-bold'>
					Anne Grysar
				</h2>
				<img
					className='hidden w-0 lg:block lg:w-16 lg:rotate-x-50'
					src={footerTree}
					alt='bottom half of the logo'
				/>{" "}
			</div>
			<div className='leading-6 md:grid md:col-start-1 md:row-start-1 md:row-end-2 md:gap-2'>
				<h2 className='hidden lg:block font-bold text-0 md:text-[1.12rem] font-title'>
					ANNE GRYSAR
				</h2>
				<p className='m-0'>Klaus-Rösner-Ring 29, 25474 Hasloh</p>
				<p className='m-0'>Tel. +49 175 299 1654</p>
			</div>
			<div className='leading-6 md:grid md:gap-2 md:pr-12'>
				<div className='flex gap-12 justify-center underline hover:text-darkBrown'>
					<a href='./impressum.html' className='text-[#f5f5f5]'>
						Impressum
					</a>
					<a href='./mehr.html' className='text-[#f5f5f5]'>
						Kontakt
					</a>
					<a href='./datenschutz.html' className='text-[#f5f5f5]'>
						Datenschutz
					</a>
				</div>
				<p className='m-0'>© 2024 | Urvertrauen | Schleswig-Holstein</p>
			</div>
		</footer>
	);
};

export default Footer;
