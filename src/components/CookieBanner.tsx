import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieBanner: React.FC = () => {
	const [isBannerVisible, setIsBannerVisible] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);

	useEffect(() => {
		const isCookieAccepted = Cookies.get("CookieAccepted") === "true";
		setIsBannerVisible(!isCookieAccepted); // Show banner if no cookie consent
	}, []);

	const handleAcceptCookies = () => {
		Cookies.set("CookieAccepted", "true", { expires: 7 });
		setIsBannerVisible(false);
	};

	if (!isBannerVisible) return null;

	return (
		<div className='flex flex-col justify-center cookie-banner lg:flex-row lg:justify-between'>
			<p>
				Cookies erleichtern die Bereitstellung unserer Dienste. Mit der Nutzung
				unserer Webseite erklären Sie sich damit einverstanden, dass wir Cookies
				verwenden. Weitere Informationen erhalten Sie in den Cookie-Hinweisen
				unserer Datenschutzerklärung.
			</p>
			<button
				className='mr-12 lg:mr-0'
				onClick={handleAcceptCookies}
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
				style={{
					background: isHovered ? "rgb(85, 65, 50)" : "rgb(65, 47, 32)", // Lighter brown when hovered
					borderColor: isHovered ? "rgb(196, 168, 146)" : "rgb(136, 152, 48)", // Complementary light brown on hover
					color: "white",
					borderRadius: "8px",
					borderWidth: "1px",
					borderStyle: "solid",
					fontSize: "0.9rem",
					fontWeight: 400,
					padding: "0.7rem 1rem 0.6rem 1rem",
					cursor: isHovered ? "pointer" : "default",
					transition: "background-color 0.3s ease, border-color 0.3s ease",
				}}>
				EINVERSTANDEN
			</button>
		</div>
	);
};

export default CookieBanner;
