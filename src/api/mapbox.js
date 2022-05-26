import axios from "axios";

const BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
const ACCESS_TOKEN = `json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`

export const getCurrentCityName = async (coords) => {
  const [lng, lat] = coords;
  const URL = `${BASE_URL}/${lng},${lat}.${ACCESS_TOKEN}&types=place&limit=1`;

  const { data } = await axios.get(URL);
  return data
}

export const getAutocompleteCities = async (search) => {
  const URL = `${BASE_URL}/${search}.${ACCESS_TOKEN}&country=CA,US&types=place&limit=10`;

  const { data }= await axios.get(URL);
  return data;
}
