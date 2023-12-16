import { apiClient } from "api/client"

export const mainMatchesHandler = async (pageNumber: number) => {
    try {
      const response = await apiClient.get(`/games?page=${pageNumber}&onPage=4&orderDirection=asc
      &orderBy=round`)
        return response.data
    } catch (error) {
        console.log(error)
    }
  }