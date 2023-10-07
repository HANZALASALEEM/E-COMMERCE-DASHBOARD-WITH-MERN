const express = require("express");
require("./db/config");
const User = require("./db/models/User");
const app = express();
// const connectDB = async () => {
// 	try {
// 		await mongoose.connect("mongodb://127.0.0.1:27017");
// 		const schema = new mongoose.Schema({});
// 		const collection = mongoose.model("new", schema);
// 		const data = await collection.find();
// 		console.warn(data);
// 	} catch (error) {
// 		console.error("Error connecting to MongoDB:", error);
// 	}
// };
// connectDB();

app.post("/register", (res, req) => {
	res.send("api in progress");
});

app.listen(5000);
