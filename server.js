const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/autograb.lua", (req, res) => {
    try {
        const code = fs.readFileSync("./autograb.lua", "utf8");
        res.type("text/plain").send(code);
    } catch (error) {
        res.status(500).send("Failed to load autograb.lua");
    }
});

app.get("/", (req, res) => {
    res.send("Nonslop is online");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
