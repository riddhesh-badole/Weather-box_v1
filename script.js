const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const city = document.querySelector(".city");
const time = document.querySelector(".time");
const desc = document.querySelector(".desc");

const wind = document.querySelector(".wind");
const event = document.querySelector(".event");

btn.addEventListener("click", () => {
  fetchText(input.value);
});

async function fetchText(city_value) {
  let response = await fetch(
    `https://api.weather.gov/alerts/active?area=${city_value}`
  );
  let data = await response.json();
//   console.log(data.features[0].properties);

  let title = data.features[0].properties.areaDesc;

  const prop = data.features[0].properties;
  title = title.split(";");
//   console.log(title);

  city.innerHTML = title[0];
  time.innerHTML = "END-IN  - " + prop.parameters.eventEndingTime;
  wind.innerHTML = "WIND SPEED  " + prop.parameters.maxWindGust;
  desc.innerHTML = prop.description;
  event.innerHTML = prop.event;
}
