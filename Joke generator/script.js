// Function to fetch a joke from the API
async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    
    if (!response.ok) {
      throw new Error("API error");
    }

    const data = await response.json();
    displayJoke(data);
  } catch (error) {
    document.getElementById("setup").textContent = "Couldn't fetch a joke, try again!";
    document.getElementById("punchline").textContent = "";
  }
}

// Function to display joke on the page
function displayJoke(joke) {
  document.getElementById("setup").textContent = joke.setup;
  document.getElementById("punchline").textContent = joke.punchline;
}

// Event listeners
document.getElementById("getJokeBtn").addEventListener("click", getJoke);
document.getElementById("nextJokeBtn").addEventListener("click", getJoke);
