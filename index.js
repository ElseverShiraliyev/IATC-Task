const apiKey = "2cf433b803836999fd37262569cda242";
const city = "İsmayıllı"; // Istediyimiz sherin adini daxil edrek hava temperaturu haqqinda melumat elde ede bilerik.

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    console.log(`Hava temperaturu ${temperature}°C`);
  })
  .catch((error) => console.error(error));
