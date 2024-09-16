const Home = () => {
	return (
		<article className='font-sans text-base font-light text-veryDarkBrown flex justify-center h-screen bg-cover bg-fixed bg-center bg-[url("/src/assets/tree.png")]'>
			<div className='md:mt-16 mt-4'>
				<div>
					<div className='bg-[#ffffffbd] rounded-2xl p-6 leading-5 mt-40 text-center flex flex-col justify-center text-[#412f20] gap-4 md:mt-56 md:p-12'>
						<div className='leading-6 font-bold'>
							<h2 className='text-xl'>
								PRIVATPRAXIS
								<br />
								FÜR PSYCHOTHERAPIE
							</h2>
							<span className='w-40 h-1 my-4 mx-auto bg-[#C4A892] rounded-sm block md:w-56'></span>
						</div>
						<div className='text-3xl -mt-4 font-bold font-title '>
							Anne Grysar
						</div>
						<div className='intro-text'>
							Heilpraktikerin für Psychotherapie
							<br />
							Mitglied im Verband für Osteopathie
							<br />
							B.A. Physiotherapie
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Home;
