import Link from "next/link";
const tabs = [
	{
		href: "/",
		label: "Students",
		icon: "icons/Student.svg",
	},
	{
		href: "/institutions",
		label: "Institutions",
		icon: "icons/Bank.svg",
	},
	{
		href: "/partners",
		label: "Partners",
		icon: "icons/ShareNetwork.svg",
	},
	{
		href: "/contact",
		label: "Contact us",
		icon: "icons/Envelope.svg",
	},
];

export default function MenuItems({ divClass, handleClick }) {
	return (
		<div className={divClass}>
			{tabs.map((tab, i) => (
				<Link href={tab.href} key={i}>
					<div
						className="flex align-center py-3 md:py-4 md:px-4 cursor-pointer border-b border-gray-300 md:border-none"
						onClick={() => handleClick(tab.href)}
					>
						<div
							className="flex align-center justify-center
						 p-2 rounded-full md:hidden"
						>
							<img src={tab.icon} className="w-6" />
						</div>
						<div className="my-auto px-4 text-white font-thin">{tab.label}</div>
					</div>
				</Link>
			))}
		</div>
	);
}
