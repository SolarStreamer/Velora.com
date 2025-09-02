const cars = [
  "Velora Nebulon",
  "Velora LX-Nova",
  "Velora Driftstar",
  "Velora Eclipse-R"
];

const searchBar = document.getElementById("searchBar");
const carList = document.getElementById("carList");

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();

  const scoredCars = cars.map(car => {
    const name = car.toLowerCase();
    const score = getSimilarityScore(query, name);
    return { name: car, score };
  });

  scoredCars.sort((a, b) => b.score - a.score);

  carList.innerHTML = "";
  scoredCars.forEach(car => {
    if (car.score > 0) {
      const div = document.createElement("div");
      div.textContent = car.name;
      carList.appendChild(div);
    }
  });
});

// Simple similarity scoring based on shared letters
function getSimilarityScore(a, b) {
  let score = 0;
  for (let char of a) {
    if (b.includes(char)) score++;
  }
  return score;
}