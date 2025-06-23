function concertSeats(seats) {
  for (let i = 1; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      const currSeat = seats[i][j];
      const beforeSeat = seats[i - 1][j];
      if (currSeat <= beforeSeat) return false;
    }
  }

  return true;
}

console.log(
  concertSeats([
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
  ])
);
console.log(
  concertSeats([
    [20, 10],
    [25, 40],
    [30, 45],
  ])
);
console.log(
  concertSeats([
    [1, 0],
    [2, 3],
  ])
);
console.log(
  concertSeats([
    [7, 6, 9],
    [3, 2, 1],
    [6, 5, 4],
  ])
);
