import { useState } from "react";
import fuss from "/src/assets/fuss.png";
// Define the type for each FAQ item
type FAQ = {
	question: string;
	answer: string;
};

// Define the props for the FAQSection component
type FAQSectionProps = {
	faqs: FAQ[];
};

// The FAQ data
const faqsData: FAQ[] = [
	{
		question:
			"Wie lange dauert ein Termin und welche Kosten kommen auf mich zu?",
		answer:
			"Ein Termin von ca. 50 Minuten berechne ich mit 100€. Wenn wir länger brauchen sollten für eine Behandlung, kostet jede weitere halbe Stunde 50€.",
	},
	{
		question: "Übernimmt die Krankenkasse die Kosten?",
		answer:
			"In den meisten Fällen nicht, da ich eine Privatpraxis habe. Es gibt aber immer die Möglichkeit, bei der Kasse nachzufragen, ob sie eine Ausnahme genehmigen, wenn man in den Kassenpraxen keinen Termin bekommen hat. Bei Privatkassen ist es auch immer ratsam, vorher abzuklären, welche Kosten übernommen werden und was man selber übernehmen muss.",
	},
	{
		question: "Was passiert bei einem Termin?",
		answer:
			"Wir beginnen immer mit einem Gespräch, um aktuelle Themen und Entwicklungen zu erheben. Danach machen wir gewöhnlich eine Körperarbeit zu Deinem Thema. Was genau das ist, kann ich vorher nie sagen, da jeder Tag und jedes Problem eine andere Herangehensweise benötigt. Ich arbeite fast immer mit Körperkontakt, da das wichtig ist für Dein Nervensystem. Wenn Du durch besondere Erfahrungen keinen Körperkontakt möchtest, ist es Ziel der Therapie, das wieder zuzulassen.",
	},
	{
		question: "Muss ich mich in der Therapie entkleiden?",
		answer:
			"Nicht unbedingt. Für manche Techniken wie z.B. Massagen ist direkter Hautkontakt wünschenswert. Wir können das aber gerne besprechen, wenn es für Dich ein Problem sein sollte.",
	},
	{
		question: "Was ist, wenn ich Angst habe vor der Therapie?",
		answer:
			"Angst ist immer erst mal etwas Gutes und wird von mir absolut ernst genommen. Auch Angst in Übermaß hat seinen Grund und ich helfe Dir gerne, dich so zu regulieren, dass du Mut und Vertrauen gewinnst, Deiner Angst in die Augen zu schauen. Du kannst mich gerne erst mal nur anrufen und wir überlegen gemeinsam, wie wir vorgehen.",
	},
	{
		question:
			"Was ist der Unterschied zu Gesprächstherapie oder Verhaltenstherapie?",
		answer:
			"Gespräche und bewusste Verhaltensänderungen laufen auf kognitiver Ebene ab und werden nur selten in emotionale oder gar körperliche Ebenen integriert. In der tiefenpsychologischen Körperpsychotherapie werden Gespräche und Tiefenanalyse in die Körperebene integriert. Dafür wird mit dem Körper gearbeitet in Form von Massagen, Bewegungen, Atemtechniken und anderem.",
	},
];

// FAQ Section component with styling
const FAQSection = ({ faqs }: FAQSectionProps) => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	// Function to toggle the FAQ expansion
	const toggleFAQ = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<div className='faq-section'>
			{faqs.map((faq, index) => (
				<div key={index} className='my-2 faq-item'>
					<div
						onClick={() => toggleFAQ(index)}
						className='w-full p-2 text-left transition faq-question hover:text-lightBrown focus:outline-none focus:ring focus:ring-lightBrown hover:cursor-pointer'>
						<span className='text-lg font-bold lg:text-[18px] text-darkBrown'>
							{faq.question}
						</span>
					</div>
					<div
						className={`faq-answer overflow-hidden transition-max-height duration-300 ease-in-out ${expandedIndex === index ? "max-h-96" : "max-h-0"}`}>
						<div className='p-4 pl-2 -mt-8'>
							<p className='text-darkBrown lg:text-lg'>{faq.answer}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

// Combined component with FAQ section and additional styling
const FAQ = () => {
	return (
		<section
			id='FAQ'
			className='flex-row w-screen bg-gradient-to-r from-darkTurquis to-lightTurquis lg:flex'>
			<div className='hidden lg:flex relative items-center bg-darkBrown w-[25%] xl:w-[30%] min-[1700px]:w-[20%]'>
				<img
					src={fuss}
					className='bg-no-repeat bg-cover absolute -right-16 max-w-[250px] xl:max-w-[350px]'
					alt='Picture of a hand of a mother maybe, holding a barefoot of a baby'
				/>
			</div>
			<div className='pt-16 pb-20 md:px-10 lg:py-0 lg:mt-[6%] lg:mb-[9%] lg:h-full lg:w-[75%] xl:pt-0 xl:mx-10 xl:px-16 xl:w-[70%] min-[1700px]:w-[80%] '>
				<div className='flex flex-col items-center mb-6 font-bold text-darkBrown font-title 2xl:mb-16'>
					<h2 className='hidden lg:flex mb-6 lg:text-[23px] xl:text-2xl'>
						F A Q
						<span className='absolute h-1 mt-10 ml-5 rounded-lg w-14 bg-lightBrown'></span>
					</h2>
				</div>
				<h2 className='mb-6 -mt-6 text-2xl font-bold text-center font-title text-darkBrown lg:hidden'>
					F A Q
				</h2>
				<div className='mx-16 leading-8 text-left text-darkBrown lg:mx-0 lg:px-30 lg:pt-8 lg:text-xl xl:px-40'>
					<FAQSection faqs={faqsData} />
				</div>
			</div>
		</section>
	);
};

export default FAQ;
