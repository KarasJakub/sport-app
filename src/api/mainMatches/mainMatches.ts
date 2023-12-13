import { apiClient } from "api/client"

export const mainMatchesHandler = async () => {
    try {
      const response = await apiClient.get('/games?page=1&onPage=5&orderDirection=desc&orderBy=round')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }