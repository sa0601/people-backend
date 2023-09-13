require('dotenv').config();
const express = require('express');
const app = express();
PORT = process.env.PORT || 8080;
const peopleController = require("./controller/peopleController");
const morgan = require('morgan');

//MIDDLEWARE

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Sanity Check");
});
app.use("/people", peopleController);

app.listen(PORT, () => console.log("give me the love on port, " + PORT));