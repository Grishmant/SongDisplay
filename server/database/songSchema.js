import mongoose from "mongoose";

const songMetadata = mongoose.Schema({
    title: { type: String, required: true },
    artist: {type: String, required: true},
    album: {type: String, required: true},
    duration: {type: Number, required: true},
    path: {type: String, required: true},
    artwork: {type: Buffer}
});


export const SongMetadata = mongoose.model('SongMetadata', songMetadata);