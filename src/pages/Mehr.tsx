const Mehr = () => {
	return (
		// CONTACT htmlForM
		<article className='flex flex-col py-24 overflow-x-hidden leading-8 bg-darkTurquis lg:bg-lightBrown px-auto'>
			<section className='lg:flex lg:flex-row-reverse lg:bg-darkTurquis lg:w-full xl:24 2xl:pl-32 2xl:-pr-24 lg:justify-center lg:items-center'>
				<div className='w-full bg-[url("/src/assets/hand.png")] bg-no-repeat bg-cover text-darkBrown lg:bg-darkTurquis lg:bg-none lg:flex lg:justify-center items-center 2xl:-pr-24'>
					<div className='flex flex-col gap-10 px-12 pt-4 pb-12 text-center lg:-mt-24'>
						<div className='flex flex-col items-start mx-0 mt-12 mb-8 bold text-veryDarkBrown lg:opacity-0'>
							<h2 className='text-[18px]'>MEHR...</h2>
							<span className='block h-1 -mt-3 mr-0 mb-0 ml-[1.3rem] rounded-md w-16 bg-turquis'></span>
						</div>
						<h2 className='-mt-8 -pb-20 font-title text-[1.6rem] text-center lg:mr-10'>
							Kontakt
						</h2>
						<span className='none lg:block lg:w-[5.5rem] lg:h-[4.5px] lg:bg-lightBrown lg:rounded-md lg:-mt-12 lg:mb-28 lg:ml-20'></span>
						<p className='-mt-20'>
							Termine gerne telefonisch oder
							<br />
							per Kontaktformular
						</p>
						<div className='-mt-4 font-light'>
							<h2 className='-mt-4 mb-8 lg:mt-4 text-[1.3rem] font-medium tracking-wider'>
								Praxis Urvertrauen
							</h2>
							<p className='-mt-8 lg:-mt-4'>
								Klaus-Rösner-Ring 29
								<br />
								25474 Hasloh
							</p>
							<p id='form' className='-mt-4'>
								Tel. +49 175 299 1654
							</p>
						</div>
					</div>
				</div>
				<div className='flex justify-center lg:mt-12 lg:ml-16 bg-turquis lg:w-1/2'>
					<div className='custom-mdhtmlForm-margin'>
						<form
							className='text-[1rem] flex flex-col gap-4 p-8 mx-0 mt-0 mb-20 rounded-[10px] shadow-shadowhtmlFormular text-darkBrown lg:py-8 lg:px-12'
							id='register-htmlForm'
							action='/praxis-urvertrauen/php/sendMail.php'
							method='post'>
							{/* <!-- <htmlForm id="register-htmlForm" action="../../src/htmlFormValidation.php" method="post"> --> */}
							<h2 className='font-title mb-4 text-[1.6rem] text-center lg:tracking-wider'>
								Kontaktformular
							</h2>
							<div className='flex flex-col gap-[.2rem]'>
								<label
									className='font-medium text-darkBrown'
									id='anrede-label'
									htmlFor='anrede'
									aria-describedby='nameHint'>
									Anrede:
								</label>
								<select
									className='text-[1rem] border-solid border-[2px] border-darkBrown rounded-md p-[.2rem] min-w-[500px]-p-[.4rem] min-w-[500px]-[12rem]'
									required
									id='anrede'
									name='anrede'
									data-check='anrede'>
									<option value=''>Bitte wählen</option>
									<option value='child'>Kind</option>
									<option value='female'>Frau</option>
									<option value='divers'>Divers</option>
									<option value='male'>Herr</option>
								</select>
								<p id='anredeHint' className='hidden mt-[.3rem]'>
									Wahl erhtmlForderlich!
								</p>
							</div>
							<div className='text-[1rem]'>
								<label className='font-medium text-darkBrown' htmlFor='name'>
									Name
								</label>
								<input
									required
									id='name'
									name='name'
									type='text'
									className='text-[#889830] text-[1rem] rounded-lg leading-none border-2 border-[#7E5E45] focus:border-white transition-all duration-300 p-2 w-full outline-none'
									placeholder='Name'
								/>
							</div>
							<div className='text-[1rem]'>
								<label className='font-medium text-darkBrown' htmlFor='email'>
									E-Mail
								</label>
								<input
									required
									id='email'
									name='email'
									type='email'
									className='text-[#889830] rounded-lg text-[1rem] leading-none border-2 border-[#7E5E45] focus:border-white transition-all duration-300 p-2 w-full outline-none'
									placeholder='E-Mail'
								/>
							</div>
							<div>
								<label className='font-medium text-darkBrown' htmlFor='message'>
									Nachricht
								</label>
								<textarea
									required
									id='message'
									name='message'
									className='text-[#889830] text-[1rem] rounded-lg leading-none border-2 border-[#7E5E45] focus:border-white transition-all duration-300 p-2 w-full outline-none'
									placeholder='Nachricht'></textarea>
							</div>
							<input
								type='submit'
								value='SUBMIT'
								className='hover:bg-[#412F20] w-full bg-[#7E5E45] rounded-md border-0 cursor-pointer text-white text-base p-2 pb-[10px] transition-all duration-300 mt-4'
							/>
						</form>
					</div>
				</div>
			</section>

			{/* DIRECTIONS */}
			<section
				id='anfahrt'
				className='bg-gradient-to-r from-[#C4A892] to-[#c09575] text-[#634c39] py-16 lg:py-32 flex flex-col lg:flex-row lg:justify-center lg:gap-[13rem] text-center'>
				<div className='flex flex-col items-center gap-6 lg:items-center'>
					<h2 className='font-title text-[1.6rem] -mb-4'>Anfahrt</h2>
					<span className='block w-[5.2rem] ml-10 h-[0.2rem] bg-[#C0D5D6] rounded-md lg:mb-10'></span>
					<p className='-mt-2 -mb-4'>
						Klaus-Rösner-Ring 29
						<br />
						25474 Hasloh
					</p>
					<p className='-mb-4 italic'>die nächsten Haltestellen sind:</p>
					<div className='flex flex-col gap-2'>
						<h2 className='-mb-4 font-bold'>Bus 395</h2>
						<p className='-mb-4'>Bahnhofstraße Hasloh</p>
					</div>
					<div className='flex flex-col'>
						<h2 className='-mb-2 font-bold'>AKN</h2>
						<p>Hasloh</p>
					</div>
				</div>

				<div className='my-auto'>
					<iframe
						className='border-8 border-lightBrown rounded-lg w-[22rem] h-[17rem] my-12 lg:w-[30rem] lg:h-[20rem]'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.5562279461806!2d9.917735577724319!3d53.690534172391146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b229c92a475a51%3A0xb7accde64336bf03!2sKlaus-R%C3%B6sner-Ring%2029%2C%2025474%20Hasloh!5e0!3m2!1sde!2sde!4v1684471917083!5m2!1sde!2sde'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</div>
			</section>

			{/* COSTS */}
			<section
				id='kosten'
				className='lg:text-lg xl:text-xl kosten flex flex-col items-center text-center text-[#7e5e45] bg-[#C0D5D6] py-16 px-10 gap-8 bg-gradient-to-b from-[#C0D5D6] to-[#D7E6E7] md:py-32 md:px-32 md:gap-8'>
				<h2 className='kosten__titel font-title text-[1.6rem] md:mb-12 mr-4 relative tracking-wider'>
					Kosten
					<span className='absolute block w-20 h-1 bg-[#c4a892] rounded-md mt-3 ml-6'></span>
				</h2>
				<p className='-mb-6'>Pro Termin ca. 50 Min. | 100€</p>
				<p>
					Jede weitere
					<b className='pl-2'>halbe Stunde</b>
					<br className='md:hidden' />
					im gleichem Termin | 50€
				</p>
				<p className='-mt-2 italic text-[0.98rem]'>
					Bitte beachte, dass Urvertrauen eine Privatpraxis ist und die Kosten
					selber zu tragen sind. Du kannst im Vorfeld bei Deiner Krankenkasse
					anfragen, ob Kosten erstattet werden.
				</p>
			</section>
		</article>
	);
};

export default Mehr;
