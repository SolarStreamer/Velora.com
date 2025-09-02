function submitReview() {
  const input = document.getElementById("reviewInput").value.trim();
  const output = document.getElementById("reviewOutput");
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  if (reviews.length >= 50) {
    alert("Review limit reached.");
    return;
  }

  if (input.length > 200) {
    alert("Review too long!");
    return;
  }

  if (input !== "") {
    const p = document.createElement("p");
    p.textContent = input;
    output.appendChild(p);

    reviews.push(input);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    document.getElementById("reviewInput").value = "";
  } else {
    alert("Please enter a review before submitting.");
  }
}

