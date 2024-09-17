import { useState } from "react";
import kidOnShoulders from "/src/assets/kidOnShoulders.png";

const Uebermich = () => {
	const [isExpanded, setIsExpanded] = useState(false); // Added state to track whether text is expanded

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded); // Function to toggle expansion state
	};

	return (
		<>
			{" "}
			<section>
				<div className='pt-40 bg-gradient-to-b from-lightBrown via-lightBrown to-darkBrown px-10 pb-10 md:px-20 lg:bg-[url("/src/assets/beine.png")] lg:bg-cover lg:bg-no-repeat lg:pt-64 lg:px-36 lg:pb-96 xl:px-64 2xl:px-80 lg:h-[60rem]'>
					<h2 className='mb-12 text-lg font-bold uebermich__titel lg:hidden'>
						ÜBER MICH
					</h2>
					<span className='uebermich__titel--span lg:opacity-0'></span>
					<h2 className='mb-2 text-2xl font-bold text-center section__titel text-veryDarkBrown'>
						Kennst du das ?
						<span className='absolute h-0 mt-12 -ml-24 rounded-lg lg:h-1 w-36 bg-darkTurquis '></span>
					</h2>

					{/* Text container with expand/collapse feature */}
					<div
						className={`transition-all duration-500 ${isExpanded ? "h-auto" : "h-80 overflow-hidden"}`}>
						<p className='text-center 2xl:text-[1.05rem] leading-[2.3rem] 2xl:leading-[3rem]'>
							{/* Visible part of the text */}
							Du triffst einen Menschen, unterhältst Dich und später erkennst
							Du, wie wertvoll dieser Mensch oder dieses eine Gespräch, dieser
							eine Moment für Dich war. Wie ein Wegweiser auf Deinem Weg. Es hat
							Dir eine Richtung gezeigt, die Du sonst vielleicht nicht
							wahrgenommen hättest
							{!isExpanded && <span className='text-gray-600'>... </span>}
							{/* Hidden or expanded text */}
							{isExpanded && (
								<>
									{/* Hidden part of the text */}. Vermutlich hatte jeder schon
									solche Erlebnisse. Ich wünsche es zumindest jedem! Solche
									Begegnungen hatte ich viele in meinem Leben und ich hatte
									immer ein Gespür dafür, diese Momente zu bemerken. Alle
									Menschen und Momente hier aufzuführen, würde den Rahmen
									sprengen, aber beruflich gesehen sind ein paar wirklich
									wichtig gewesen. Als Jugendliche traf ich das erste mal auf
									meine Zenlehrerin, die als Leib- und Atemtherapeutin auf einem
									Hof inmitten der Natur ihrer Meditation und Arbeit nachging.
									Sie hat in mir damals ein Bild davon entstehen lassen, wie ich
									Ruhe und Ganzheitlichkeit in mein Leben und meine Arbeit
									fließen lassen möchte. Für diese Ganzheitlichkeit habe ich
									neben Meditation und Achtsamkeit ein Studium der
									Physiotherapie abgeschlossen und anschließend den Weg der
									Osteopathie eingeschlagen, zu dem mich mein Babysittervater
									noch vor dem Abitur inspirierte hatte, indem er mir einfach
									ein Fachbuch in die Hand gedrückt hatte. Meine Erfahrungen mit
									Patientinnen brachten mich auf die Idee, für noch mehr Tiefe
									die Psychotherapie zu erlernen, wodurch ich in der
									Heilpraktikerschule dann auf meine Lehrerin für Dialogische
									Körperpsychotherapie stieß. Bei ihr wusste ich sofort, dass
									sie die Herangehensweise unterrichtet, die für mich die
									logische Folge meines bisherigen Weges war. Ich arbeite voller
									Liebe, Ruhe und Neugier sowohl in meiner Praxis als
									Therapeutin, als auch in Schulungen als Dozentin und bin
									gespannt, welchen Wegweisern ich noch begegnen werde und wem
									ich alles eine neue Richtung, Sichtweise oder Tiefe geben
									darf.
								</>
							)}
							{/* Conditional 'mehr zeigen' or 'weniger zeigen' link */}
							<span
								className='leading-6 cursor-pointer text-lightTurquis hover:uppercase'
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
						className='relative min-w-full scale-125 mobile__img lg:-z-10 lg:h-0'
					/>
				</div>
			</section>
			<section id='qualifications' className='max-w-3xl m-8 section__two'>
				<div className='mb-8'>
					<h2 className='mt-10 mb-4 text-2xl font-bold text-center font-titel'>
						Qualifikationen
					</h2>
					<p className='mb-10 font-medium text-center'>
						Neben meiner durchgängigen physiotherapeutischen Arbeit mit
						Schwerpinknten in der Orthopädie und Neurologie kann ich unter
						anderem folgendes nachweisen:
					</p>
					<ul className='flex flex-col gap-6 ml-4 text-left md:ml-12'>
						<li>
							<span>
								<b className='font-bold'>Dialogische Körperpsychotherapie</b>
								bei Nicole Ulsamer 2023
							</span>
						</li>
						<li>
							<span>
								<b className='font-bold'>Dozentin</b>
								an der HPA Norderstedt in den Fächern Bewegungsapparat und
								Psychotherapie
							</span>
						</li>
						<li>
							<span>
								<b className='font-bold'>Dozentin</b>
								für Osteopathische Techniken in der Psychotherapie
							</span>
						</li>
						<li>
							<span>
								<b className='font-bold'>Heilpraktiker für Psychotherapie</b>
								2022
							</span>
						</li>
						<li>
							<span>
								Somatische Emotionale Integration (
								<b className='font-bold'>SEI</b>) bei Dami Charf 2020
							</span>
						</li>
						<li>
							<span>
								<b className='font-bold'>Dozentenassistenz</b>
								bei Cura-Akademie für funktionelle Osteopathie 2017-2019
							</span>
						</li>
						<li>
							<span>
								<b className='font-bold'>Funktionelle Osteopathie</b>
								Abschlussprüfung 2016
							</span>
						</li>
						<li>
							<span>
								<b className='font-bold'>Reflexzonentherapie</b>
								2010
							</span>
						</li>
						<li>
							<span>
								<b className='font-bold'>Bachelor Physiotherapie</b>
								(NL) 2004
							</span>
						</li>
						<li>
							<span>
								Studium der Physiotherapie an der Hogeschool Zuyd 2000-2004
							</span>
						</li>
						<li>
							<span>
								Ausbildung <b className='font-bold'>Energiearbeit</b>
								2000-2003
							</span>
						</li>
						<li>
							<span>
								<b className='font-bold'>Freiwilliges Soziales Jahr</b>
								Fachklinik für Psychiatrie 1999-2000
							</span>
						</li>
						<li>
							<span>
								<b className='font-bold'>Meditationserfahrung</b>
								seit ca. 1997
							</span>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Uebermich;
