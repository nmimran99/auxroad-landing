const points = [
	{
		icon: "icons/Broadcast.svg",
		content:
			"internal communication system that allowes students from various contexts connect with each other.",
		tags: [
			"Messaging",
			"Tutoring",
			"Knowledge Sharing",
			"Scheduling and Events",
		],
	},
	{
		icon: "icons/Path.svg",
		content:
			"Guidance and counceling on different subjects related to the studential experience, both domestic and foreign.",
		tags: [
			"Immigration",
			"Finance",
			"Housing",
			"Work Opportinities",
			"Internships",
		],
	},
	{
		icon: "icons/Tote.svg",
		content:
			"Increased exposure to deals, promotions and opportunities relevant to students.",
		tags: [
			"Food",
			"Discounts",
			"Internet and Mobile",
			"Transportation",
			"Coupons",
		],
	},
];

export default function Institutions() {
	const handleCopy = async () => {
		await navigator.clipboard.writeText("workwithus@auxroad.com");
		document.getElementById("snackbar").classList.remove("hidden");
		setTimeout(() => {
			document.getElementById("snackbar").classList.add("hidden");
		}, 4000);
	};

	return (
		<div className="">
			<div className="mt-16 flex flex-wrap md:mt-24 md:w-3/4 md:mx-auto lg:w-1/2">
				<div className="w-full p-4">
					<div className="text-2xl font-medium py-1">
						Provide the best support available for your students
					</div>
					<div className="py-1 text-sm">
						auxroad provides a platform that assists students in the process of
						assimilation into the studential life.
					</div>
					<div className="py-1 text-sm">
						The education space is an evergrowing insdutry. As an institution,
						the main interests are to create better branding and growing the
						businness&apos; engagement. Money and manpower are to be invested in
						order to increase reach to appealing services for students and in
						turn, grow interest among future students.
					</div>
					<div className="py-2 text-base font-medium">
						auxroad offers access to various services and mediums to achieve
						that goal.
					</div>
					<div className="px-0 my-4 md:px-0">
						<div className="py-1 text-xl font-medium">Our platform offers:</div>
						{points.map((p, i) => {
							return (
								<div key={i} className="my-2">
									<div className="flex  py-1">
										<img src={p.icon} className="mx-2 w-7"></img>
										<div className="mx-2 text-sm my-auto">{p.content}</div>
									</div>
									<div className="flex flex-wrap">
										{p.tags.map((pt, i) => {
											return (
												<div
													key={i}
													className="bg-gray-200 rounded-full px-3 py-1 text-xs mx-1 my-1"
												>
													{pt}
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="py-6 px-8 border border-gray-300 rounded-xl mx-4">
					<div>
						<div className="text-xl font-medium p-1">Let’s Work Together</div>
						<div className="text-sm p-1">
							Email us at <u>workwithus@auxroad.com</u> with your name, the
							represented intitution and preferred communication method (email
							or phone) .
						</div>
					</div>
					<button
						onClick={handleCopy}
						className="rounded-md shadow-lg my-3 flex border border-gray-300"
					>
						<img
							src="icons/Copy.svg"
							className="bg-primary py-2 px-3 rounded-l-md w-10"
						/>
						<div className="text-black text-sm text-center my-auto mx-4">
							workwithus@auxroad.com
						</div>
					</button>
				</div>
			</div>

			<img src="svg/building.svg" className="w-64 mx-auto my-12 md:w-72" />
			<div
				id="snackbar"
				className="hidden fixed z-50 bottom-4 right-4 bg-primary text-white px-6 py-2 rounded-lg animate-bounce"
			>
				Email copied to clipboard
			</div>
		</div>
	);
}
