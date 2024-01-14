import { parseFile } from "music-metadata";
import fs from "fs/promises";
import { DIR } from "./config.js";

const readDir = async (location) => {
    try {
        return await fs.readdir(location);   
    } catch (error) {
        return [];
    }
};

const songDetails = async (location) => {
    try {
        const data = await parseFile(location); 
        // return data.format.lossless;
        // console.log(data.common);
        return {
            title: data.common.title,
            artist: data.common.artist,
            album: data.common.album,
            duration: data.format.duration,
            path: location,
            artwork: data.common.picture[0].data
        }
    } catch (error) {
        console.log(error.message);
    }
};

// songDetails(DIR + 'Paul Van Dyk - Touched By Heaven.flac');

export { readDir, songDetails };
