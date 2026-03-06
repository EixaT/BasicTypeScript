interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details

}
interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Metallica",
        year: 1996
    }
}

const song = 'New Song';

// Desestructuración
const { audioVolume, songDuration, song: anotherSong, 
    details
} = audioPlayer;
const { author } = details;


// console.log(audioVolume);
// console.log(songDuration);
// console.log(song, anotherSong);
// console.log(details);
// console.log(author);


// Desestructuración en arreglos
const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];


console.error('Personaje 3:', trunks); // undefined


