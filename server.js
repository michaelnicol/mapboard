const express = require("express");
const { Gpio } = require("onoff");
const LED = new Gpio(4, "out")
const app = express();

app.set("view engine", "ejs")
app.set("views", "./views")
app.use("views", express.static(__dirname + '/views'));

// app.use(express.static("public"))
app.get("/", (req, res) => {
    res.render("index");
})
// My idea is for the Pi to send back paramters to request information from a future database
// app.get("/:bid", (req, res) => {
//     console.log(req.params)
//     res.end();
// })

app.listen(3000)
