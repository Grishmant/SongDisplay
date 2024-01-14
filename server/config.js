export const DIR = 'C:/Users/grish/Documents/webdev_practice/SongDisplay/song_data/';
export const PORT = 3000;
export const DB_URL = 'mongodb://127.0.0.1:27017/songdisplay';

export function bufferToImage(buffer) {
    const dataUri = `data:image/jpeg;base64,${buffer.toString('base64')}`;
  
    const img = new Image();
    img.src = dataUri;
  
    return img;
  }