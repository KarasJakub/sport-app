import axios from "axios"

export const apiClient = axios.create({
  baseURL: "https://php74.appgo.pl/sport_api/api/public/api",
})
