console.log("main.js");

function se() {
  try {
    const searchengine = localStorage.getItem("se");
    const seElement = document.getElementById("uv-search-engine");

    if (searchengine === "google") {
      seElement.value = "https://www.google.com/search?q=%s";
    } else if (searchengine === "bing") {
      seElement.value = "https://www.bing.com/search?q=%s";
    } else if (searchengine === "ddg") {
      seElement.value = "https://duckduckgo.com/?q=%s";
    } else if (searchengine === "brave") {
      seElement.value = "https://search.brave.com/search?q=%s";
    }
  } catch (err) {
    console.log("Something bad happened", err);
  }
}

se();

const texts = [
  "Welcome to RNS v1!",
  "Rip Nativegames",
  "kill yourself!",
  "Do not insert text here",
  "1 + 1 = 11",
  "Rip Nativegames",
  "RNSSS",
  "insert text here",
  "🧀",
  "🥚",
  "🌙",
  "My CPU is 156 degrees :)",
  "Spicy Nacho Doritos are good",
  "Yo so games are cool",
  "Powerade Sucks!",
  "The site to cure total boardness",
];

fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    const ipText = `${data.ip}`;
    texts.push(ipText);
  })
  .catch((error) => {
    console.error("Error fetching IP:", error);
  })
  .finally(() => {
    document.getElementById("rng").innerHTML = getRandomText();
  });

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}

if (navigator.userAgent.indexOf("Firefox") > 0) {
  alert("Firefox is not supported. Please use a Chromium-based browser.");
}

const websites = [
  "YouTube",
  "Facebook",
  "Reddit",
  "X",
  "TikTok",
  "Twitch",
  "my lost socks",
  "Wikipedia",
  "Instagram",
  "Wikipedia",
  "Amazon",
];

const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
const uvaddress = document.getElementById("uv-address");
uvaddress.placeholder = `Try Searching "${randomWebsite}"`;
