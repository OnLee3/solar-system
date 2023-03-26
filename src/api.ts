type PlanetName = "earth" | "mars";

export interface PlanetData {
  name: PlanetName;
  image: string;
}

export async function fetchPlanetData(planetName: PlanetName): Promise<PlanetData> {
  const planetImages = {
    earth: "/src/assets/2k_earth_daymap.jpeg",
    mars: "/src/assets/2k_mars.jpeg",
  };

  return {
    name: planetName,
    image: planetImages[planetName],
  };
}
