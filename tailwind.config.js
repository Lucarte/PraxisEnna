/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["kaisei-opti", "nunito", "Helvetica", "sans-serif"],
				mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
				title: ["Felt Tip Roman", "sans-serif"],
			},
			colors: {
				inherit: "inherit",
				ringPrimary: "rgb(59 130 246 / .5)",
				darkBrown: "rgb(126 94 69)", // Equivalent to your .bg-darkBrown
				veryDarkBrown: "rgb(65 47 32)", // Equivalent to your .bg-darkBrown
				darkTurquis: "rgb(192 212 214)", // Equivalent to your .bg-darkTurquis
				lightTurquis: "rgb(215 229 231)",
				turquis: "#C0D5D6",
				lightBrown: "rgb(196 168 146)", // Equivalent to your .bg-lightBrown
				green: "rgb(136 152 48)", // Equivalent to your .bg-lightBrown
			},
			backgroundImage: {
				"gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
				"gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
			},
			gradientColorStops: {
				darkBrown: "#7e5e45", // Corresponds to .from-darkBrown
				darkTurquis: "#c0d5d6", // Corresponds to .from-darkTurquis
				lightBrown: "#c4a892", // Corresponds to .to-lightBrown
				lightTurquis: "#d7e6e7", // Corresponds to .to-lightTurquis
			},
			container: {
				center: true,
				padding: "1rem",
				screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1280px",
					"2xl": "1536px",
				},
			},
			width: {
				"4.5rem": "4.5rem",
				"5.5rem": "5.5rem",
				"29rem": "29rem",
				"25p": "25%",
			},
			height: {
				"0.2rem": "0.2rem",
				"8rem": "8rem",
			},
			translate: {
				"-5px": "-5px",
			},
			scale: {
				125: "1.25",
			},
			zIndex: {
				40: "40",
				50: "50",
			},
			margin: {
				"-6": "-1.5rem",
				"1.7rem": "1.7rem",
			},
			borderRadius: {
				lg: "0.5rem",
				md: "0.375rem",
			},
			boxShadow: {
				shadowHeader: "1px 3px 10px rgba(168, 187, 182, 1)",
				shadowMenu: "1px 3px -1px rgba(157, 157, 182, 0.6)",
				shadowSubmenu: "1px 3px 15px rgba(168, 187, 182, 0.6)",
			},
			transitionProperty: {
				opacity: "opacity",
			},
			transitionTimingFunction: {
				custom: "cubic-bezier(0.4, 0, 0.2, 1)",
			},
			transitionDuration: {
				150: "0.15s",
			},
		},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [
		function ({ addBase }) {
			addBase({
				"*": {
					boxSizing: "border-box",
				},
				"*, :before, :after": {
					"--tw-border-spacing-x": "0",
					"--tw-border-spacing-y": "0",
					"--tw-translate-x": "0",
					"--tw-translate-y": "0",
					"--tw-rotate": "0",
					"--tw-skew-x": "0",
					"--tw-skew-y": "0",
					"--tw-scale-x": "1",
					"--tw-scale-y": "1",
					"--tw-ring-color": "rgb(59 130 246 / .5)",
					"--tw-ring-offset-width": "0px",
				},
				html: {
					lineHeight: "1.5",
					tabSize: "4",
					fontFamily: "kaisei-opti, nunito, Helvetica, sans-serif",
				},
				body: {
					margin: "0",
					lineHeight: "inherit",
				},
			});
		},
	],
};
