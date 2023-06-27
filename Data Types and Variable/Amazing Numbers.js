function solve(band, album, songName) {
    let durationInSeconds = (album.length * band.length)
    * songName*length / 2;
    let rotations = Math.ceil(durationInSeconds / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs');