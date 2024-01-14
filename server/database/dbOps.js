import mongoose from "mongoose";
import { DB_URL, DIR } from "../config.js";
import { SongMetadata } from "./songSchema.js";
import { readDir, songDetails } from "../getSong.js";

const conn = await mongoose
    .connect(DB_URL)
    .catch((err) => console.log(err.message));

async function addElements() {
    try {
        var dir_list = await readDir(DIR);
        dir_list = dir_list.map((val) => DIR + val);
        const songs = await Promise.all(dir_list.map(songDetails));
        // console.log(songs);
        await SongMetadata.create(songs)
            .then(() => console.log("Added to database successfully."))
            .catch((err) => console.log(err.message));
    } catch (error) {
        console.log(error.message);
    } finally {
        if (conn) mongoose.connection.close();
    }
}

async function clearCollection() {
    try {
        const result = await SongMetadata.deleteMany({});
        console.log(
            `Cleared ${result.deletedCount} documents from SongMetadata collection.`
        );
    } catch (error) {
        console.error("Error clearing collection:", error.message);
    } finally {
        if (conn) mongoose.connection.close();
    }
}

// SongMetadata.findOne();
addElements();
// clearCollection();
