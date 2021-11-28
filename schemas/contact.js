import mongoose from "mongoose";
var Schema = mongoose.Schema;

const contactSchema = new Schema(
	{
		email: String,
	},
	{
		timestamps: true,
	}
);

module.exports =
	mongoose.models.Contact || mongoose.model("Contact", contactSchema);
