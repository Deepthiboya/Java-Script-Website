/*console.log("=== Hour 1: JSON BASICS ===");

let Book1 = {
  title: "GPS",
  Author: "XYZ",
  year: 2020,
  price: 200,
};

let Book2 = {
  title: "HTML",
  Author: "ABC",
  year: 2021,
  price: 300,
};

let Book3 = {
  title: "CSS",
  Author: "PQR",
  year: 2022,
  price: 400,
};

// Put all books into an array
let books = [Book1, Book2, Book3];

// Convert array of objects to JSON string
let jsonString = JSON.stringify(books);
console.log("jsonString: " + jsonString);

// Convert back to JavaScript object
let parsedObject = JSON.parse(jsonString);
console.log("parsedObject: ", parsedObject);*/


/*console.log("=== Hour 2: AJAX with Fetch ===");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Fetched Data:", data)) 
  .catch(error => console.error("Error fetching:", error));



  fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then(response => response.json())
  .then(data => console.log("Fetched Data:", data)) 
  .catch(error => console.error("Error fetching:", error));

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(response => response.json())
  .then(data => console.log("Fetched Data:", data)) 
  .catch(error => console.error("Error fetching:", error));

console.log("=== Hour 3: Display JSON  ===");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())  
  .then(user => {
    let output = "<h3>User List</h3><ul>";
    user.forEach(user => {     
      output += `<li>${user.name}-(${user.email})</li>`;
    });
    output += "</ul>";

    document.body.innerHTML += output;
  }
  );
*/

console.log("=== Weather Info Fetcher Project  ===");

const cityCoords = {
  bangalore: { lat: 12.9716, lon: 77.5946 },
  delhi: { lat: 28.7041, lon: 77.1025 },
  mumbai: { lat: 19.0760, lon: 72.8777 },
  london: { lat: 51.5074, lon: -0.1278 },
  newyork: { lat: 40.7128, lon: -74.0060 }
};

document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

  if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "City not in list";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Current Weather in ${city}</h3>
          <p>Temperature: ${data.current_weather.temperature}°C</p>
          <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
          <p>Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "No data available";
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weather").innerHTML = "Error fetching weather";
    });
});