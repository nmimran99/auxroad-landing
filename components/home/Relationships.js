const rows = [
	{
		icon: "icons/Check.svg",
		bolded: "Follow",
		content:
			"influencial individuals and contributers that can benefit your passage",
	},
	{
		icon: "icons/Send.svg",
		bolded: "Communicate",
		content: "with other students that experience the same challenges as you",
	},
	{
		icon: "icons/Shake.svg",
		bolded: "Collaborate",
		content: "to create fruitful partnerships and meaningful relationships",
	},
	{
		icon: "icons/Check.svg",
		bolded: "Contribute",
		content: "from your knowledge and experience to help other grow",
	},
];

export default function Relationships() {
	return (
		<div className="sm:px-10 md:w-11/12 lg:w-1/2 lg:p-0 md:mx-auto ">
			<div className="grid grid-cols-1 px-10 sm:grid-cols-2 lg:px-10">
				<div className="">
					<div className="text-3xl font-medium py-2">
						We Create Symbiotic Relationships
					</div>
					<div className="text-sm py-2">
						Our platform is designed with emphasis on human connection and
						collaboration. auxroad aims to facilitate the creation of these
						collaborations and make them available to everyone who shares your
						path.
					</div>
				</div>
				<img src="svg/team.svg" className="w-48 mx-auto my-8" />
			</div>
			<div className="grid grid-cols-1 px-10 pb-16 sm:grid-cols-2 place-items-center w-full lg:w-full xl:w-4/5 xl:mx-auto grid-flow-row">
				{rows.map((row, i) => {
					return (
						<div
							key={i}
							className="py-4 border border-gray-300 my-4 rounded-xl mx-auto w-64 h-48"
						>
							<img src={row.icon} className="w-12 mx-auto py-4" />
							<div className="text-center w-3/4 mx-auto py-2 text-sm">
								<b>{row.bolded}</b> {row.content}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
