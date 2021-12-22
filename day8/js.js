const currentWeek = document.querySelectorAll(".day-of-week");
const currentDate = document.querySelectorAll(".date");
const daylyTemperature = document.querySelectorAll(".temperature");
const daylyLowTemperature = document.querySelectorAll(".low");
const daylyPrecipitation = document.querySelectorAll(".precipitation");

// weather status from https://openweatherweb.org/api
const weatherdescription = {
  clear: "sunny",
  clouds: "cloudy",
  snow: "snowy",
  rain: "rainy",
  drizzle: "partly-cloudy",
  thunderstorm: "stormy",
  mist: "partly-cloudy"
};

const iconNameAndSizeMap = {
  clouds: { width: 264, height: 166, viewBox: "0 0 264 166" },
  clear: { width: 208, height: 213, viewBox: "0 0 208 213" },
  thunderstorm: { width: 246, height: 187, viewBox: "0 0 246 187" },
  snow: { width: 230, height: 196, viewBox: "0 0 230 196" },
  drizzle: { width: 230, height: 209, viewBox: "0 0 230 209" },
  rain: { width: 160, height: 222, viewBox: "0 0 160 222" }
};

const useAll = document.querySelectorAll(".weather use");
const barAll = document.querySelectorAll(".bar");
const imgWeatherSvgAll = document.querySelectorAll(".weather svg");

async function getResponse() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=50.433334&lon=30.516666&appid=3eaa962856d2db43ceb1c670a2c35398"
  );
  const content = await response.json();

  setDailyWeatherHTML(content);
  document.body.append(weatherHeader(content));
}

function setImageAttribs(domElement, imageName) {
  domElement.setAttribute("width", imageName.width);
  domElement.setAttribute("height", imageName.height);
  domElement.setAttribute("viewBox", imageName.viewBox);
  return domElement;
}

const editBarClassList = (elem, className) => {
  elem.classList.remove(elem.classList[1]);
  elem.classList.add(className);
  return elem.classList;
};

const setImageSvg = (imageDiv, imageName) => {
  imageDiv.setAttribute("xlink:href", `#${imageName}`);
};

function setDailyWeatherHTML(data) {
  let i = 0;
  while (i < 7) {
    const unix_timestamp = data.daily[i].dt;
    const date = new Date(unix_timestamp * 1000);
    const weatherStatus = data.daily[i].weather[0].main.toLowerCase();

    currentWeek[i].textContent = date.toString().slice(0, 4);
    currentDate[i].textContent = date.toString().slice(8, 10);
    daylyTemperature[i].innerHTML =
      Math.round(data.daily[i].temp.day - 273) +
      "<span class='degrees'>&deg;</span>";

    daylyLowTemperature[i].innerHTML = `
      <svg role="img" class="icon">
                <use xlink:href="#low"></use>
              </svg>
              ${Math.round(data.daily[i].temp.night - 273)}&deg;`;

    daylyPrecipitation[i].innerHTML = `
      <svg role="img" class="icon">
                <use xlink:href="#precipitation"></use>
              </svg>
              ${data.daily[i].humidity}%`;

    editBarClassList(barAll[i], weatherdescription[weatherStatus]);
    setImageSvg(useAll[i], weatherdescription[weatherStatus]);
    setImageAttribs(imgWeatherSvgAll[i], iconNameAndSizeMap[weatherStatus]);
    i++;
  }
}

function weatherHeader(data) {
  const divH1 = document.createElement("div");
  divH1.innerHTML = `${data.timezone} - Weekly Weather`;
  divH1.style.position = "absolute";
  divH1.style.color = "orange";
  divH1.style.fontSize = "44px";
  divH1.style.top = "10px";
  return divH1;
}

getResponse();
