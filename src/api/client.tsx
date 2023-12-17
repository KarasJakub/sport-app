import axios from "axios"

export const apiClient = axios.create({
  // Using dotenv would be a better solution, but in this specific case it's overkill
  baseURL: "https://php74.appgo.pl/sport_api/api/public/api",
})
