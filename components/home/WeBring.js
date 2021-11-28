const rows = [
	{
		header: "Banking",
		content:
			"Finding the best bank to support your growth as a student is not an easy task. \nWe are here to help with finding the most suitalbe plan according to the student needs and goals.",
		image: "svg/banking.svg",
	},
	{
		header: "News and Guidance",
		content:
			"Follow community leaders, institutions and service providers to get get access to news, guidance and content. \nGet notified on changes related to your learning institution straight to your phone.",
		image: "svg/posts.svg",
	},
	{
		header: "Transportation",
		content:
			"Moving into an apartment? \nGoing on a trip? \nConnect with local transportation and vehicle providers to satisfy your transportation needs. ",
		image: "svg/car.svg",
	},
	{
		header: "Groceries and Food services",
		content:
			"Enjoy coupons and discounts on groceries, food delivery services and local take out. Recieve gifts and promotions for various vendors around your are.",
		image: "svg/shopping.svg",
	},
	{
		header: "Connect with your peers",
		content:
			"We connect you to your peers from your class, institution, area, space and interests. \nShare knowledge and experiences with those who share your journey.",
		image: "svg/connecting.svg",
	},
];

export default function WeBring() {
	return (
		<div className="px-10 md:w-5/6 lg:w-1/2 md:mx-auto">
			<div className="text-3xl font-medium text-gray-800">
				What do we bring to the table?
			</div>
			<div className="text-gray-700 text-base my-4 xl:pr-32">
				Our main mission is to ease-in the student’s process of assimilation
				into the local studential atmosphere. We centrelize access to deals,
				benefit, support and information in different areas.
			</div>
			<div>
				{rows.map((row, i) => {
					return (
						<div key={i} className="py-6 md:grid md:grid-cols-2">
							<div>
								<div className={`text-xl font-medium text-gray-700 py-3`}>
									{row.header}
								</div>
								<div className="text-sm text-gray-700">{row.content}</div>
							</div>
							<img src={row.image} className={`py-8 w-48 mx-auto `} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
