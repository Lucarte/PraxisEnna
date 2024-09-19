import { useState } from "react";
import baby from "/src/assets/mutterKind.png";
import kugel from "/src/assets/kugel.png";
import FAQ from "../components/FAQ";

const Angebot = () => {
	const [isExpanded, setIsExpanded] = useState(false); // Added state to track whether text is expanded

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded); // Function to toggle expansion state
	};

	return (
		<article>
			{/* SECTION ONE */}
			<section className='flex-row w-screen mt-24 section__one bg-gradient-to-r from-darkTurquis to-lightTurquis lg:flex'>
				<div className='hidden lg:flex relative items-center bg-darkBrown w-[25%] xl:w-[30%] min-[1700px]:w-[20%]'>
					<img
						className='absolute -right-16 max-w-[250px] xl:max-w-[350px]'
						src={baby}
						alt='Picture of a mother (waist down dressed with kakhi pants and a fall jacket) holding both hands of a todler right in front of her as if giving his second steps'
					/>
				</div>
				<div className='pt-20 pb-20 md:px-10 lg:py-0 lg:mt-[6%] lg:mb-[9%] lg:h-full lg:w-[75%] xl:pt-16 xl:mx-10 xl:px-16 xl:w-[70%] min-[1700px]:w-[80%]'>
					<h2 className='mb-6 ml-12 text-lg font-bold sm:mt-0 text-darkBrown lg:hidden'>
						ANGEBOT
					</h2>
					<span className='block w-[5.5rem] h-[.2rem] bg-lightBrown rounded-lg -mt-4 mb-14 ml-16 lg:hidden'></span>
					<div className='flex flex-col items-center mb-6 font-bold lg:-mt-16 text-darkBrown font-title '>
						<h2 className='hidden lg:flex lg:text-[23px] xl:text-2xl lg:tracking-wide'>
							Psychotherapie - kennt man...
						</h2>
						<h2 className='hidden lg:mt-0 lg:flex mb-16 lg:text-[23px] xl:text-2xl lg:tracking-wide'>
							Aber Dialogische Körpertherapie - Was ist das?
							<span className='absolute rounded-lg h-1 w-[29rem] bg-lightBrown mt-12 ml-16'></span>
						</h2>
					</div>
					<h2 className='mb-2 -mt-10 text-2xl font-bold text-center lg:-mt-6 font-title text-darkBrown lg:hidden'>
						Dialogische Körpertherapie
					</h2>
					<div
						className={`mx-16 text-darkBrown transition-all duration-500 ${
							isExpanded
								? "h-auto" // Fully expanded height for all screen sizes
								: "h-86 lg:h-[20rem] overflow-hidden" // Different heights for larger screens
						}`}>
						<p className='text-center leading-8 lg:text-[1.1rem] 2xl:text-[1.2rem]'>
							{/* Visible part of the text with screen-specific truncation */}
							{!isExpanded && (
								<>
									{/* Small screens - default */}
									<span className='inline lg:hidden'>
										Es ist wie ein Wunder: Der Körper ist ein riesengroßer
										Speicher voller Erinnerungen und Wissen. Insbesondere
										schlechte Erfahrungen werden abgespeichert und oft erst
										einmal in Spannungen festgehalten. Das ist zum einen ein
										lebenswichtiger
										<span className='text-veryDarkBrown'>... </span>
									</span>

									{/* Web screens */}
									<span className='hidden lg:inline lg:text-xl'>
										Es ist wie ein Wunder: Der Körper ist ein riesengroßer
										Speicher voller Erinnerungen und Wissen. Insbesondere
										schlechte Erfahrungen werden abgespeichert und oft erst
										einmal in Spannungen festgehalten. Das ist zum einen ein
										lebenswichtiger Mechanismus, der uns vor Verletzungen
										schützt, der aber auch schöne Erfahrungen und Möglichkeiten
										blockiert, weil der Körper dann nicht mehr für alles
										durchlässig ist. Durch meine Arbeit werden diese Spannungen
										gefunden, gespürt und wieder durchlässiger gemacht.
										Überlebensmechanismen werden hinterfragt und
										<span className='text-veryDarkBrown'>... </span>
									</span>
								</>
							)}

							{/* Expanded text with screen-specific continuation */}
							{isExpanded && (
								<>
									{/* Blend whole test for all sizes */}
									<span className='inline'>
										Es ist wie ein Wunder: Der Körper ist ein riesengroßer
										Speicher voller Erinnerungen und Wissen. Insbesondere
										schlechte Erfahrungen werden abgespeichert und oft erst
										einmal in Spannungen festgehalten. Das ist zum einen ein
										lebenswichtiger Mechanismus, der uns vor Verletzungen
										schützt, der aber auch schöne Erfahrungen und Möglichkeiten
										blockiert, weil der Körper dann nicht mehr für alles
										durchlässig ist. Durch meine Arbeit werden diese Spannungen
										gefunden, gespürt und wieder durchlässiger gemacht.
										<br />
										<br />
										Überlebensmechanismen werden hinterfragt und angenommen als
										solche oder durch neue, positive Erlebnisse relativiert und
										evtl. überschrieben. Das Nervensystem wird toleranter in
										seinen Reaktionen und wir können wieder besser Durchatmen,
										zur Ruhe kommen, uns wohlfühlen. Das Stressempfinden sinkt
										und neue Konflikte oder Belastungen können besser gemanagt
										werden. Das Urvertrauen wächst. Ich möchte, dass Du lernst,
										Deinen Körper in seiner Sprache zu verstehen, Deine Impulse,
										Gefühle und Wünsche zu erkennen und einzusortieren. Durch
										verschiedene Techniken wie Atmen, Bewegungen, Berührungen
										und Massagen werden Blockaden gelöst und neue Möglichkeiten
										gewonnen, die nicht nur der Körper erlebt, sondern durch die
										bewusste Wahrnehmung und unsere Gespräche darüber Deine
										ganze Welt verändern können. Ich biete hierfür individuell
										abgestimmte Termine von ca. 50 Minuten an. In einem ersten
										Kennenlerntermin sprechen wir über Deine Fragen, Probleme
										und Wünsche und stellen einen Plan für das Erreichen Deiner
										Ziele auf.
										<br />
										<br />
										Ich kann Dir nie sagen, wie lange Dein Weg dauern wird, da
										die Ziele und Hintergründe sehr unterschiedlich sein können
										und sich auch ändern können im Laufe eines Prozesses.
										Manches geht ganz schnell, anderes braucht
										Durchhaltevermögen. Bei allen weiteren Terminen wird es eine
										Mischung aus Gespräch und Körperarbeit geben. Bringe bitte
										zu allen Terminen ein großes Handtuch mit und ziehe bequeme
										Kleidung an.
									</span>
								</>
							)}

							{/* Conditional 'mehr zeigen' or 'weniger zeigen' link */}
							<span
								className='inline-flex pl-2 leading-6 underline cursor-pointer active:text-lightBrown visited:text-lightBrown text-lightBrown lg:text-lightBrown hover:text-darkBrown'
								onClick={toggleReadMore}>
								{isExpanded ? " weniger zeigen" : " mehr zeigen"}
							</span>
						</p>
					</div>
				</div>
			</section>

			{/* SECTION TWO */}
			<section
				id='hypnose'
				className='w-screen bg-gradient-to-b lg:bg-gradient-to-r from-lightBrown to-darkBrown lg:flex lg:flex-row-reverse'>
				<div className='hidden lg:flex relative items-center bg-darkTurquis w-[25%] xl:w-[30%] min-[1700px]:w-[20%]'>
					<img
						className='absolute right-24 2xl:right-40 max-w-[250px] xl:max-w-[350px] min-[1700px]:right-16'
						src={kugel}
						alt='Bild von einer transparenten Kugel, die Bäume reflektiert'
					/>
				</div>
				<div className='pt-16 pb-20 md:px-16 lg:py-0 lg:mt-[2%] lg:mb-[9%] lg:h-full lg:w-[75%] xl:pt-10 xl:mx-10 xl:px-16 xl:w-[70%] min-[1700px]:w-[80%]'>
					<div className='flex flex-col items-center mb-6 font-bold text-darkBrown font-title lg:text-veryDarkBrown '>
						<h2 className='hidden mb-8 tracking-wide lg:flex lg:text-3xl'>
							Hypnose
							<span className='absolute rounded-lg h-[.2rem] w-[4.5rem] bg-darkTurquis mt-10 ml-[1.7rem]'></span>
						</h2>
					</div>
					<h2 className='mb-6 -mt-8 text-2xl font-bold text-center font-title text-veryDarkBrown lg:hidden'>
						Hypnose
					</h2>
					<div
						className={`px-10 text-veryDarkBrown transition-all duration-500 ${
							isExpanded
								? "h-auto" // Fully expanded height for all screen sizes
								: "h-86 lg:h-[20rem] overflow-hidden" // Different heights for larger screens
						}`}>
						<div className='flex flex-col leading-8 text-center lg:text-xl'>
							<p className='pr-10 my-0'>Hypnose – gackern wie ein Huhn…</p>
							<p className='pl-10 my-0'>Hypnosetherapie – was passiert da?</p>
							<br />
						</div>
						<p className='mt-0 leading-8 text-center lg:mt-6 lg:text-xl lg:leading-8'>
							{/* Visible part of the text with screen-specific truncation */}
							{!isExpanded && (
								<>
									{/* Small screens - default */}
									<span className='inline lg:hidden'>
										Eine Person aus dem Publikum kommt auf die Bühne, wird kurz
										auf magische Art und Weise ihres Willens beraubt und macht
										auf Kommando merkwürdige Dinge… DAS würde ich auch nicht mit
										mir machen lassen
										<span className='text-veryDarkBrown'>... </span>
									</span>

									{/* Large screens */}
									<span className='hidden lg:inline'>
										Eine Person aus dem Publikum kommt auf die Bühne, wird kurz
										auf magische Art und Weise ihres Willens beraubt und macht
										auf Kommando merkwürdige Dinge… DAS würde ich auch nicht mit
										mir machen lassen! Hypnosetherapie kommt auch ohne Trance
										zurecht. Es geht darum, die unwillkürlichen Prozesse zu
										beeinflussen und für sich selbst in eine positive Richtung
										zu lenken. Unser Unterbewusstsein reagiert sehr gut auf
										Imaginationen, die wir mit oder Trance einsetzen können.
										Stell dir einmal vor
										<span className='text-veryDarkBrown'>... </span>
									</span>
								</>
							)}

							{/* Expanded text with screen-specific continuation */}
							{isExpanded && (
								<>
									{/* Blend whole test for all sizes */}
									<span className='inline'>
										Eine Person aus dem Publikum kommt auf die Bühne, wird kurz
										auf magische Art und Weise ihres Willens beraubt und macht
										auf Kommando merkwürdige Dinge… DAS würde ich auch nicht mit
										mir machen lassen!
										<br />
										<br />
										Hypnosetherapie kommt auch ohne Trance zurecht. Es geht
										darum, die unwillkürlichen Prozesse zu beeinflussen und für
										sich selbst in eine positive Richtung zu lenken. Unser
										Unterbewusstsein reagiert sehr gut auf Imaginationen, die
										wir mit oder Trance einsetzen können. Stell dir einmal vor,
										in eine reife, saftige Zitrone zu beißen! Vermutlich
										reagiert dein Körper unmittelbar, oder? In der
										Hypnosetherapie nutzen wir Reaktionen und wandeln sie um
										oder lassen daraus neue entstehen. Dadurch lösen sich
										Glaubenssätze und Verhaltensmuster. Das zu entdecken kann
										großen Spaß machen! Dennoch ist Trance manchmal auch
										hilfreich, Zugang zu unbewussten Bereichen zu bekommen. Lass
										es uns herausfinden! Die tiefe Entspannung fühlt sich so
										ähnlich an wie der Zusatnd kurz vor dem Einschlafen.
										Verspannungen können sich lösen, Selbstheilung aktivieren
										und das Nervensystem darf in einen erholsamen Ruhemodus
										gehen.
										<br />
										<br />
										Die Kombination: Auch in der Körperarbeit kann es
										vorteilhaft sein, eine Tiefenentspannung einzuleiten, damit
										der Körper noch besser die Impulse meiner Hände annehmen und
										integrieren kann. Diese Kombination aus Hypnose und
										Körperarbeit hat sich schon gut bewährt in meiner Praxis und
										ist machbar, wenn wir es beide für sinnvoll erachten.
										Vielleicht ist auch eine Körperarbeit ein schöner Einstieg
										in die eigentliche Hypnosetherapie.
									</span>
								</>
							)}

							{/* Conditional 'mehr zeigen' or 'weniger zeigen' link */}
							<span
								className='inline-flex pl-2 leading-6 underline cursor-pointer text-lightBrown lg:text-lightBrown hover:text-darkBrown'
								onClick={toggleReadMore}>
								{isExpanded ? " weniger zeigen" : " mehr zeigen"}
							</span>
						</p>
					</div>
				</div>
				<div className='w-screen overflow-hidden lg:hidden lg:w-0'>
					<img
						src={kugel}
						alt='Bild von einer transparenten Kugel, die Bäume reflektiert'
						className='relative scale-125 min-w-full md:scale-[60%] md:-mt-24 lg:-z-10 lg:h-0'
					/>
				</div>
			</section>

			{/* SECTION THREE */}
			<FAQ />
		</article>
	);
};

export default Angebot;
