import { useState } from "react";

export default function EmailInput({ border, content, textColor }) {
	const [email, setEmail] = useState("");

	const handleSend = async () => {
		if (!email) return;
		const res = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify({ email: email }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (res.status === 200) {
			setEmail("");
			document.getElementById("snackbar").classList.remove("hidden");
			setTimeout(() => {
				document.getElementById("snackbar").classList.add("hidden");
			}, 4000);
		}
	};

	return (
		<div className="font-poppins">
			<div className={`py-2 px-4 text-xs ${textColor}`}>{content}</div>
			<div
				className={`flex justify-between align-center bg-white py-1 pr-1 pl-8 rounded-3xl  ${border}`}
			>
				<input
					className="w-full outline-none text-sm"
					placeholder="name@email.com"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<button
					onClick={handleSend}
					className="whitespace-nowrap m-auto text-white text-sm bg-primary rounded-3xl px-4 py-1.5 m-0"
				>
					Get Started
				</button>
			</div>
			<div
				id="snackbar"
				className="hidden fixed z-50 bottom-4 right-4 bg-primary text-white px-6 py-2 rounded-lg animate-bounce"
			>
				You were added successfully!
			</div>
		</div>
	);
}
