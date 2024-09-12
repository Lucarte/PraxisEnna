"use client";

import { useState } from "react";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "/src/assets/logo_foto.svg";

const ueberMich = [
	{
		name: "Kennst du das",
		href: "#",
	},
	{
		name: "Qualifikationen",
		href: "#",
	},
];
const angebot = [
	{
		name: "Dialogische Körpertherapie",
		href: "#",
	},
	{
		name: "Hypnose",
		href: "#",
	},
	{
		name: "FAQ",
		href: "#",
	},
];
const mehr = [
	{
		name: "Kontakt",
		href: "#",
	},
	{
		name: "Anfahrt",
		href: "#",
	},
	{
		name: "Kosten",
		href: "#",
	},
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='bg-darkTurquis fixed top-0 w-full shadow-shadowHeader'>
			<nav
				aria-label='Global'
				className='mx-auto flex max-w-[120rem] items-center justify-between px-8 py-6 lg:px-10'>
				{/* Logo and Title for large screens */}
				<div className='flex items-center'>
					{/* Logo */}
					<a href='#' className='-m-1.5 p-1.5'>
						<span className='sr-only'>Your Company</span>
						<img alt='' src={logo} className='h-auto w-12 md:w-[3.6rem]' />
					</a>
					{/* Title for large screens */}
					<h1 className='hidden lg:block text-lg font-sans text-darkBrown font-light ml-10 text-center'>
						PRAXIS
						<br />
						URVERTRAUEN
					</h1>
				</div>

				{/* Title for small screens */}
				<h1 className='block lg:hidden text-lg font-sans mr-[17px] text-darkBrown font-light text-center w-full'>
					PRAXIS
					<br />
					URVERTRAUEN
				</h1>
				<div className='flex lg:hidden'>
					<button
						type='button'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className='inline-flex items-center justify-center rounded-md p-2.5 border-none bg-darkTurquis'>
						<span className='sr-only'>Open main menu</span>
						<div className='flex flex-col justify-center items-center space-y-[4px] relative'>
							{/* Left Eye */}
							<div
								className={`h-[.44rem] w-[.44rem] bg-lightBrown rounded-full transition-transform duration-500 ease-in-out
                                        ${mobileMenuOpen ? "translate-x-[-8px] translate-y-[5px]" : ""}`}></div>
							{/* Middle Dot (Nose) */}
							<div
								className={`h-[.44rem] w-[.44rem] bg-lightBrown rounded-full transition-transform ease-in-out duration-500
                                        ${mobileMenuOpen ? "translate-y-[10px]" : "translate-y-0"}`}></div>
							{/* Mouth */}
							<svg
								className={`absolute top-[1rem] w-[2rem] h-[1rem] transform ${mobileMenuOpen ? "scale-x-100 scale-y-100" : "scale-x-0 scale-y-0"}`}
								viewBox='0 0 100 50'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								style={{
									stroke: "rgb(126, 94, 69)",
									strokeWidth: "10px",
									strokeLinecap: "round",
									strokeLinejoin: "round",
								}}>
								<path
									d='M 10 30 Q 50 60, 90 30'
									stroke='rgb(126, 94, 69)'
									fill='none'
								/>
							</svg>
							{/* Right Eye */}
							<div
								className={`h-[.44rem] w-[.44rem] bg-lightBrown rounded-full transition-transform ease-in-out duration-500
                                        ${mobileMenuOpen ? "translate-x-[8px] -translate-y-[.4rem]" : ""}`}></div>
						</div>
					</button>
				</div>
				<PopoverGroup className='hidden lg:flex lg:gap-x-8 xl-gap-12'>
					{/* Home */}
					<Popover className='relative'>
						<PopoverButton className='active:border-1 border-none outline-green outline-1 flex w-28 bg-lightTurquis items-center hover:cursor-pointer hover:bg-white text-sm font-light leading-6 text-veryDarkBrown shadow-shadowSubmenu rounded-md pl-[2.3rem] py-[.3rem]'>
							Home
						</PopoverButton>
					</Popover>
					{/* Über mich */}
					<Popover className='relative'>
						<PopoverButton className='flex w-28 outline-green outline-1 pl-4 border-none bg-lightTurquis items-center gap-x-1 hover:cursor-pointer hover:bg-white text-sm font-light leading-6 text-veryDarkBrown shadow-shadowSubmenu rounded-md py-[.3rem]'>
							Über mich
							<ChevronDownIcon
								aria-hidden='true'
								className='h-5 w-5 flex-none text-veryDarkBrown'
							/>
						</PopoverButton>
						<PopoverPanel
							transition
							className='absolute -left-[.9rem] mt-3 top-full z-10 w-30 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'>
							<div className='p-4'>
								{ueberMich.map((item) => (
									<div
										key={item.name}
										className='group relative flex items-center gap-x-6 rounded-lg p-2 text-center text-sm leading-6'>
										<div className='flex-auto'>
											<a
												href={item.href}
												className='block text-center no-underline bg-none text-veryDarkBrown hover:text-green'>
												{item.name}
											</a>
										</div>
									</div>
								))}
							</div>
						</PopoverPanel>
					</Popover>
					{/* Angebot */}
					<Popover className='relative'>
						<PopoverButton className='flex bg-lightTurquis outline-green outline-1 hover:cursor-pointer hover:bg-white w-28 border-none items-center gap-x-1 text-sm font-light leading-6 text-veryDarkBrown shadow-shadowSubmenu rounded-md pl-5 py-[.3rem]'>
							Angebot
							<ChevronDownIcon
								aria-hidden='true'
								className='h-5 w-5 flex-none text-veryDarkBrown'
							/>
						</PopoverButton>
						<PopoverPanel
							transition
							className='absolute -left-[.9rem] w-30 top-full z-10 mt-3 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'>
							<div className='p-4'>
								{angebot.map((item) => (
									<div
										key={item.name}
										className='group relative flex items-center rounded-lg p-2 text-center text-sm leading-6'>
										<div className='flex-auto'>
											<a
												href={item.href}
												className='block no-underline text-veryDarkBrown hover:text-green'>
												{item.name}
												<span className='absolute inset-0' />
											</a>
										</div>
									</div>
								))}
							</div>
						</PopoverPanel>
					</Popover>
					{/* Mehr */}
					<Popover className='relative'>
						<PopoverButton className='outline-green outline-1 flex border-none w-28 hover:cursor-pointer hover:bg-white bg-lightTurquis items-center gap-x-1 text-sm font-light leading-6 text-veryDarkBrown shadow-shadowSubmenu rounded-md pl-8 py-[.3rem]'>
							Mehr
							<ChevronDownIcon
								aria-hidden='true'
								className='h-5 w-5 flex-none  text-veryDarkBrown'
							/>
						</PopoverButton>
						<PopoverPanel
							transition
							className='absolute -left-[.9rem] w-30 top-full z-10 mt-3 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'>
							<div className='py-4 px-[2.3rem]'>
								{mehr.map((item) => (
									<div
										key={item.name}
										className='group relative flex items-center rounded-lg p-2 text-center text-sm leading-6'>
										<div className='flex-auto'>
											<a
												href={item.href}
												className='block no-underline text-veryDarkBrown hover:text-green'>
												{item.name}
												<span className='absolute inset-0' />
											</a>
										</div>
									</div>
								))}
							</div>
						</PopoverPanel>
					</Popover>
				</PopoverGroup>
				<div className='hidden lg:flex lg:justify-end'>
					<a
						href='../src/pages/mehr.html'
						className='font-bold text-[.7rem] outline-1 outline-veryDarkBrown tracking-wide text-center py-2 px-4 rounded-md leading-2 text-stone-700 bg-green no-underline'>
						TERMIN
						<br />
						VEREINBAREN
						<span aria-hidden='true'></span>
					</a>
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
				className='lg:hidden'>
				{/* Background overlay in web sizes */}
				<div
					className='hidden md:block fixed inset-0 z-10 bg-lightBrown/30'
					aria-hidden='true'
				/>

				{/* Opened Menu */}
				<DialogPanel
					className={`fixed top-0 right-0 z-20 w-full max-w-md h-[75%] rounded-b-3xl bg-darkBrown px-6 py-6 transition-transform duration-500 transform ${
						mobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}>
					<div className='flex items-center justify-between'>
						<a href='#' className='outline-1 outline-darkBrown -m-1.5 p-1.5'>
							<span className='sr-only'>Your Company</span>
							<img alt='' src={logo} className='h-20 w-auto' />
						</a>
						<button
							type='button'
							onClick={() => setMobileMenuOpen(false)}
							className='outline-1 outline-darkBrown mr-4 -mt-12 bg-darkBrown border-none text-darkBrown relative group'>
							<span className='sr-only'>Close menu</span>

							<div className='flex flex-col justify-center items-center space-y-[4px] relative group-hover:opacity-0 transition-opacity duration-500'>
								{/* Left Eye */}
								<div
									className={`h-[.35rem] w-[.35rem] bg-lightBrown rounded-full transition-transform duration-500 ease-in-out
                                        ${mobileMenuOpen ? "translate-x-[-6px] translate-y-[5px]" : ""}`}></div>

								{/* Middle Dot (Nose) */}
								<div
									className={`h-[.35rem] w-[.35rem] bg-lightBrown rounded-full transition-transform ease-in-out duration-500
                                        ${mobileMenuOpen ? "translate-y-[4px]" : "translate-y-0"}`}></div>

								{/* Mouth */}
								<svg
									className={`absolute top-[.8rem] w-[1.7rem] h-[1rem] transform ${mobileMenuOpen ? "scale-x-100 scale-y-100" : "scale-x-0 scale-y-0"}`}
									viewBox='0 0 100 50'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									style={{
										stroke: "rgb(126, 94, 69)",
										strokeWidth: "10px",
										strokeLinecap: "round",
										strokeLinejoin: "round",
									}}>
									<path
										d='M 10 30 Q 50 60, 90 30'
										stroke='rgb(196 168 146)'
										fill='none'
									/>
								</svg>

								{/* Right Eye */}
								<div
									className={`h-[.35rem] w-[.35rem] bg-lightBrown rounded-full transition-transform ease-in-out duration-500
                                        ${mobileMenuOpen ? "translate-x-[6px] -translate-y-[.9rem]" : ""}`}></div>
							</div>

							{/* Imaginary X (appears on hover) */}
							<div className='absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
								{/* First diagonal line */}
								<div className='absolute w-[2rem] h-[.2rem] bg-lightBrown rotate-45'></div>
								{/* Second diagonal line */}
								<div className='absolute w-[2rem] h-[.2rem] bg-lightBrown -rotate-45'></div>
							</div>
						</button>
					</div>
					<div className='flow-root mt-10'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								<a
									href='#'
									className='outline-1 outline-darkBrown no-underline bg-lightBrown group flex w-1/2 items-center pl-3.5 rounded-lg py-2 border-none text-base leading-7 text-veryDarkBrown hover:text-lightBrown hover:bg-darkBrown'>
									Home
								</a>
								<Disclosure as='div' className=''>
									<DisclosureButton className='outline-1 outline-darkBrown bg-lightBrown group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 border-none text-base leading-7 text-veryDarkBrown hover:text-lightBrown hover:bg-darkBrown'>
										Über Mich
										<ChevronDownIcon
											aria-hidden='true'
											className='h-5 w-5 flex-none group-data-[open]:rotate-180'
										/>
									</DisclosureButton>
									<DisclosurePanel className='mt-2'>
										{[...ueberMich].map((item) => (
											<DisclosureButton
												key={item.name}
												as='a'
												href={item.href}
												className='outline-1 outline-darkBrown block rounded-lg pl-6 pr-3 text-sm font-light leading-7 text-lightBrown no-underline hover:italic hover:text-green'>
												• {item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<Disclosure as='div' className=''>
									<DisclosureButton className='outline-1 outline-darkBrown bg-lightBrown group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 border-none text-base leading-7 text-veryDarkBrown hover:text-lightBrown hover:bg-darkBrown'>
										Angebot
										<ChevronDownIcon
											aria-hidden='true'
											className='h-5 w-5 flex-none group-data-[open]:rotate-180'
										/>
									</DisclosureButton>
									<DisclosurePanel className='mt-2'>
										{[...angebot].map((item) => (
											<DisclosureButton
												key={item.name}
												as='a'
												href={item.href}
												className='outline-1 outline-darkBrown block rounded-lg pl-6 pr-3 text-sm font-light leading-7 text-lightBrown no-underline hover:italic hover:text-green'>
												• {item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<Disclosure as='div' className=''>
									<DisclosureButton className='outline-1 outline-darkBrown bg-lightBrown group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 border-none text-base leading-7 text-veryDarkBrown hover:text-lightBrown hover:bg-darkBrown'>
										Mehr
										<ChevronDownIcon
											aria-hidden='true'
											className='h-5 w-5 flex-none group-data-[open]:rotate-180'
										/>
									</DisclosureButton>
									<DisclosurePanel className='mt-2'>
										{[...mehr].map((item) => (
											<DisclosureButton
												key={item.name}
												as='a'
												href={item.href}
												className='outline-1 outline-darkBrown block rounded-lg pl-6 pr-3 text-sm font-light leading-7 text-lightBrown no-underline hover:italic hover:text-green'>
												• {item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								{/* CTA Btn */}
								<div className='flex'>
									<a
										href='../src/pages/mehr.html'
										className='font-medium w-full outline-1 outline-darkBrown tracking-wide text-center py-2 px-4 rounded-md leading-2 text-veryDarkBrown bg-green no-underline hover:text-green hover:bg-white hover:uppercase'>
										Termin vereinbaren
										<span aria-hidden='true'></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
