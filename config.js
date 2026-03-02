const API_URL = "https://script.google.com/macros/s/AKfycbzOhvYrDFrXe6vo7hjeMkuFH0GJ2exdLNfzy9ZyPASiCu-JcmXY7yHTxixNq29tACB5Jg/exec";

let CONFIG = {};

async function loadConfig() {
  const res = await fetch(API_URL + "?mode=config_all");
  CONFIG = await res.json();
}
