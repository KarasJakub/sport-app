import axios from "axios"

const createAxiosInstance = (baseUrl: string) => {
  axios.create({
    baseURL: baseUrl,
  })
}

export const apiClient = createAxiosInstance(
  "https://php74.appgo.pl/sport_api/api/public/api" || ""
)
