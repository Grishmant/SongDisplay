import express, { json } from "express";
import { DIR, PORT, DB_URL } from "./config.js";
import { readDir, songDetails } from "./getSong.js";
import mongoose from "mongoose";
import { SongMetadata } from "./database/songSchema.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", async (req, res) => {
    // var files = await readDir(DIR);
    try {
        const data = await SongMetadata.find();
        res.status(200).send(JSON.stringify(data));
    } catch(error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    // console.log(files);
    // var song = await songDetails(DIR + files[2]);
    // res.send(song);
});

app.get("/:id", async (req, res) => {
    res.send(SongMetadata.findById(req.params.id))
})

mongoose
  .connect(DB_URL)
  .then((val) => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

