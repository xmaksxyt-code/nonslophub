const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/script.lua", (req, res) => {
    res.type("text/plain");
    res.send(fs.readFileSync("./script.lua", "utf8"));
});

app.get("/", (req, res) => {
    res.send("Nonslophub is online");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
