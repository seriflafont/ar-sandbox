import { CITIES } from "./cities";
const PURPLE = "9966cc";
const NUM_RINGS = 1;
const RINGS_MAX_R = 4; // deg
const RING_PROPAGATION_SPEED = 5; // deg/sec
const ARC_REL_LEN = 0.9;
const FLIGHT_TIME = 1000;

const world = window.GlobeAR();
world(document.getElementById("globeViz"));

function getCities(count, data = {}) {
  return CITIES.map(([lat, lng]) => {
    return {
      lat,
      lng,
      ...data,
    };
  });
}
const FORMATTED_CITIES = getCities(20);

fetch("../datasets/ne_110m_admin_0_countries.geojson")
  .then((res) => res.json())
  .then((countries) => {
    setupGlobe(countries.features);
  });

const setupGlobe = (polygonCountries) => {
  world
    .globeImageUrl("../src/assets/earth-light.jpg")
    .hexPolygonsData(polygonCountries)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.3)
    .hexPolygonAltitude(0.03)
    .hexPolygonColor(() => "#89E0D1");
};