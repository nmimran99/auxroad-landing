import Contact from "../../schemas/contact.js";
import dbConnect from "../../utils/dbConnect";

export default async function addContact(req, res) {
	await dbConnect();

	const contact = new Contact({ email: req.body.email });
	const saved = await contact.save();

	return res.status(200).send("success");
}
