import EmailInput from "../misc/EmailInput";

const points = [
	{
		icon: "icons/Link.svg",
		content: "Connect with your peers based on institution and class",
	},
	{
		icon: "icons/Compass.svg",
		content: "First steps assistance and guidance",
	},
	{
		icon: "icons/ShoppingCart.svg",
		content: "Shopping and grocery deals",
	},
	{
		icon: "icons/Briefcase.svg",
		content: "Find student positions",
	},
	{
		icon: "icons/Train.svg",
		content: "Transportation solutions",
	},
];

export default function PointsSummary() {
	return (
		<div
			className="mx-auto 
        	md:grid md:grid-cols-2 md:w-1/2
        "
		>
			<div className="">
				{points.map((point, i) => {
					return (
						<div
							key={i}
							className="h-8 flex align-center justify-center my-2 px-1"
						>
							<img src={point.icon} className="w-6 mx-4" />
							<div className="text-sm text-gray-700 w-3/4 md:w-full my-auto">
								{point.content}
							</div>
						</div>
					);
				})}
			</div>
			<img src="svg/collaboration.svg" className="w-64 mx-auto my-8" />
			<div className="py-4 px-6 lg:p-0 w-full">
				<EmailInput
					border="border-2 ring-2 ring-white border-gray-400"
					content="Get updates and news about us"
					textColor="text-gray-800"
				/>
			</div>
		</div>
	);
}
