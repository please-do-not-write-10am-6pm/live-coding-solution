const displayDiamond = (start) => {
  const end = start.charCodeAt(0) - "A".charCodeAt(0);
  for (let i = 0; i <= end; i++) {
    const space = new Array(end - i).fill(" ").join("");
    const betweenSpace = new Array(2 * i - 1 >= 0 ? 2 * i - 1 : 0)
      .fill(" ")
      .join("");
    const character = String.fromCharCode("A".charCodeAt(0) + i);
    let middle =
      i === 0 ? character : `${character}${betweenSpace}${character}`;
    console.log(`${space}${middle}${space}`);
  }
  for (let i = end - 1; i >= 0; i--) {
    const space = new Array(end - i).fill(" ").join("");
    const betweenSpace = new Array(2 * i - 1 >= 0 ? 2 * i - 1 : 0)
      .fill(" ")
      .join("");
    const character = String.fromCharCode("A".charCodeAt(0) + i);
    let middle =
      i === 0 ? character : `${character}${betweenSpace}${character}`;
    console.log(`${space}${middle}${space}`);
  }
};

displayDiamond("C");
