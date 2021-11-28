import EmailInput from "../misc/EmailInput";

export default function Top() {
	return (
		<div className="w-full h-auto static">
			<div
				className="w-full h-full bg-primary pb-24
			lg:flex lg:justify-center lg:px-32
			"
			>
				<div
					className="flex justify-center align-start flex-wrap 
				lg:w-3/5 lg:justify-start lg:px-16 lg:flex-col
				
				"
				>
					<div
						className="text-white font-poppins font-bold text-3xl text-center pt-32
					md:text-2xl
					lg:text-left lg:text-4xl lg:pt-48
					xl:text-5xl
					"
					>
						Save Time For <br />
						What&apos;s Important
					</div>
					<div
						className="font-poppins h-auto text-white px-8 py-4 text-center text-sm
						sm:px-32
						md:text-medium
						lg:text-left lg:text-lg lg:px-0 lg:pr-12 lg:py-8 
						"
					>
						auxroad exposes you to the best opportunities and deals on the
						market so you can concetrate on what truely matters
					</div>
					<div
						className="p-4 
					sm:pt-4 sm:pb-8
					md:w-1/2
					lg:px-0 lg:w-11/12
					xl:w-2/3
					2xl:w-1/2 
					"
					>
						<EmailInput
							border="border-2 ring-2 ring-white border-purple-500"
							content="Want to know more and get updates about us?"
							textColor="text-gray-100"
						/>
					</div>
				</div>
				<img
					src="svg/timemanagement.svg"
					className="w-48 mx-auto mt-8 mb-16
					sm:w-64 md:mb-24
					md:w-72
					lg:w-84
					xl:w-96 xl:mt-48
					"
				/>
			</div>
		</div>
	);
}
