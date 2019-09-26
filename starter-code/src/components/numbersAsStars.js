export default function numbersAsStars(props) {
  let arr = [];
  for (let i = 0; i < Math.round(props); i++) {
    arr.push("★");
  }
  for (let i = 0; i < 5 - Math.round(props); i++) {
    arr.push("☆");
  }

  return arr.join("");
}
