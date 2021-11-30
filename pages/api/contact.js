import Contact from "../../schemas/contact.js";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "POST":
			try {
				const contact = new Contact({ email: req.body.email });
				const saved = await contact.save();
				res.status(200).json({ success: true });
			} catch (error) {
				res.status(400).json({ success: false });
			}
	}
}
