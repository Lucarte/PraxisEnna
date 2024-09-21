const Impressum = () => {
	return (
		<article className='flex justify-center min-h-screen overflow-hidden lg:pt-10 bg-turquis text-veryDarkBrown'>
			<div className='w-full lg:w-[60rem] px-8 pt-40 mx-auto md:px-28'>
				<h1 className='mb-8 text-3xl font-bold tracking-wider text-center underline font-title'>
					Impressum
				</h1>
				<div className='mt-8'>
					<h2 className='mb-20 text-lg font-bold text-center md:mt-20 md:text-start'>
						Angaben gemäß § 5 TMG
					</h2>
					<div className='mt-4'>
						<p className='-mt-20 text-lg font-medium text-center md:text-start'>
							Verantwortlich für die Inhalte:
						</p>
						<div className='mt-8 text-center md:text-start'>
							<h2 className='text-xl'>Anne Grysar</h2>
							<p className='mt-2'>
								Klaus-Rösner-Ring 29
								<br />
								25474 Hasloh
							</p>
							<p id='formular' className='mt-4'>
								Tel. +49 175 299 1654
							</p>
						</div>
					</div>

					<div className='mt-12'>
						<p className='text-xl font-bold font-title'>
							Gesetzliche Berufsbezeichnung
						</p>
						<p className='mt-2'>
							Heilpraktikerin für Psychotherapie nach Heilpraktikergesetz mit
							Erlaubniserteilung am 19.12.2022
						</p>
					</div>

					<div className='mt-12'>
						<p className='text-xl font-bold font-title'>Aufsichtsbehörde</p>
						<p className='mt-2'>Kreis Pinneberg - Fachdienst Gesundheit</p>
						<p>Kurt-Wagener-Str. 11 25337 Elmshorn</p>
					</div>

					<div className='mt-12'>
						<p className='text-xl font-bold font-title'>
							Verbraucherstreitbeilegung/ Universalschlichtungsstelle
						</p>
						<p className='pb-24 mt-2'>
							Wir sind nicht bereit oder verpflichtet, an
							Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
							teilzunehmen.
						</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Impressum;
