function AddFive(...numbers) {
  return numbers.map(x => x + 5)
}

const [a, b, ...others] = [1, 2, 3, 4, 5]; // others [3, 4, 5]

const { e, f, ...rest } = { e: 1, f: 4, g: 5, h: 7 }; // rest  {g: 5, h: 7}
