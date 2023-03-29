//import axios - promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data
import axios from "axios"

// fetch data from the Goweather-API
export function getSearchWeather(q){
 return axios.get(`https://goweather.herokuapp.com/weather/${q}`)
}
