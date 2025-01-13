import express from "express";
import getSoapData from "./Client.js";

const app = express();
const port = 2000;


//Middleware to serve static files from the 'public' directory.
app.use(express.static('public'));

app.get("/soap-data", async (req, res) => {
    try {
        const data = await getSoapData();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching SOAP data");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
