function solve(band, album, songName) {
    let albumLength = album.length;
    let bandLength = band.length;
    let songLength = songName.length;
    let lengthOfTheText = (albumLength * bandLength) * songLength / 2;
    
    let rotations = Math.ceil(lengthOfTheText / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs');