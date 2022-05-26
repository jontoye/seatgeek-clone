import axios from 'axios'

const BASE_URL = 'https://api.seatgeek.com/2'
const TOP_CATEGORIES = new Map([
  ['Concerts', 1],
  ['NFL', 1],
  ['MLB', 1],
  ['NBA', 1],
  ['NHL', 1],
  ['MLS', 1],
  ['Broadway', 1],
  ['Comedy', 1],
  ['NCAA BB', 1],
  ['NCAA FB', 1],
  ['WWE', 1],
  ['Tennis', 1],
  ['Fighting', 1],
  ['Golf', 1],
])

const AUTH = {
  username: process.env.REACT_APP_SEATGEEK_API_KEY,
  password: ''
}

export const getTopCategories = async () => {
  try {
    const { data: { taxonomies } } = await axios.get(`${BASE_URL}/taxonomies`, { auth: AUTH })

    const categories = taxonomies.filter(cat => TOP_CATEGORIES.get(cat.short_name) || TOP_CATEGORIES.get(cat.name))
    categories.sort((a, b) => b.stats.event_count - a.stats.event_count)

    return categories
  } catch (error) {
    console.error(error)
  }

}

export const getCurrentCityName = async (coords) => {
  const [lng, lat] = coords;
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}&types=place&limit=1`;

  const { data } = await axios.get(URL);
  return data
}

export const getAutocompleteCities = async (search) => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}&country=CA,US&types=place&limit=10`;

  const { data }= await axios.get(URL);
  return data;
}

