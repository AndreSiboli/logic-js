function jazzify(chords) {
  return chords.map((chord) => (chord.endsWith("7") ? chord : `${chord}7`));
}

console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["A7", "D", "E"]));
console.log(jazzify(["G", "F7", "C"]));
