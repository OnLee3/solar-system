type PlanetName = "earth" | "mars";

export interface PlanetData {
  name: PlanetName;
  image: string;
}

export async function fetchPlanetData(planetName: PlanetName): Promise<PlanetData> {
  const planetImages = {
    earth: "./assets/2k_earth_daymap.jpeg",
    mars: "./assets/2k_mars.jpeg",
  };

  return {
    name: planetName,
    image: planetImages[planetName],
  };
}
