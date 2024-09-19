import { useState } from "react";
import kidOnShoulders from "/src/assets/kidOnShoulders.png";

const Uebermich = () => {
	const [isExpanded, setIsExpanded] = useState(false); // Added state to track whether text is expanded

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded); // Function to toggle expansion state
	};

	return (
		<article className='flex flex-col items-center bg-darkTurquis'>
			{" "}
			<section>
				<div className='text-veryDarkBrown pt-40 bg-gradient-to-b from-lightBrown via-lightBrown to-darkBrown px-10 pb-10 md:px-20 lg:bg-[url("/src/assets/beine.png")] lg:bg-cover lg:bg-no-repeat lg:pt-64 lg:px-32 lg:pb-16 xl:px-36 lg:min-h-[42rem]'>
					<h2 className='text-xl font-bold lg:hidden'>ÜBER MICH</h2>
					<span className='block w-24 h-[.2rem] bg-turquis rounded-md mr-0 mb-12 ml-[1.8rem] lg:opacity-0'></span>
					<h2 className='mb-2 text-2xl font-bold tracking-wide text-center font-title text-veryDarkBrown lg:text-3xl lg:-mt-20'>
						Kennst du das ?
						<span className='absolute h-0 mt-12 -ml-24 rounded-lg lg:h-1 w-36 bg-darkTurquis'></span>
					</h2>

					{/* Text container with expand/collapse feature */}
					<div
						className={`transition-all duration-500 ${
							isExpanded
								? "h-auto" // Fully expanded height for all screen sizes
								: "h-86 lg:h-[20rem] overflow-hidden" // Different heights for larger screens
						}`}>
						<p className='text-center lg:mt-16 lg:text-[1.1rem] 2xl:text-[1.2rem] leading-[2.3rem] 2xl:leading-[3rem]'>
							{/* Visible part of the text with screen-specific truncation */}
							{!isExpanded && (
								<>
									{/* Small screens - default */}
									<span className='inline md:hidden'>
										Du triffst einen Menschen, unterhältst Dich und später
										erkennst Du, wie wertvoll dieser Mensch oder dieses eine
										Gespräch, dieser eine Moment für Dich war. Wie ein Wegweiser
										auf Deinem Weg. Es hat Dir eine Richtung gezeigt, die Du
										sonst vielleicht nicht wahrgenommen hättest
										<span className='text-veryDarkBrown'>... </span>
									</span>

									{/* Medium screens */}
									<span className='hidden md:inline lg:hidden'>
										Du triffst einen Menschen, unterhältst Dich und später
										erkennst Du, wie wertvoll dieser Mensch oder dieses eine
										Gespräch, dieser eine Moment für Dich war. Wie ein Wegweiser
										auf Deinem Weg. Es hat Dir eine Richtung gezeigt, die Du
										sonst vielleicht nicht wahrgenommen hättest. Vermutlich
										hatte jeder schon solche Erlebnisse. Ich wünsche es
										zumindest jedem! Solche Begegnungen hatte ich
										<span className='text-veryDarkBrown'>... </span>
									</span>

									{/* Large screens */}
									<span className='hidden lg:inline'>
										Du triffst einen Menschen, unterhältst Dich und später
										erkennst Du, wie wertvoll dieser Mensch oder dieses eine
										Gespräch, dieser eine Moment für Dich war. Wie ein Wegweiser
										auf Deinem Weg. Es hat Dir eine Richtung gezeigt, die Du
										sonst vielleicht nicht wahrgenommen hättest. Vermutlich
										hatte jeder schon solche Erlebnisse. Ich wünsche es
										zumindest jedem! Solche Begegnungen hatte ich viele in
										meinem Leben und ich hatte immer ein Gespür dafür, diese
										Momente zu bemerken. Alle Menschen und Momente hier
										aufzuführen, würde den Rahmen sprengen, aber beruflich
										gesehen sind ein paar wirklich wichtig gewesen. Als
										Jugendliche traf ich
										<span className='text-veryDarkBrown'>... </span>
									</span>
								</>
							)}

							{/* Expanded text with screen-specific continuation */}
							{isExpanded && (
								<>
									{/* Blend whole test for all sizes */}
									<span className='inline'>
										Du triffst einen Menschen, unterhältst Dich und später
										erkennst Du, wie wertvoll dieser Mensch oder dieses eine
										Gespräch, dieser eine Moment für Dich war. Wie ein Wegweiser
										auf Deinem Weg. Es hat Dir eine Richtung gezeigt, die Du
										sonst vielleicht nicht wahrgenommen hättest. Vermutlich
										hatte jeder schon solche Erlebnisse. Ich wünsche es
										zumindest jedem! Solche Begegnungen hatte ich viele in
										meinem Leben und ich hatte immer ein Gespür dafür, diese
										Momente zu bemerken. Alle Menschen und Momente hier
										aufzuführen, würde den Rahmen sprengen, aber beruflich
										gesehen sind ein paar wirklich wichtig gewesen. Als
										Jugendliche traf ich das erste mal auf meine Zenlehrerin,
										die als Leib- und Atemtherapeutin auf einem Hof inmitten der
										Natur ihrer Meditation und Arbeit nachging. Sie hat in mir
										damals ein Bild davon entstehen lassen, wie ich Ruhe und
										Ganzheitlichkeit in mein Leben und meine Arbeit fließen
										lassen möchte. Für diese Ganzheitlichkeit habe ich neben
										Meditation und Achtsamkeit ein Studium der Physiotherapie
										abgeschlossen und anschließend den Weg der Osteopathie
										eingeschlagen, zu dem mich mein Babysittervater noch vor dem
										Abitur inspirierte hatte, indem er mir einfach ein Fachbuch
										in die Hand gedrückt hatte. Meine Erfahrungen mit
										Patientinnen brachten mich auf die Idee, für noch mehr Tiefe
										die Psychotherapie zu erlernen, wodurch ich in der
										Heilpraktikerschule dann auf meine Lehrerin für Dialogische
										Körperpsychotherapie stieß. Bei ihr wusste ich sofort, dass
										sie die Herangehensweise unterrichtet, die für mich die
										logische Folge meines bisherigen Weges war. Ich arbeite
										voller Liebe, Ruhe und Neugier sowohl in meiner Praxis als
										Therapeutin, als auch in Schulungen als Dozentin und bin
										gespannt, welchen Wegweisern ich noch begegnen werde und wem
										ich alles eine neue Richtung, Sichtweise oder Tiefe geben
										darf.
									</span>
								</>
							)}

							{/* Conditional 'mehr zeigen' or 'weniger zeigen' link */}
							<span
								className='inline-flex pl-2 leading-6 underline cursor-pointer text-lightBrown lg:text-darkBrown hover:text-veryDarkBrown'
								onClick={toggleReadMore}>
								{isExpanded ? " weniger zeigen" : " mehr zeigen"}
							</span>
						</p>
					</div>
				</div>

				{/* Image container */}
				<div className='overflow-hidden lg:hidden lg:w-0'>
					<img
						src={kidOnShoulders}
						alt='photo of a kid on the shoulders of a parent, seen from the back, in the forest.'
						className='relative block h-auto max-w-full align-middle scale-125 lg:-z-10 lg:h-0 overflow-clip'
					/>
				</div>
			</section>
			<section id='qualifications' className='max-w-[70%] p-8'>
				<div className='mb-8'>
					<h2 className='mt-10 mb-4 text-2xl font-bold text-center font-title'>
						Qualifikationen
					</h2>
					<p className='mb-10 font-medium text-center'>
						Neben meiner durchgängigen physiotherapeutischen Arbeit mit
						Schwerpinknten in der Orthopädie und Neurologie kann ich unter
						anderem folgendes nachweisen:
					</p>
					<ul className='flex flex-col gap-6 -ml-8 text-left list-inside lg:ml-[8%] xl:ml-[15%]'>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>
									Dialogische Körperpsychotherapie
								</b>
								bei Nicole Ulsamer 2023
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>Dozentin</b>
								an der HPA Norderstedt in den Fächern Bewegungsapparat und
								Psychotherapie
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>Dozentin</b>
								für Osteopathische Techniken in der Psychotherapie
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>
									Heilpraktiker für Psychotherapie
								</b>
								2022
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								Somatische Emotionale Integration (
								<b className='pr-1 font-bold'>SEI</b>) bei Dami Charf 2020
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>Dozentenassistenz</b>
								bei Cura-Akademie für funktionelle Osteopathie 2017-2019
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>Funktionelle Osteopathie</b>
								Abschlussprüfung 2016
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>Reflexzonentherapie</b>
								2010
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>Bachelor Physiotherapie</b>
								(NL) 2004
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								Studium der Physiotherapie an der Hogeschool Zuyd 2000-2004
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								Ausbildung <b className='pr-1 font-bold'>Energiearbeit</b>
								2000-2003
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>Freiwilliges Soziales Jahr</b>
								Fachklinik für Psychiatrie 1999-2000
							</span>
						</li>
						<li className='custom-list-style'>
							<span className='p-2 md:p-6'>
								<b className='pr-1 font-bold'>Meditationserfahrung</b>
								seit ca. 1997
							</span>
						</li>
					</ul>
				</div>
			</section>
		</article>
	);
};

export default Uebermich;
