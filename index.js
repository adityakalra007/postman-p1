const express = require("express");
const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.post("/contact", (req, res) => {
    const { name, mail } = req.body;
    res.send(`Hello! ${name}, Your Mail is: ${mail}`);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
});
