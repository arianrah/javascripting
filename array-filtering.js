const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = n.filter(function (even) {
  return even % 2 === 0;
});

console.log(filtered)