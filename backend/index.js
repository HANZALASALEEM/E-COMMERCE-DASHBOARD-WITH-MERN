const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = async () => {
	mongoose.connect("mongodb://localhost:27017/new");
	const schema = new mongoose.Schema({});
	const collection = mongoose.model("new", schema);
	const data = await collection.find();
	console.log(data);
};
connectDB();
app.get("/", (req, res) => {
	res.send("App is Working ...");
});

app.listen(5000);
